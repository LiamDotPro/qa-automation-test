import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import detox from 'detox';
import config from '../../../.detoxrc.json';

// Changing global tiemeout to avoid errors.
setDefaultTimeout(2 * 60 * 1000);

// global Before
Before({ timeout: 120 * 1000 }, async () => {
  await detox.init(config, {launchApp: true});
  await device.launchApp();
  await device.reloadReactNative();
});

// global After
After({ timeout: 120 * 1000 }, async () => {
  await detox.cleanup();
});