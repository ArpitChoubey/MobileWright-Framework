import { expect } from '@mobilewright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  readonly screenId = this.screen.getByTestId('Login-screen');
  readonly loginTab = this.screen.getByTestId('login-container');
  readonly signUpTab = this.screen.getByTestId('sign-up-container');
  readonly email = this.screen.getByTestId('input-email');
  readonly password = this.screen.getByTestId('input-password');
  readonly repeatPassword = this.screen.getByTestId('input-repeat-password');
  readonly loginButton = this.screen.getByText('LOGIN', { exact: true });
  readonly signUpButton = this.screen.getByText('SIGN UP', { exact: true });
  readonly biometricButton = this.screen.getByTestId('biometric');

  constructor(screen: any) {
    super(screen);
  }

  async assertLoginForm() {
    await expect(this.screenId).toBeVisible();
    await expect(this.screen.getByText('Login / Sign up Form', { exact: true })).toBeVisible();
    await expect(this.email).toBeVisible();
    await expect(this.password).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async selectSignUp() {
    await this.signUpTab.tap();
    await expect(this.repeatPassword).toBeVisible();
    await expect(this.signUpButton).toBeVisible();
  }

  async selectLogin() {
    await this.loginTab.tap();
    await expect(this.loginButton).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.tap();
  }

  async signUp(email: string, password: string, repeatPassword: string) {
    await this.selectSignUp();
    await this.email.fill(email);
    await this.password.fill(password);
    await this.repeatPassword.fill(repeatPassword);
    await this.signUpButton.tap();
  }
}
