import fs from 'node:fs';
import path from 'node:path';

const manifestPath = path.resolve('android/app/src/main/AndroidManifest.xml');
if (!fs.existsSync(manifestPath)) {
  throw new Error('AndroidManifest.xml not found. Run npx cap add android first.');
}
let manifest = fs.readFileSync(manifestPath, 'utf8');
const metadata = '        <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="ca-app-pub-3940256099942544~3347511713" />';
if (!manifest.includes('com.google.android.gms.ads.APPLICATION_ID')) {
  manifest = manifest.replace(/<application([^>]*)>/, match => match + '\n' + metadata);
  fs.writeFileSync(manifestPath, manifest);
}
console.log('Google AdMob test application ID configured. Replace it before production.');
