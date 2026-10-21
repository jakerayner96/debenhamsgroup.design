#!/bin/bash
# DG App Store Screenshot Exporter — install / update the local runner.
#   curl -fsSL https://jakerayner96.github.io/debenhamsgroup.design/tools/app-store-screens/runner/install.sh | bash
set -e
BASE="https://jakerayner96.github.io/debenhamsgroup.design/tools/app-store-screens/runner"
DIR="$HOME/.dg-app-store-screens"
JBR="/Applications/Android Studio.app/Contents/jbr/Contents/Home"
ok(){ printf "  ✅ %s\n" "$1"; }; no(){ printf "  ❌ %s\n     → %s\n" "$1" "$2"; MISSING=1; }

echo "DG App Store Screenshot Exporter — runner install"
echo; echo "Big installs (do these yourself first):"
xcrun simctl help >/dev/null 2>&1 && ok "Xcode + iOS Simulator" || no "Xcode" "Mac App Store > Xcode, open it once and add the iOS platform"
[ -d "/Applications/Android Studio.app" ] && ok "Android Studio" || no "Android Studio" "developer.android.com/studio — run the setup wizard, create one phone with a Google Play image"
command -v node >/dev/null && ok "Node.js $(node -v)" || no "Node.js" "nodejs.org — install the LTS version"
[ -n "$MISSING" ] && { echo; echo "Install the ❌ items, then run this again."; exit 1; }

echo; echo "Downloading the runner to $DIR…"
mkdir -p "$DIR/flows"
for f in $(curl -fsSL "$BASE/files.txt"); do curl -fsSL "$BASE/$f" -o "$DIR/$f"; done
ok "Runner files"
(cd "$DIR" && npm install --silent --no-fund --no-audit >/dev/null 2>&1) && ok "Claude SDK" || no "npm install" "check your internet connection"

export JAVA_HOME="$JBR"; export PATH="$JBR/bin:$HOME/.maestro/bin:$PATH"
[ -x "$HOME/.maestro/bin/maestro" ] && ok "Maestro" || { curl -fsSL "https://get.maestro.mobile.dev" | bash >/dev/null 2>&1 && ok "Maestro installed"; }
BT="$HOME/.local/share/bundletool/bundletool.jar"
[ -f "$BT" ] && ok "bundletool" || { mkdir -p "$(dirname "$BT")"; curl -fsSL -o "$BT" https://github.com/google/bundletool/releases/download/1.17.2/bundletool-all-1.17.2.jar && ok "bundletool installed"; }
[ -f "$HOME/.expo/state.json" ] && grep -q sessionSecret "$HOME/.expo/state.json" && ok "Expo login" || echo "  ⚠️  Not signed in to Expo — run: npx eas-cli login   (needs access to debenhams-tech)"

echo; echo "Starting the runner (and at every login)…"
PL="$HOME/Library/LaunchAgents/com.debenhamsgroup.appstorescreens.plist"
mkdir -p "$HOME/Library/LaunchAgents" "$HOME/Library/Logs"
cat > "$PL" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>Label</key><string>com.debenhamsgroup.appstorescreens</string>
  <key>ProgramArguments</key><array><string>$(command -v node)</string><string>$DIR/server.js</string></array>
  <key>WorkingDirectory</key><string>$DIR</string>
  <key>EnvironmentVariables</key><dict><key>PATH</key><string>$PATH:/usr/bin:/bin:/usr/sbin:/sbin</string><key>JAVA_HOME</key><string>$JBR</string></dict>
  <key>RunAtLoad</key><true/><key>KeepAlive</key><true/>
  <key>StandardOutPath</key><string>$HOME/Library/Logs/dg-app-store-screens.log</string>
  <key>StandardErrorPath</key><string>$HOME/Library/Logs/dg-app-store-screens.log</string>
</dict></plist>
PLIST
launchctl unload "$PL" 2>/dev/null || true; launchctl load "$PL"
sleep 2; curl -fs http://localhost:4567/api/hello >/dev/null && ok "Runner is running on this Mac" || no "Runner did not start" "see ~/Library/Logs/dg-app-store-screens.log"
echo; echo "Open: https://jakerayner96.github.io/debenhamsgroup.design/tools/app-store-screens/"
open "https://jakerayner96.github.io/debenhamsgroup.design/tools/app-store-screens/" 2>/dev/null || true
