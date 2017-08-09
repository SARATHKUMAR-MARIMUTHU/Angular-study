import { MutiComponentPage } from './app.po';

describe('muti-component App', () => {
  let page: MutiComponentPage;

  beforeEach(() => {
    page = new MutiComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
