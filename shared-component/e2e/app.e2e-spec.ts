import { SharedComponentPage } from './app.po';

describe('shared-component App', () => {
  let page: SharedComponentPage;

  beforeEach(() => {
    page = new SharedComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
