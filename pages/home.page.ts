import { expect } from '@mobilewright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  readonly screenId = this.screen.getByTestId('Home-screen');

  constructor(screen: any) {
    super(screen);
  }

  async assertLoaded() {
    await expect(this.screenId).toBeVisible();
    await expect(this.screen.getByText('WEBDRIVER', { exact: true })).toBeVisible();
    await expect(this.screen.getByText('Demo app for the appium-boilerplate', { exact: true })).toBeVisible();
    await expect(this.screen.getByText('Support', { exact: true })).toBeVisible();
  }
}
