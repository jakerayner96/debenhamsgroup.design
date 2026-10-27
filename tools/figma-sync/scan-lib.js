// use_figma (read-only): every component set / component carrying a DS docs link → { slug: nodeId }
const out = {}; const pages = {};
for (const p of figma.root.children) {
  pages[p.name] = p.id;
  await figma.setCurrentPageAsync(p);
  for (const n of p.findAllWithCriteria({ types: ['COMPONENT_SET', 'COMPONENT'] })) {
    if (n.type === 'COMPONENT' && n.parent && n.parent.type === 'COMPONENT_SET') continue;
    const l = (n.documentationLinks || [])[0]; const m = l && l.uri.match(/#c-(.+)$/); if (m) out[m[1]] = n.id;
  }
}
return { components: out, pages };
