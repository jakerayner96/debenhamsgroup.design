// node run2.cjs <page> <batch>... → one runner covering several posted batches on the same page (slugs from plan.json)
const fs=require('fs');const idx=require('./out/index.json');const plan=require('./plan.json');
const [page,...bs]=process.argv.slice(2);const items=[];
for(const b of bs){const slugs=plan.find(p=>p[0]===b)[2];let ids=JSON.parse(fs.readFileSync('out/'+b+'.resp.json','utf8')).nodeIds.slice();
 for(const s of slugs){const m=idx[s];items.push({slug:s,name:m.name,summary:m.summary,css:m.css,variants:m.variants,ids:ids.splice(0,m.variants.length)})}
 if(ids.length)console.error('LEFTOVER',b,ids)}
console.log(`const v=await figma.variables.getVariableByIdAsync('VariableID:12:3');const src=v.valuesByMode[Object.keys(v.valuesByMode)[0]];const AF=Object.getPrototypeOf(async function(){}).constructor;return await new AF('figma','args',src)(figma,${JSON.stringify({page,site:'https://jakerayner96.github.io/debenhamsgroup.design/#c-',items})});`);
