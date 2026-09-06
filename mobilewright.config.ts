import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,
  retries: 1,
  workers: 1,

  platform: 'android',
  bundleId: 'com.wdiodemoapp',

  installApps:
    'C:\\Users\\hi\\Downloads\\Android-NativeDemoApp-0.4.0.apk',

  deviceName: /.*/,
  deviceId: 'R9ZY30D7S6M',

  autoAppLaunch: true,
  viewTree: 'on-failure',

  

  fullyParallel: false,

  reporter: 'html',
});
