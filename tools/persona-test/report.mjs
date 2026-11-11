#!/usr/bin/env node
// Build the findings report for a persona run and log it on the DS site (#persona-tests).
//   node tools/persona-test/report.mjs <results.json> <out.html> [--log]
// results.json: { site, prototype, url, date, summary?, personas:[ { id, device, scenarios:[ { i, outcome:'pass'|'issue'|'blocked'|'skipped',
//   notes, findings:[ { sev:'CRITICAL'|'HIGH'|'MEDIUM'|'LOW', text, shot?:'shots/x.png' } ] } ] } ] }
// The report is a DS page: tokens.css + components.css + the Persona card (same data), in the site's fascia mode. --log adds the run to assets/ds/personas/runs.js.
import fs from 'fs'; import path from 'path'; import { load, site, ROOT, KINDS } from './lib.mjs';
const [inp, out] = process.argv.slice(2); if (!inp || !out) { console.log('usage: report.mjs <results.json> <out.html> [--log]'); process.exit(1); }
const R = JSON.parse(fs.readFileSync(inp, 'utf8')); const D = load(); const b = site(D, R.site);
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const DS = process.env.DS_BASE || 'https://jakerayner96.github.io/debenhamsgroup.design/';
const SEV = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW']; const all = R.personas.flatMap(p => p.scenarios.flatMap(s => (s.findings || []).map(f => ({ ...f, p, s }))));
const count = SEV.map(k => [k, all.filter(f => f.sev === k).length]).filter(x => x[1]);
const tally = count.map(([k, n]) => `${n} ${k.toLowerCase()}`).join(' · ') || 'no findings';
const OUT = { pass: 'Pass', issue: 'Issues', blocked: 'Blocked', skipped: 'Not run' };
const body = R.personas.map(rp => { const p = b.personas.find(x => x.id === rp.id); if (!p) throw new Error('unknown persona ' + rp.id);
  return `<section class="rp"><div class="rp-card" data-brand="${b.slug}" id="card-${p.id}"></div><div class="rp-res"><h2>${esc(p.label)} <small>${esc(rp.device || '')}</small></h2>
  ${rp.scenarios.map(s => { const sc = p.scen[s.i]; return `<div class="rp-s" data-o="${s.outcome}"><div class="rp-sh"><span class="rp-k" data-k="${sc.k}"></span><b>${esc(sc.t)}</b><em>${esc(sc.v)} · ${KINDS[sc.k]}</em><span class="rp-o">${OUT[s.outcome] || esc(s.outcome)}</span></div>
    ${s.notes ? `<p>${esc(s.notes)}</p>` : ''}${(s.findings || []).map(f => `<div class="rp-f"><span class="persona-sev" data-sev="${f.sev.toLowerCase()}">${f.sev}</span>${esc(f.text)}${f.shot ? `<a href="${esc(f.shot)}" target="_blank"><img src="${esc(f.shot)}" alt="" loading="lazy"></a>` : ''}</div>`).join('')}</div>` }).join('')}</div></section>` }).join('');
