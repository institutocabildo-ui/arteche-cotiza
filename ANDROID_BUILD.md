# ARTECHE Android build

## Current target
Generate a debug APK for installation/testing on Android devices. This is not a signed production release and is not ready for Google Play.

## Build in GitHub Actions
1. Open the repository's Actions tab.
2. Select **Build ARTECHE Android APK**.
3. Run the workflow on branch `app/unified-pwa-prototype`.
4. When the job succeeds, download the `arteche-debug-apk` artifact.
5. Extract `app-debug.apk` and install it on an Android test device. Android may ask to allow installation from that source.

The workflow installs Capacitor, creates the Android project, copies the `app/` web shell into it, and builds a debug APK.

## Local build (requires Node.js 22, Java 21 and Android Studio/SDK)
```bash
npm install
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

Output:
`android/app/build/outputs/apk/debug/app-debug.apk`

## Current product limitations
- The app shell currently loads Cotiza and Bonos as separate hosted web modules inside embedded frames.
- Google authentication is not configured in the unified shell.
- Push notifications are not implemented; they require Firebase Cloud Messaging, a Firebase project, device registration and a trusted server-side sender.
- This debug APK is unsigned for production. Google Play release requires a signed Android App Bundle (AAB), store listing, privacy/data-safety disclosures, testing and review.
- Financial calculations and market data still rely on the existing modules and their third-party providers.

## Security
Never commit Firebase service-account keys, signing keystores, passwords, or private credentials. Production signing secrets must be stored as protected CI secrets.