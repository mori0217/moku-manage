import { browser, element, by } from 'protractor';

export class MokuManagePage {
  navigateTo() {
    return browser.get('/login');
  }

  getParagraphText() {
    return element(by.tagName('h3')).getText();
  }
}
