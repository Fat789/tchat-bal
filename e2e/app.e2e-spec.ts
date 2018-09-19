import { TchatBalPage } from './app.po';

describe('tchat-bal App', function() {
  let page: TchatBalPage;

  beforeEach(() => {
    page = new TchatBalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
