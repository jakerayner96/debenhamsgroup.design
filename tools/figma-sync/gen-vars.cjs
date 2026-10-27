const fs=require('fs');
const o=require('./tokens-by-brand.json');const B=Object.keys(o);
const css=fs.readFileSync(__dirname+'/../../assets/ds/tokens.css','utf8').replace(/\/\*[\s\S]*?\*\//g,'');
const decls={};for(const m of css.matchAll(/(--[a-zA-Z0-9_-]+)\s*:\s*([^;}]+)/g))(decls[m[1]]=decls[m[1]]||[]).push(m[2].trim());
const N=Object.keys(o.debenhams);
const hex=s=>{s=s.replace('#','');if(s.length<=4)s=[...s].map(c=>c+c).join('');const n=parseInt(s.slice(0,6),16);return{r:(n>>16&255)/255,g:(n>>8&255)/255,b:(n&255)/255,a:s.length===8?parseInt(s.slice(6),16)/255:1}};
const r3=x=>Math.round(x*10000)/10000;
function color(v){v=v.trim();if(v==='transparent')return{r:0,g:0,b:0,a:0};if(v.startsWith('#'))return hex(v);
 let m=v.match(/rgba?\(([^)]+)\)/);if(m){const p=m[1].split(/[ ,\/]+/).filter(Boolean).map(Number);return{r:p[0]/255,g:p[1]/255,b:p[2]/255,a:p.length>3?p[3]:1}}
 m=v.match(/gradient\([^,]+,\s*(#[0-9a-fA-F]{3,8})/);if(m)return hex(m[1]);return null}
const kind=v=>!v?null:/gradient/.test(v)?'grad':/^(#|rgb|transparent$)/.test(v)?'color':/^-?[\d.]+px$/.test(v)?'px':/^-?[\d.]+$/.test(v)?'num':/^\d+px -?\d|^0 \d/.test(v)&&/rgba/.test(v)?'shadow':'str';
function scopes(n,k){const s=n.slice(2);
 if(k==='color'){if(/^text-|-fg$|-ink$|^link/.test(s))return['TEXT_FILL'];if(/^border-|-border$|-bd$|-outline/.test(s))return['STROKE_COLOR'];if(/^surface-|-bg$/.test(s))return['FRAME_FILL','SHAPE_FILL'];return['ALL_FILLS','STROKE_COLOR']}
 if(k==='px'||k==='num'){if(/^z-/.test(s))return[];if(/^(gap|space)-|-gap$|-p$|-pad$/.test(s))return['GAP'];if(/radius|-r$/.test(s))return['CORNER_RADIUS'];if(/^border-w|outline/.test(s))return['STROKE_FLOAT'];if(/-lh$/.test(s))return['LINE_HEIGHT'];
  if(/(^w-|-w$|weight)/.test(s))return['FONT_WEIGHT'];if(/^price-|-fs$|-size$/.test(s))return['FONT_SIZE'];if(s==='gap-unit')return[];return['WIDTH_HEIGHT']}
 if(/^font-family/.test(s))return['FONT_FAMILY'];return[]}
const WS={100:'Thin',200:'ExtraLight',300:'Light',400:'Regular',500:'Medium',600:'SemiBold',700:'Bold',800:'ExtraBold',900:'Black'};
const vars=[],skipped=[];
for(const n of N){
 const vals=B.map(b=>o[b][n]);const fb=vals.find(x=>x);if(!fb){skipped.push(n+' (empty)');continue}
 const filled=vals.map(v=>v||fb);const ks=new Set(filled.map(kind));
 let k=[...ks].includes('grad')?([...ks].length>1||new Set(filled).size>1?'color':'grad'):[...ks][0];
 if(ks.size>1&&!ks.has('grad'))k=[...ks].every(x=>x==='px'||x==='num')?'px':'str';
 if(k==='grad'||k==='shadow'){skipped.push(n+' ('+k+' → style)');continue}
 if(/^(--dur|--ease)/.test(n))k='str';
 const name=n.slice(2).replace('-','/');
 const h8=c=>'#'+[c.r,c.g,c.b,c.a].map(x=>Math.round(x*255).toString(16).padStart(2,'0')).join('');
 let conv=v=>k==='color'?h8(color(v)):(k==='px'||k==='num')?parseFloat(v):(n==='--font-family-base'?v.split(',')[0].replace(/['"]/g,'').trim():v.replace(/^['"]|['"]$/g,''));
 const type=k==='color'?'COLOR':(k==='px'||k==='num')?'FLOAT':'STRING';
 const uniq=new Set(filled).size===1;
 const d=decls[n]||[];const al=d.length&&d.every(x=>/^var\((--[\w-]+)\)$/.test(x))&&new Set(d).size===1?d[0].match(/var\((--[\w-]+)\)/)[1]:null;
 vars.push({css:n,name,type,scopes:scopes(n,k),coll:uniq?'Core':'Brand',value:uniq?conv(filled[0]):undefined,values:uniq?undefined:filled.map(conv),alias:al?al.slice(2).replace('-','/'):null});
}
// derived: font style names so static fonts follow the brand weight
for(const [w,label] of [['--w-regular','regular'],['--w-strong','strong'],['--w-btn','btn']]){const vals=B.map(b=>WS[o[b][w]]);vars.push({css:w,name:'font/style-'+label,type:'STRING',scopes:['FONT_STYLE'],coll:new Set(vals).size===1?'Core':'Brand',value:new Set(vals).size===1?vals[0]:undefined,values:new Set(vals).size===1?undefined:vals,alias:null,derived:true})}
// a bare name can't sit beside a group of the same name in Figma
const nm=new Set(vars.map(v=>v.name));const ren={};vars.forEach(v=>{if([...nm].some(x=>x.startsWith(v.name+'/'))){ren[v.name]=v.name+'/default';v.name+='/default'}});vars.forEach(v=>{if(v.alias&&ren[v.alias])v.alias=ren[v.alias]});
// aliases must point at a var we made
const have=new Set(vars.map(v=>v.name));vars.forEach(v=>{if(v.alias&&!have.has(v.alias))v.alias=null;if(v.alias&&vars.find(x=>x.name===v.alias).coll==='Brand'&&v.coll==='Core')v.alias=null});
fs.writeFileSync(__dirname+'/vars.json',JSON.stringify({brands:B,vars}));
console.log('vars',vars.length,'core',vars.filter(v=>v.coll==='Core').length,'brand',vars.filter(v=>v.coll==='Brand').length,'aliases',vars.filter(v=>v.alias).length,'bytes',JSON.stringify(vars).length);
console.log('skipped',skipped.join(' · '));
console.log(vars.filter(v=>v.type==='STRING').map(v=>v.name).join(' '));
