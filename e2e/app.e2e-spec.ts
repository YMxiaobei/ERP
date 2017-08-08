import { ERPPage } from './app.po';

describe('erp App', () => {
  let page: ERPPage;

  beforeEach(() => {
    page = new ERPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
