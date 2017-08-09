import { MyComponentPage } from './app.po';

describe('my-component App', () => {
  let page: MyComponentPage;

  beforeEach(() => {
    page = new MyComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
