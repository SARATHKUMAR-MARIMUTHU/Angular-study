import { MultipleComponentPage } from './app.po';

describe('multiple-component App', () => {
  let page: MultipleComponentPage;

  beforeEach(() => {
    page = new MultipleComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
