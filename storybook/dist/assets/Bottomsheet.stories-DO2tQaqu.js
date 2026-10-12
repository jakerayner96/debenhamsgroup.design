const d={title:"DG/Overlays & bag/Bottom sheet",tags:["autodocs"],parameters:{docs:{description:{component:`The mobile overlay shell: scrim, white panel to 56px from the top, sticky footer. From 768px it becomes a centred card.

**When to use** 
- Filters, size picker, Shop The Set, added to bag.

**Avoid** 
- A sheet inside a sheet.

**Anatomy** 
- Scrim 40% · panel 4px top radius · head · scroll body · pinned foot
- .sheet--auto hugs content · .sheet--dark for the VTO variant

**CSS** \`.sheet\` · **Figma** Modal / Mobile 5539:23018

**Front-end Storybook** [Molecules/Side Panel](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/molecules-side-panel--docs) — *partial*. Dev Side Panel slides from the side (dimBackground · gradientEdge · align · top / height). Atoms/Modal is the centred card. Ours is bottom-anchored on mobile — agree one shell with an anchor prop.`}}}},e={name:"Shell (inline)",render:()=>'<div style="position:relative;width:360px;height:420px;background:#ddd;overflow:hidden;border-radius:4px"><div class="sheet open" style="position:absolute"><div class="scrim"></div><div class="panel" style="height:340px"><div style="padding:0 16px 16px;font-size:18px;font-weight:var(--w-strong);display:flex;justify-content:space-between">Choose a size <span style="font-weight:300">×</span></div><div style="flex:1;padding:0 16px;font-size:14px;color:var(--text-secondary)">Body scrolls</div><div style="padding:16px;border-top:1px solid var(--border-subtle)"><button class="bd pri" style="width:100%">Add to bag</button></div></div></div></div>'};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Shell (inline)",
  render: () => \`<div style="position:relative;width:360px;height:420px;background:#ddd;overflow:hidden;border-radius:4px"><div class="sheet open" style="position:absolute"><div class="scrim"></div><div class="panel" style="height:340px"><div style="padding:0 16px 16px;font-size:18px;font-weight:var(--w-strong);display:flex;justify-content:space-between">Choose a size <span style="font-weight:300">×</span></div><div style="flex:1;padding:0 16px;font-size:14px;color:var(--text-secondary)">Body scrolls</div><div style="padding:16px;border-top:1px solid var(--border-subtle)"><button class="bd pri" style="width:100%">Add to bag</button></div></div></div></div>\`
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const i=["shellInline"];export{i as __namedExportsOrder,d as default,e as shellInline};
