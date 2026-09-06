import { test, expect } from '@mobilewright/test';
import { DragPage, DRAG_IDS, DROP_IDS } from '../pages/drag.page';

test.describe('Drag and Drop', () => {
  test('TC-031 - drag board exposes all nine pieces and nine drop zones', async ({ screen }) => {
    await screen.getByText('Drag', { exact: true }).tap();
    const drag = new DragPage(screen);
    await drag.assertLoaded();
  });

  test('TC-034 - reset restores the drag board', async ({ screen }) => {
    await screen.getByText('Drag', { exact: true }).tap();
    const drag = new DragPage(screen);
    await drag.assertLoaded();
    await drag.reset();
    await expect(screen.getByTestId('drag-l1')).toBeVisible();
    await expect(screen.getByTestId('drop-l1')).toBeVisible();
  });

  test.skip('TC-032/TC-033 - complete the nine-piece drag puzzle', async ({ screen }) => {
    // The APK uses a real touch-drag interaction. The current documented Mobilewright
    // locator API exposes tap/longPress/fill/swipe but not locator.dragTo().
    // Keep this test as the executable placeholder until a supported drag gesture API
    // is selected for the project. Matching pairs are identical IDs:
    // drag-l1 -> drop-l1 ... drag-r3 -> drop-r3.
    for (let i = 0; i < DRAG_IDS.length; i += 1) {
      await expect(screen.getByTestId(DRAG_IDS[i])).toBeVisible();
      await expect(screen.getByTestId(DROP_IDS[i])).toBeVisible();
    }
  });
});
