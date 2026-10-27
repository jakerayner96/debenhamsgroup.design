// node runmulti.cjs "Page:b15,b16" "Page2:b17" ... → one use_figma script running the stored binder once per page
const fs=require('fs');const idx=require('./out/index.json');const plan=require('./plan.json');
const runs=process.argv.slice(2).map(a=>{const [page,bs]=a.split(':');const items=[];
 for(const b of bs.split(',')){const slugs=plan.find(p=>p[0]===b)[2];let ids=JSON.parse(fs.readFileSync('out/'+b+'.resp.json','utf8')).nodeIds.slice();
  for(const s of slugs){const m=idx[s];items.push({slug:s,name:m.name,summary:m.summary,css:m.css,variants:m.variants,ids:ids.splice(0,m.variants.length)})}
  if(ids.length)console.error('LEFTOVER',b,ids)}
 return {page,site:'https://jakerayner96.github.io/debenhamsgroup.design/#c-',items}});
console.log(`const v=await figma.variables.getVariableByIdAsync('VariableID:12:3');const src=v.valuesByMode[Object.keys(v.valuesByMode)[0]];const AF=Object.getPrototypeOf(async function(){}).constructor;const out=[];for(const a of ${JSON.stringify(runs)})out.push(await new AF('figma','args',src)(figma,a));return out;`);
