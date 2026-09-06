import { test, expect } from '@mobilewright/test';
import { SwipePage } from '../pages/swipe.page';

test.describe('Swipe', () => {
  test('TC-026 - swipe screen loads', async ({ screen }) => {
    await screen.getByText('Swipe', { exact: true }).tap();
    const swipe = new SwipePage(screen);
    await swipe.assertLoaded();
  });

  test('TC-027 - carousel responds to left swipe', async ({ screen }) => {
    await screen.getByText('Swipe', { exact: true }).tap();
    const swipe = new SwipePage(screen);
    await swipe.assertLoaded();
    await swipe.swipeLeft();
    await expect(swipe.carousel).toBeVisible();
  });

  test('TC-028 - carousel responds to right swipe', async ({ screen }) => {
    await screen.getByText('Swipe', { exact: true }).tap();
    const swipe = new SwipePage(screen);
    await swipe.assertLoaded();
    await swipe.swipeRight();
    await expect(swipe.carousel).toBeVisible();
  });

  test('TC-029 - vertical swipe changes the page viewport', async ({ screen }) => {
    await screen.getByText('Swipe', { exact: true }).tap();
    const swipe = new SwipePage(screen);
    await swipe.assertLoaded();
    await swipe.swipeUp();
    await expect(swipe.logo).toBeVisible();
  });
});
