import { test } from '@mobilewright/test';
import { HomePage } from '../pages/home.page';

test.describe('Home @smoke', () => {
  test('TC-001/TC-002 - home screen loads with branding', async ({ screen }) => {
    const home = new HomePage(screen);
    await home.assertLoaded();
  });
});
