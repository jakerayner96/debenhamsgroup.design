// node run.cjs <page> <slug> [slug...] < response.json  → prints the tiny use_figma runner for that capture
const fs=require('fs');const idx=require('./out/index.json');
const [page,...slugs]=process.argv.slice(2);const resp=JSON.parse(fs.readFileSync(0,'utf8'));let ids=resp.nodeIds.slice();
const items=slugs.map(s=>{const m=idx[s];const n=m.variants.length;return{slug:s,name:m.name,summary:m.summary,css:m.css,variants:m.variants,ids:ids.splice(0,n)}});
if(ids.length)console.error('LEFTOVER IDS',ids);
const args={page,site:'https://jakerayner96.github.io/debenhamsgroup.design/#c-',items};
console.log(`const v=await figma.variables.getVariableByIdAsync('VariableID:12:3');const src=v.valuesByMode[Object.keys(v.valuesByMode)[0]];const AF=Object.getPrototypeOf(async function(){}).constructor;return await new AF('figma','args',src)(figma,${JSON.stringify(args)});`);
