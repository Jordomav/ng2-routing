import { Ng2TestPage } from './app.po';

describe('ng2-test App', function() {
  let page: Ng2TestPage;

  beforeEach(() => {
    page = new Ng2TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
