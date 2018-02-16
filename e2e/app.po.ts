import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('app-root e2e-items h2')).getText();
  }

  getUnorderedListCount() {
    return element(by.css('app-root e2e-items ul'))
      .all(by.css('li')).count();
  }

  getNewItemInput() {
    return element(by.css('input'));
  }

  getAddItemButton() {
    return element(by.css('button'));
  }

}
