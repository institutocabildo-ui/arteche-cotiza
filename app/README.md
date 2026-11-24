# ARTECHE — unified app prototype

This directory contains the first unified mobile shell for ARTECHE Cotiza + ARTECHE Bonos.

## Current state
- Unified responsive shell with bottom navigation.
- Cotiza and Bonos are connected as separate existing web modules in embedded frames.
- PWA manifest and service worker cache the app shell.
- Install prompt is shown where the browser supports it.
- Profile screen documents Google sign-in, sync and push as pending integrations.

## Important limitations
- This is a navigation/PWA prototype, not a finished native Android app.
- Google sign-in is not active in this shell.
- Push notifications are not active. Real background notifications require Firebase Cloud Messaging, authorized device tokens, and a trusted server/Cloud Functions.
- Embedded modules still have their own navigation and are not yet ported into a shared native component system.
- No financial transaction, custody or brokerage features are provided.

## Next engineering stages
1. Extract Cotiza and Bonos into shared modules and replace embedded frames.
2. Create one Firebase project; configure Google provider, authorized domains, Firestore rules and account data migration.
3. Implement server-side alert evaluation and FCM delivery with opt-in notification preferences.
4. Add Capacitor Android project, app icon/splash, deep links, secure storage and Android permission handling.
5. Add automated tests for calculations, data parsing, authentication and notification flows.
6. Generate a signed Android App Bundle (AAB), test on physical devices, and prepare Play Console disclosures and store listing.

## Deployment
The prototype is hosted from the existing GitHub Pages project at:
https://institutocabildo-ui.github.io/arteche-cotiza/app/

The current pages for Cotiza and Bonos remain unchanged.