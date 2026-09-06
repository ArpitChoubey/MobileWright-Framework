
export class BasePage {
  constructor(protected readonly screen: any) {}

  async openTab(name: 'Home' | 'Webview' | 'Login' | 'Forms' | 'Swipe' | 'Drag') {
    await this.screen.getByText(name, { exact: true }).tap();
  }
}
