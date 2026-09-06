import { test } from '@mobilewright/test';
import { WebviewPage } from '../pages/webview.page';

test.describe('WebView', () => {
  test('TC-030 - WebdriverIO WebView opens', async ({ screen }) => {
    await screen.getByText('Webview', { exact: true }).tap();
    const webview = new WebviewPage(screen);
    await webview.assertWebViewLoaded();
  });
});
