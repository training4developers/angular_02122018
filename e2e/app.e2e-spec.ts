import { browser, by, element } from 'protractor';
import { saveScreenshot } from './utils';

import { AppPage } from './app.po';

describe('demo-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('will display item list header', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Item List');
  });

  it('will display a list of three items', () => {
    page.navigateTo();
    expect(page.getUnorderedListCount()).toEqual(3);
    saveScreenshot('items.png');
  });

  it('will add a new item', () => {
    page.navigateTo();

    page.getNewItemInput().sendKeys('item 4');
    page.getAddItemButton().click();

    expect(page.getUnorderedListCount()).toEqual(4);
    saveScreenshot('add-new-item.png');
  });

});
