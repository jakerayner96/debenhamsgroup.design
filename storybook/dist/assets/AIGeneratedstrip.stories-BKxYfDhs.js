const o={title:"DG/Product/AI Generated strip",tags:["autodocs"],parameters:{docs:{description:{component:`Mandatory label for AI-generated imagery (EU AI Act Art. 50(4)). Live text, full width, pinned to the image foot, before add-to-bag everywhere.

**When to use** 
- Every image flagged AI, on PLP, PDP, rails and search.

**Avoid** 
- Baking it into the image.
- Hiding it behind other badges.

**Anatomy** 
- Height --ai-h 24px · 10px minimum text · badge colours per brand
- Other badges shift up by exactly --ai-h · hidden in bag / checkout (legal sign-off)

**CSS** \`.badge-ai\` · **Figma** d0zY0vt8hoz0gq8ycTimxS

**Front-end Storybook** no counterpart yet (*ours*). Not in the dev Storybook (icons_ai / ai_summary_sparkles exist in Atoms/Icon). Build to this spec.`}}}},e={name:"On image",render:()=>`<article class="pc" style="width:180px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    <div class="badge-ai"><b>AI</b> Generated</div>
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price"><span class="now">£70.00</span></div>
    
    
  </div></article>`},a={name:"Strip alone",render:()=>'<div style="position:relative;width:200px;height:24px"><div class="badge-ai" style="position:absolute;inset:0"><b>AI</b> Generated</div></div>'};var i,s,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "On image",
  render: () => \`<article class="pc" style="width:180px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    <div class="badge-ai"><b>AI</b> Generated</div>
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price"><span class="now">£70.00</span></div>
    
    
  </div></article>\`
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var n,d,r;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Strip alone",
  render: () => \`<div style="position:relative;width:200px;height:24px"><div class="badge-ai" style="position:absolute;inset:0"><b>AI</b> Generated</div></div>\`
}`,...(r=(d=a.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};const c=["onImage","stripAlone"];export{c as __namedExportsOrder,o as default,e as onImage,a as stripAlone};
