import { expect } from '@mobilewright/test';
import { BasePage } from './base.page';

export class SwipePage extends BasePage {
  readonly screenId = this.screen.getByTestId('Swipe-screen');
  readonly carousel = this.screen.getByTestId('Carousel');
  readonly logo = this.screen.getByTestId('WebdriverIO logo');

  constructor(screen: any) {
    super(screen);
  }

  async assertLoaded() {
    await expect(this.screenId).toBeVisible();
    await expect(this.screen.getByText('Swipe horizontal', { exact: true })).toBeVisible();
    await expect(this.carousel).toBeVisible();
  }

  async swipeUp() {
    await this.screen.swipe('up');
  }

  async swipeDown() {
    await this.screen.swipe('down');
  }

  async swipeLeft() {
    await this.carousel.swipe('left');
  }

  async swipeRight() {
    await this.carousel.swipe('right');
  }
}
