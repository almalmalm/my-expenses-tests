import { MainPage } from '../pages/MainPage';

describe('Main page cypress tests', () => {
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
  it('Verifies sign in button is visible', () => {
    mainPage.verifySignInButtonIsVisible();
  });
  it('Verifies sign up button is visible', () => {
    mainPage.verifySignUpButtonIsVisible();
  });
  it('Verifies sign in button color is teal', () => {
    mainPage.verifySignInButtonColor('rgb(204, 251, 241)');
  });
  it('Verifies sign up button color is teal', () => {
    mainPage.verifySignUpButtonColor('rgb(204, 251, 241)');
  });
});