const html = `<!doctype html><html lang="en" data-brand="${b.slug}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Persona test · ${esc(b.name)} · ${esc(R.prototype)}</title>
<link rel="stylesheet" href="${DS}assets/ds/tokens.css"><link rel="stylesheet" href="${DS}assets/ds/components.css">
<style>body{margin:0;background:var(--surface-sunken);color:var(--text-primary);font-family:var(--font-family-base);font-weight:var(--w-regular)}
.wrap{max-width:1280px;margin:0 auto;padding:40px 24px 80px}.eye{font-size:12px;letter-spacing:.14em;color:var(--text-secondary);text-transform:uppercase}
h1{font-size:40px;line-height:1.1;margin:8px 0 12px;font-weight:var(--w-strong)}.sum{display:flex;gap:12px;flex-wrap:wrap;margin:0 0 32px;font-size:14px;color:var(--text-secondary)}
.sum b{color:var(--text-primary)}.rp{display:grid;grid-template-columns:300px 1fr;gap:24px;margin:0 0 40px;align-items:start}
.rp-res h2{margin:0 0 12px;font-size:20px}.rp-res h2 small{font-size:13px;color:var(--text-secondary);font-weight:var(--w-regular)}
.rp-s{background:var(--surface-raised);border:1px solid var(--border-subtle);border-radius:var(--radius-lg);padding:12px 16px;margin-bottom:8px}
.rp-sh{display:grid;grid-template-columns:8px 1fr auto auto;gap:10px;align-items:baseline}.rp-sh em{font-style:normal;font-size:12px;color:var(--text-secondary)}
.rp-k{width:8px;height:8px;border-radius:50%;background:var(--season-everyday)}.rp-k[data-k=christmas]{background:var(--season-christmas)}.rp-k[data-k=sale]{background:var(--season-sale)}.rp-k[data-k=bf]{background:var(--season-bf)}
.rp-o{font-size:12px;font-weight:var(--w-strong);padding:2px 8px;border-radius:var(--radius-pill);background:var(--surface-success);color:var(--text-success)}
[data-o=issue] .rp-o{background:var(--surface-error);color:var(--text-error)}[data-o=blocked] .rp-o,[data-o=skipped] .rp-o{background:var(--surface-sunken);color:var(--text-secondary)}
.rp-s p{margin:8px 0 0 18px;font-size:14px;line-height:20px;color:var(--text-secondary)}.rp-f{margin:8px 0 0 18px;font-size:14px;line-height:20px}
.rp-f img{display:block;margin-top:8px;max-width:240px;border:1px solid var(--border-subtle);border-radius:var(--radius-default)}
@media(max-width:800px){.rp{grid-template-columns:1fr}}</style></head><body><div class="wrap">
<div class="eye">Persona test · ${esc(b.name)} · ${esc(R.date)}</div><h1>${esc(R.prototype)}</h1>
<div class="sum"><span><a href="${esc(R.url)}">${esc(R.url)}</a></span><span><b>${R.personas.length}</b> personas</span><span><b>${R.personas.reduce((n, p) => n + p.scenarios.length, 0)}</b> scenarios</span><span><b>${tally}</b></span></div>
${R.summary ? `<p style="max-width:760px;font-size:16px;line-height:24px">${esc(R.summary)}</p>` : ''}
${DG_legend()}<div style="height:24px"></div>${body}</div>
<script src="${DS}assets/ds/personas-data.js"></script><script src="${DS}assets/ds/personas.js"></script>
<script>document.querySelectorAll('.rp-card').forEach(el=>{el.innerHTML=DG_personaCard(DG_persona('${b.slug}',el.id.slice(5)),{slug:'r'})})</script></body></html>`;
function DG_legend() { return `<ul class="persona-legend">${D.meta.legend.map(l => `<li data-k="${l[0]}"><i></i>${esc(l[1])}</li>`).join('')}</ul>` }
fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true }); fs.writeFileSync(out, html); console.log('report →', out, '·', tally);
if (process.argv.includes('--log')) { const f = path.join(ROOT, 'assets/ds/personas/runs.js'); let s = fs.readFileSync(f, 'utf8');
  const rel = path.relative(ROOT, path.resolve(out)); const run = { date: R.date, site: b.name, prototype: R.prototype, url: R.url, personas: `${R.personas.length} persona${R.personas.length === 1 ? "" : "s"} · ${R.personas.reduce((n, p) => n + p.scenarios.length, 0)} scenarios`, findings: tally, report: rel.startsWith('..') ? out : rel };
  const i = s.indexOf('window.DG_PERSONA_RUNS='); const arr = JSON.parse(s.slice(i + 23).trim().replace(/;\s*$/, '')); arr.unshift(run);
  fs.writeFileSync(f, s.slice(0, i) + 'window.DG_PERSONA_RUNS=' + JSON.stringify(arr, null, 1) + ';\n'); console.log('logged in assets/ds/personas/runs.js'); }
