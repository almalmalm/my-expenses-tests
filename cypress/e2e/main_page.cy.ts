import { MainPage } from '../pages/MainPage';

describe('Home page tests', () => {
  const mainPage = new MainPage();

  beforeEach(() => {
    mainPage.visit();
  });

  it('Verifies title is equal to “MY EXPENSES“', () => {
    mainPage.verifyTitleIsEqualTo('My expenses');
  });

  it('Verifies description is equal to “You can track your money expenses, view monthly statistics and more.', () => {
    mainPage.verifyDescriptionIsEqualTo(
      'You can track your money expenses, view monthly statistics and more.'
    );
  });
  it('Verifies description is located under the title', () => {
    mainPage.verifyDescriptionIsUnderTheTitle();
  });
});
