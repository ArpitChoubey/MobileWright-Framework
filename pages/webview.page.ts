import { expect } from '@mobilewright/test';
import { BasePage } from './base.page';

export class WebviewPage extends BasePage {
  constructor(screen: any) {
    super(screen);
  }

  async assertWebViewLoaded() {
    const webView = this.screen.getByWebView();
    await expect(webView).toBeVisible();
  }
}
