# KM Premier colours

**Brief (Jake, 21 Oct 2026):** the Karen Millen PDP with different colour options for the Premier and Deliver+ boxes. Keep the layout as it is and change only the background and text colours, so they stop being solid black and clashing with Add to bag.

**Page:** the DS PDP template `templates/pdp.html?brand=karenmillen` (master = the Shopping agent PDP), embedded as it stands. Nothing on it is rebuilt.
**Components:** Membership box (`DG_memberBoxHTML(brand,o)`, `--mb-*`) and the Deliver+ PDP banner (`--dplus-*`). The dark-ink lockup `DG_DPLUS_CO_LOGOS` and `prem-logo-km-ink.png` are used on light grounds.
**Inspo:** Jake's two mocks. 1 = blush Premier with an outlined Add, and white Deliver+ with a KM-brown Learn More. 2 = "Orange accent": white Premier with an orange keyline and orange Add, and blush Deliver+.

## Options (KM DS tokens)
| Option | Premier | Deliver+ |
|---|---|---|
| Today | #000 / white, white Add | #000 / white |
| Blush Premier · white Deliver+ (inspo 1) | #FAE9E1, outlined white Add | #FFF, keyline #E7E7E7, Learn More #892D05 |
| Orange accent (inspo 2) | #FFF, keyline #D24508, Add #D24508 | #FAE9E1, Learn More #892D05 |
| Blush, both | #FAE9E1, black Add | same, Learn More #892D05 |
| White + grey keyline | #FFF, keyline #E7E7E7, black Add | #FFF, keyline #E7E7E7 |
| Grey | #F2F2F2, black Add | #F2F2F2 |

**Keyline rule (Jake, 21 Oct):** a keyline only on a white box, in grey #E7E7E7 (the delivery / BNPL / Subscribe boxes) or orange #D24508. A shaded box never has one.

Plus Custom: background, keyline and Add style for Premier; background, keyline and Learn More colour for Deliver+. Text and logos flip black/white with the ground. Contrast is checked against AA.

## Notes
- Copy and layout are left as the DS has them. The inspo's shorter copy and bold price were not applied (brief: colours only).
- KM buttons went black in the DS on 21 Oct 2026 (Jake: match the Figma; production's --color-primary is #000 too). Before that the DS had them orange #D24508.
- Export: the html2canvas fallback draws mask icons (Ask AI sparkles, Deliver+ ticks) as solid squares. This is an existing limitation on every PDP export; the browser view is correct.
