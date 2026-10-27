// node batch.cjs name slug... → out/<name>.html with every slug's .figcap bodies in one document
const fs=require('fs');const [name,...slugs]=process.argv.slice(2);const idx=require('./out/index.json');
let head=null,bodies=[],n=0;
for(const s of slugs){const h=fs.readFileSync('out/'+s+'.html','utf8');const i=h.indexOf('<body>');if(!head)head=h.slice(0,i);bodies.push(h.slice(i+6,h.lastIndexOf('</body>')));n+=idx[s].variants.length}
if(n>20){console.error('TOO MANY',n);process.exit(1)}
fs.writeFileSync('out/'+name+'.html',head+'<body>'+bodies.join('')+'</body></html>');console.log(name,n,'variants',Math.round(fs.statSync('out/'+name+'.html').size/1024)+'KB');
