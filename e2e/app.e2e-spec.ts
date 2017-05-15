import { MyLearningPage } from './app.po';

describe('my-learning App', () => {
  let page: MyLearningPage;

  beforeEach(() => {
    page = new MyLearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
