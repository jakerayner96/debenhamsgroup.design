/* DG Group Design System — AI Generated strip copy (C-17 .badge-ai). One translatable string per language, never an image asset.
   Drop-in: DG_aiStrip(lang) → '<span class="badge-ai" lang="fr">Généré par l'<b>IA</b></span>' · DG_aiAlt(lang) → the alt-text suffix · DG_AI_COPY = the table.

   Wording (checked 27 Oct 2026). No law prescribes the words:
   - EU AI Act Art. 50(4): deployers must disclose that the content is "artificially generated or manipulated", clearly and at first exposure.
     Each language version: FR "générés ou manipulés par une IA" · DE "künstlich erzeugt oder manipuliert" (KI) · NL "kunstmatig gegenereerd" (AI)
     · PL "sztucznie wygenerowane" (AI) · SV "genererats artificiellt" (AI).
   - Code of Practice on transparency of AI-generated content (final, 10 Jun 2026), measure 1.1: the main element is the capitalised acronym "AI" in English.
     A national acronym is allowed only where national language law requires it (France, Loi Toubon → "IA"). Adding "generated" is encouraged:
     in user testing, labels with text did better than the acronym alone. A UI overlay on the image, with no overlap, is an accepted placement.
     Alt text / screen-reader exposure is encouraged.
   - German "KI" follows the statute and common usage (Meta "KI-Info", TikTok "KI-generiert"). The strict Code reading would be "AI-generiert": legal to confirm.
   - Polish uses "AI", not "SI": it is the statute's term and the EU icon's.
   - UK (ASA / CAP): no wording set; label where the image could otherwise mislead. English copy covers the UK.
   - France, legal check before launch: "Photographie retouchée" (Code de la santé publique R.2133-4) may also apply to AI-altered model bodies. */
(function(root){
  const DG_AI_COPY={
    en:{name:'English', strip:'<b>AI</b> Generated',       alt:'AI generated image'},
    fr:{name:'French',  strip:'Généré par l’<b>IA</b>',     alt:'Image générée par l’IA'},
    nl:{name:'Dutch',   strip:'<b>AI</b>-gegenereerd',      alt:'Door AI gegenereerde afbeelding'},
    pl:{name:'Polish',  strip:'Wygenerowane przez <b>AI</b>', alt:'Obraz wygenerowany przez AI'},
    de:{name:'German',  strip:'<b>KI</b>-generiert',        alt:'KI-generiertes Bild'},
    sv:{name:'Swedish', strip:'<b>AI</b>-genererad',        alt:'AI-genererad bild'}
  };
  const pick=l=>DG_AI_COPY[l]||DG_AI_COPY.en;
  root.DG_AI_COPY=DG_AI_COPY;
  root.DG_aiStrip=(lang='en',tag='span')=>`<${tag} class="badge-ai" lang="${DG_AI_COPY[lang]?lang:'en'}">${pick(lang).strip}</${tag}>`;
  root.DG_aiAlt=lang=>pick(lang).alt;
})(typeof window!=='undefined'?window:globalThis);
