import { MyDataBindingPage } from './app.po';

describe('my-data-binding App', () => {
  let page: MyDataBindingPage;

  beforeEach(() => {
    page = new MyDataBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
