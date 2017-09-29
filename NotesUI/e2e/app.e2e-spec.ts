import { GoLearnPage } from './app.po';

describe('go-learn App', () => {
  let page: GoLearnPage;

  beforeEach(() => {
    page = new GoLearnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
