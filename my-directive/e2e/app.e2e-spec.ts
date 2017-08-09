import { MyDirectivePage } from './app.po';

describe('my-directive App', () => {
  let page: MyDirectivePage;

  beforeEach(() => {
    page = new MyDirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
