import { expect } from '@mobilewright/test';
import { BasePage } from './base.page';

export const DRAG_IDS = [
  'drag-l1', 'drag-l2', 'drag-l3',
  'drag-c1', 'drag-c2', 'drag-c3',
  'drag-r1', 'drag-r2', 'drag-r3',
] as const;

export const DROP_IDS = [
  'drop-l1', 'drop-l2', 'drop-l3',
  'drop-c1', 'drop-c2', 'drop-c3',
  'drop-r1', 'drop-r2', 'drop-r3',
] as const;

export class DragPage extends BasePage {
  readonly screenId = this.screen.getByTestId('Drag-drop-screen');
  readonly retry = this.screen.getByTestId('renew');

  constructor(screen: any) {
    super(screen);
  }

  async assertLoaded() {
    await expect(this.screenId).toBeVisible();
    await expect(this.screen.getByText('Drag and Drop', { exact: true })).toBeVisible();
    for (const id of DRAG_IDS) {
      await expect(this.screen.getByTestId(id)).toBeVisible();
    }
    for (const id of DROP_IDS) {
      await expect(this.screen.getByTestId(id)).toBeVisible();
    }
  }

  async reset() {
    await this.retry.tap();
  }
}
