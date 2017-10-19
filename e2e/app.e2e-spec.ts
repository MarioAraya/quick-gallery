import { ElShoroClSiteAngularPage } from './app.po';

describe('el-shoro-cl-site-angular App', () => {
  let page: ElShoroClSiteAngularPage;

  beforeEach(() => {
    page = new ElShoroClSiteAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
