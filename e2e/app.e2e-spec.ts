import { MuffnsPage } from './app.po';
import {} from 'jasmine';

describe('muffns App', function() {
  let page: MuffnsPage;

  beforeEach(() => {
    page = new MuffnsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
