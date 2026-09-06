import { expect } from '@mobilewright/test';
import { BasePage } from './base.page';

export class FormsPage extends BasePage {
  readonly screenId = this.screen.getByTestId('Forms-screen');
  readonly textInput = this.screen.getByTestId('text-input');
  readonly inputResult = this.screen.getByTestId('input-text-result');
  readonly switch = this.screen.getByTestId('switch');
  readonly switchText = this.screen.getByTestId('switch-text');
  readonly dropdown = this.screen.getByTestId('Dropdown');
  readonly dropdownPicker = this.screen.getByTestId('Dropdown picker');
  readonly activeButton = this.screen.getByText('Active', { exact: true });
  readonly inactiveButton = this.screen.getByText('Inactive', { exact: true });

  constructor(screen: any) {
    super(screen);
  }

  async assertLoaded() {
    await expect(this.screenId).toBeVisible();
    await expect(this.screen.getByText('Form components', { exact: true })).toBeVisible();
    await expect(this.textInput).toBeVisible();
    await expect(this.switch).toBeVisible();
    await expect(this.activeButton).toBeVisible();
    await expect(this.inactiveButton).toBeVisible();
  }

  async enterText(value: string) {
    await this.textInput.fill(value);
  }

  async toggleSwitch() {
    await this.switch.tap();
  }

  async chooseDropdown(label: string) {
    await this.dropdown.tap();
    await this.screen.getByText(label, { exact: true }).tap();
  }

  async tapActiveButton() {
    await this.activeButton.tap();
  }
}
