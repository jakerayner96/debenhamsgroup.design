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

Each brand has an ordered screen list. Every screen has a **route**:

- **Built-in routes:** Home · Wishlist · Bag · Product page (opened from the wishlist) · Search results · Menu item (for example BRANDS → View All) · Home page tile (scroll N times, tap a point).
- **Learn from reference:** drop the brand team's screenshot of the screen. `learn.js` sends Claude (Opus 5.5, with server-side refusal fallback on) the reference, the live screen and its element list. Claude picks one tap, swipe or text entry at a time until the screens match. Each step is saved as a Maestro command, and the saved route replays on every device and language without the model. Routes prefer element ids (`navHome`, `plpItem-0`, `wishlistButton`…), which stay the same across languages.

The shared app codebase gives the same ids in every brand. On 21 Oct, boohooMAN and The Brand Room both used `navHome/navSearch/navCart/navWishlist/navAccount`, `fakeSearchInputBar`, `plpItem-N`, `productImageCarousel`, `wishlistButton`, `addToBagButton`, `emailTextInput`, `passwordTextInput`, `signInButton` and `settingsButton`.

## Where things are stored on the Mac

- **Brand config:** `~/Library/Application Support/DG App Store Screens/brands/<brand>.json`, seeded from `runner/brands.json`. It holds the screens, stores, bag and wishlist products, and learned routes.
- **Reference screenshots and test previews:** `…/refs/`, `…/previews/`.
- **Builds:** `…/builds/<brand>/<version>-<build>/`.
- **Secrets:** stored in the macOS Keychain under the service "DG App Store Screens". That covers each brand's test account and the Claude API key.
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
- A "Home page tile" route taps a position, so it breaks when the home layout changes. Re-learn it, or adjust the swipes and point.
- Products in the bag and wishlist are found by search. A product code searches the same in every store language. A product name may only match in English stores.
- The Brand Room app has no Country/Region setting, so it's a single store (UK).
