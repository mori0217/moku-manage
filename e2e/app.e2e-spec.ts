import { MokuManagePage } from './app.po';

describe('moku-manage App', () => {
  let page: MokuManagePage;

  beforeEach(() => {
    page = new MokuManagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('もくもく管理アプリ');
  });
});
