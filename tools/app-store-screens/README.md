# App Store Screenshot Exporter

**Page:** `tools/app-store-screens/` (site: Planning and Tools → App Store Screenshot Exporter). **Runner:** `tools/app-store-screens/runner/`.

This tool is for the tech team. When a release is ready, the dev posts the Expo build links in Slack. You paste the message into the page and pick the screens. The tool then exports every App Store and Google Play size, in every store language, into folders ready to drag into Figma.

## How it works

The page is a static DS page on GitHub Pages. It can't drive simulators on its own, so it talks to a small **runner** on your Mac (`http://localhost:4567`, Node). The runner:

- **Resolves Expo links** through the Expo API using the Mac's `eas` login. That gives the platform, version, build number and app id, which identify the brand. It then downloads the build.
- **Accepts dropped files** too: a `.tar.gz` iOS simulator build, an `.aab` or an `.apk`. It reads the bundle id and version from `Info.plist` or the manifest.
- **Creates the store devices if they're missing:**
  - iPhone 17 Pro Max: 6.9in, 1320×2868.
  - iPad Pro 13-inch (M5): 2064×2752.
  - Android Phone: 1080×1920. Play's limit is 2:1, so the 20:9 default emulators don't qualify.
  - Android Tablet 7in (1200×1920) and Tablet 10in (1600×2560).
- **Runs one device at a time** and shuts the others down. Three at once crashed a 16 GB Mac on 20 Oct.
- **For each device and store:**
  1. Resets the app to a fresh guest session.
  2. Launches it in the store's language (`-AppleLanguages` on iOS, `cmd locale set-app-locales` on Android).
  3. Switches the in-app Country/Region.
  4. Puts the brand's products in the bag, takes the guest screens, signs in with the brand's test account, saves the wishlist products and takes the signed-in screens.
- **Cleans up the shots:**
  - Status bar is 9:41 with full signal and battery: `simctl status_bar` on iOS, SystemUI demo mode on Android.
  - iPad is switched to Full-Screen Apps, which removes the iPadOS 26 resize handle.
  - The Android notification permission is pre-granted, so its dialog never covers the first screen.
  - Emulators boot with public DNS (`-dns-server 8.8.8.8,1.1.1.1`), because a Mac VPN resolver can break DNS inside the emulator.

## Screens

Each brand has an ordered list of at least 5 screens. You can add more, and they export in that order. There are two ways to fill the list, and both feed the same list:

- **Pick from the app.** Tick pages from the page list. Each page takes its own input:

  | Page | What it needs |
  |---|---|
  | Home | nothing |
  | Menu | nothing |
  | Category page (PLP) | the category URL from the website |
  | Search results | a search term |
  | Product page (PDP) | a SKU (or a product name), plus an optional colour and whether to show the images or the price and sizes |
  | Bag | the products to add: `SKU size`, or `name \| size` |
  | Wishlist | SKUs or product names; signs in first |
  | Sign in | nothing |
  | My account | nothing; signs in first |
  | Content page | the page URL, for example Premier Delivery |

- **Upload reference screens.** The brand team's screenshots are read on the Mac with macOS's offline text recognition (`ocr.swift`, Vision framework). That needs no API key and no network. Each screenshot is matched to its page and slot from its title and words, in en, fr, de, nl and sv. You then add any SKU or URL the page needs.

PLP, PDP and content pages open **directly** in the app through its links. iOS uses the app's URL scheme (for example `boohooman://categories/mens-jeans`). Android uses an https link sent to the app's package (`https://www.boohooman.com/product/cmm33848`). The scheme and host are read from each build. A SKU opens the exact product in every country. A product name is searched in the app, which only works in English stores. Before each screen the runner steps back to the tab bar, because pages opened by a link sit above it.

**Gentle mode:** the runner works one device at a time. Every Maestro step waits while the 1-minute load average is above 1.5× the CPU count, and runs at low priority (`nice`). The LaunchAgent itself is `Nice 10`, `ProcessType Background`. On 21 Oct, ESET antivirus scanning the simulator's files made the Mac seize up, with a load of 868. Asking IT to exclude `~/Library/Developer/CoreSimulator`, `~/.android` and the tool's data folder helps.

## Where things are stored on the Mac

- **Brand config:** `~/Library/Application Support/DG App Store Screens/brands/<brand>.json` (schema 2), seeded from `runner/brands.json`. It holds the screens and their inputs. The countries per brand always follow `markets` in the seed (Jake's list, 21 Oct).
- **Reference screenshots and test previews:** `…/refs/`, `…/previews/`.
- **Builds:** `…/builds/<brand>/<version>-<build>/`.
- **Secrets:** each brand's test account, stored in the macOS Keychain under the service "DG App Store Screens".
- **Output:**

```
~/Desktop/App Store Screens/<Brand>/<version> (<build>)/<App Store|Google Play>/<Device> <WxH>/<STORE> <locale>/NN <Screen>.png
                                                                                              + manifest.json
```

## Install / update

```
curl -fsSL https://jakerayner96.github.io/debenhamsgroup.design/tools/app-store-screens/runner/install.sh | bash
```

You need Xcode, Android Studio and Node.js installed first, and to be signed in with `npx eas-cli login` to an account in `debenhams-tech`. The installer copies the runner to `~/.dg-app-store-screens/`, installs Maestro, bundletool and the Claude SDK, and adds a LaunchAgent (`com.debenhamsgroup.appstorescreens`) so the runner starts at login. Log: `~/Library/Logs/dg-app-store-screens.log`.

A new runner file must be added to `runner/files.txt`, or the installer won't download it.

## Known limits

- iOS needs the **simulator** build (`preview-ios-simulator` profile). App Store and TestFlight `.ipa` builds can't run in a simulator.
- On Android, the AAB is re-signed with the local debug key so the emulator can install it. That's fine for screenshots. It would only matter if the app blocks re-signed builds.
- Home page content is live and changes during the day.
- Product names in the bag, wishlist or PDP are searched in the app, which only works reliably in English stores. Use SKUs for other countries.
- The Brand Room app has no Country/Region setting, so it's a single store (UK).
