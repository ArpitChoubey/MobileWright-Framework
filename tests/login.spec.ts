import { test, expect } from '@mobilewright/test';
import { LoginPage } from '../pages/login.page';
import loginData from '../TestData/login.data.json';

async function openLogin(screen: any) {
  await screen.getByText('Login', { exact: true }).tap();
  const page = new LoginPage(screen);
  await page.assertLoginForm();
  return page;
}

test.describe('Login / Sign up', () => {
  test('TC-008 - login form controls are visible', async ({ screen }) => {
    await openLogin(screen);
  });

  test('TC-009 - valid login shows success alert', async ({ screen }) => {
    const login = await openLogin(screen);
    await login.login(loginData.validLogin.email, loginData.validLogin.password);
    await expect(screen.getByText('Success', { exact: true })).toBeVisible();
    await expect(screen.getByText('You are logged in!', { exact: true })).toBeVisible();
    await screen.getByText('OK', { exact: true }).tap();
  });

  for (const email of loginData.invalidEmails) {
    test(`TC-010 - invalid email is rejected: ${email}`, async ({ screen }) => {
      const login = await openLogin(screen);
      await login.login(email, loginData.validLogin.password);
      await expect(screen.getByText('Please enter a valid email address', { exact: true })).toBeVisible();
    });
  }

  test('TC-011 - short password is rejected', async ({ screen }) => {
    const login = await openLogin(screen);
    await login.login(loginData.validLogin.email, loginData.shortPassword);
    await expect(screen.getByText('Please enter at least 8 characters', { exact: true })).toBeVisible();
  });

  test('TC-012 - invalid email and short password show both errors', async ({ screen }) => {
    const login = await openLogin(screen);
    await login.login('invalid', loginData.shortPassword);
    await expect(screen.getByText('Please enter a valid email address', { exact: true })).toBeVisible();
    await expect(screen.getByText('Please enter at least 8 characters', { exact: true })).toBeVisible();
  });

  test('TC-013 - sign-up mode shows confirm password', async ({ screen }) => {
    const login = await openLogin(screen);
    await login.selectSignUp();
    await expect(login.repeatPassword).toBeVisible();
    await expect(login.signUpButton).toBeVisible();
  });

  test('TC-014 - mismatched sign-up passwords are rejected', async ({ screen }) => {
    const login = await openLogin(screen);
    await login.signUp(
      loginData.mismatchSignUp.email,
      loginData.mismatchSignUp.password,
      loginData.mismatchSignUp.repeatPassword,
    );
    await expect(screen.getByText('Please enter the same password', { exact: true })).toBeVisible();
  });

  test('TC-015 - valid sign-up shows Signed Up alert', async ({ screen }) => {
    const login = await openLogin(screen);
    await login.signUp(
      loginData.validSignUp.email,
      loginData.validSignUp.password,
      loginData.validSignUp.repeatPassword,
    );
    await expect(screen.getByText('Signed Up!', { exact: true })).toBeVisible();
    await expect(screen.getByText('You successfully signed up!', { exact: true })).toBeVisible();
    await screen.getByText('OK', { exact: true }).tap();
  });
});
