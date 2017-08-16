import { MyMacroAppPage } from './app.po';

describe('my-macro-app App', () => {
  let page: MyMacroAppPage;

  beforeEach(() => {
    page = new MyMacroAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
