import { Capacitor } from '@capacitor/core';
import {
  AdMob,
  AdmobConsentStatus,
  BannerAdPosition,
  BannerAdSize
} from '@capacitor-community/admob';

// Google demo IDs only. Replace with ARTECHE's own AdMob IDs before production.
const ANDROID_TEST_APP_ID = 'ca-app-pub-3940256099942544~3347511713';
const ANDROID_TEST_BANNER_ID = 'ca-app-pub-3940256099942544/6300978111';

let started = false;

window.startArtecheAdMob = async function startArtecheAdMob() {
  if (started || !Capacitor.isNativePlatform() || Capacitor.getPlatform() !== 'android') return;
  started = true;
  try {
    let consent = await AdMob.requestConsentInfo();
    if (consent.isConsentFormAvailable && consent.status === AdmobConsentStatus.REQUIRED) {
      consent = await AdMob.showConsentForm();
    }
    if (!consent.canRequestAds) return;
    await AdMob.initialize();
    await AdMob.showBanner({
      adId: ANDROID_TEST_BANNER_ID,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: true
    });
  } catch (error) {
    started = false;
    console.warn('ARTECHE AdMob banner unavailable; app continues normally.', error);
  }
};

window.ARTECHE_ADMOB_TEST_APP_ID = ANDROID_TEST_APP_ID;
