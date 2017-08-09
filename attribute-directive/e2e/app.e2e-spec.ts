import { AttributeDirectivePage } from './app.po';

describe('attribute-directive App', () => {
  let page: AttributeDirectivePage;

  beforeEach(() => {
    page = new AttributeDirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
