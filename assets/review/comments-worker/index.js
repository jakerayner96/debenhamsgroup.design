// Review comments store — Figma-style pinned threads for prototype pages.
// KV doc per context key (e.g. "p05:debenhams:new"): [{id,anchor,name,text,ts,resolved,replies:[{name,text,ts}]}]
// Client: assets/review/comments.js. Deployed under the same account as ux-design-request-proxy.

const ORIGINS = new Set([
  'https://jakerayner96.github.io',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'null', // file:// review
]);
const KEY_RE = /^[a-z0-9:_-]{1,80}$/i;

function cors(origin) {
  const allow = ORIGINS.has(origin) ? origin : 'https://jakerayner96.github.io';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
}
const json = (body, status, headers) =>
  new Response(JSON.stringify(body), { status, headers: { ...headers, 'Content-Type': 'application/json' } });

const clip = (v, n) => String(v == null ? '' : v).slice(0, n);

export default {
  async fetch(request, env) {
    const headers = cors(request.headers.get('Origin') || '');
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });

    const url = new URL(request.url);

    if (request.method === 'GET' && url.pathname === '/doc') {
      const k = url.searchParams.get('k') || '';
      if (!KEY_RE.test(k)) return json({ ok: false, error: 'bad key' }, 400, headers);
      const doc = (await env.PLP_COMMENTS.get(k, 'json')) || [];
      return json({ ok: true, threads: doc }, 200, headers);
    }

    if (request.method === 'POST' && ['/thread', '/reply', '/resolve', '/delete'].includes(url.pathname)) {
      let body;
      try { body = await request.json(); } catch { return json({ ok: false, error: 'bad json' }, 400, headers); }
      const k = body.k || '';
      if (!KEY_RE.test(k)) return json({ ok: false, error: 'bad key' }, 400, headers);
      const doc = (await env.PLP_COMMENTS.get(k, 'json')) || [];

      if (url.pathname === '/thread') {
        const t = body.thread || {};
        if (!clip(t.text, 2000).trim()) return json({ ok: false, error: 'empty' }, 400, headers);
        if (!clip(t.name, 60).trim()) return json({ ok: false, error: 'name required' }, 400, headers);
        if (doc.length >= 500) return json({ ok: false, error: 'thread cap' }, 429, headers);
        doc.push({
          id: clip(t.id, 40) || (Date.now() + '-' + Math.random().toString(36).slice(2, 8)),
          anchor: { key: clip(t.anchor && t.anchor.key, 60) || 'page', rx: +((t.anchor && t.anchor.rx) || 0), ry: +((t.anchor && t.anchor.ry) || 0) },
          name: clip(t.name, 60),
          text: clip(t.text, 2000),
          ts: Date.now(),
          resolved: false,
          replies: [],
        });
      } else if (url.pathname === '/reply') {
        const t = doc.find(x => x.id === body.id);
        if (!t) return json({ ok: false, error: 'no thread' }, 404, headers);
        if (!clip(body.text, 2000).trim()) return json({ ok: false, error: 'empty' }, 400, headers);
        if (!clip(body.name, 60).trim()) return json({ ok: false, error: 'name required' }, 400, headers);
        if (t.replies.length >= 200) return json({ ok: false, error: 'reply cap' }, 429, headers);
        t.replies.push({ name: clip(body.name, 60), text: clip(body.text, 2000), ts: Date.now() });
      } else if (url.pathname === '/resolve') {
        const t = doc.find(x => x.id === body.id);
        if (!t) return json({ ok: false, error: 'no thread' }, 404, headers);
        t.resolved = !!body.resolved;
      } else {
        const i = doc.findIndex(x => x.id === body.id);
        if (i < 0) return json({ ok: false, error: 'no thread' }, 404, headers);
        doc.splice(i, 1);
      }

      await env.PLP_COMMENTS.put(k, JSON.stringify(doc));
      return json({ ok: true, threads: doc }, 200, headers);
    }

    return json({ ok: false, error: 'not found' }, 404, headers);
  },
};
