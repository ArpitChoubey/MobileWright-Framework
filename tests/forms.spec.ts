import { test, expect } from '@mobilewright/test';
import { FormsPage } from '../pages/forms.page';
import formsData from '../TestData/forms.data.json';

async function openForms(screen: any) {
  await screen.getByText('Forms', { exact: true }).tap();
  const page = new FormsPage(screen);
  await page.assertLoaded();
  return page;
}

test.describe('Form components', () => {
  test('TC-016 - all form components are visible', async ({ screen }) => {
    await openForms(screen);
  });

  test('TC-017 - input value is echoed below the field', async ({ screen }) => {
    const forms = await openForms(screen);
    await forms.enterText(formsData.textValues[0]);
    await expect(forms.inputResult).toHaveText(formsData.textValues[0]);
  });

  test('TC-018 - input is capped at 30 characters', async ({ screen }) => {
    const forms = await openForms(screen);
    const value = formsData.textValues[2];
    await forms.enterText(value);
    await expect(forms.inputResult).toHaveText(value.slice(0, 30));
  });

  test('TC-019/TC-020 - switch toggles and label changes', async ({ screen }) => {
    const forms = await openForms(screen);
    await expect(forms.switch).not.toBeChecked();
    await forms.toggleSwitch();
    await expect(forms.switch).toBeChecked();
    await expect(forms.switchText).toHaveText('Click to turn the switch OFF');
    await forms.toggleSwitch();
    await expect(forms.switch).not.toBeChecked();
    await expect(forms.switchText).toHaveText('Click to turn the switch ON');
  });

  for (const option of formsData.dropdownOptions) {
    test(`TC-021/22/23 - select dropdown: ${option.label}`, async ({ screen }) => {
      const forms = await openForms(screen);
      await forms.chooseDropdown(option.label);
      await expect(screen.getByText(option.label, { exact: true })).toBeVisible();
    });
  }

  test('TC-024 - active button opens expected alert', async ({ screen }) => {
    const forms = await openForms(screen);
    await forms.tapActiveButton();
    await expect(screen.getByText('This button is', { exact: true })).toBeVisible();
    await expect(screen.getByText('This button is active', { exact: true })).toBeVisible();
    await screen.getByText('OK', { exact: true }).tap();
  });

  test('TC-025 - inactive button is disabled', async ({ screen }) => {
    const forms = await openForms(screen);
    await expect(forms.inactiveButton).toBeDisabled();
  });
});
