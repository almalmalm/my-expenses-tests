class MainPage {
  private readonly title = '[data-test="title"]';
  private readonly information = '[data-test="information"]';
  private readonly description = '[data-test="description"]';
  private readonly buttonSignIn = '[data-test="sign-in"]';
  private readonly buttonSignUp = '[data-test="sign-up"]';

  // Navigates to the main page
  visit() {
    cy.visit('https://my-expenses-three.vercel.app/');
  }
  // Verify text in the title
  verifyTitleIsEqualTo(title: string) {
    cy.get(this.title)
      .should('have.text', title)
      .should('have.css', 'text-transform', 'uppercase');
  }
  // Verify text in the description
  verifyDescriptionIsEqualTo(description: string) {
    cy.get(this.description).should('have.text', description);
  }
  // Verify description located under the title
  verifyDescriptionIsUnderTheTitle() {
    cy.get(this.information)
      .contains('My expenses')
      .parent()
      .next()
      .contains(
        'You can track your money expenses, view monthly statistics and more.'
      )
      .should('be.visible');
  }
  // Verify sign in button is visible
  verifySignInButtonIsVisible() {
    cy.get(this.buttonSignIn).should('be.visible');
  }
  // Verify sign up button is visible
  verifySignUpButtonIsVisible() {
    cy.get(this.buttonSignUp).should('be.visible');
  }
  // Verify sign in button color
  verifySignInButtonColor(color: string) {
    cy.get(this.buttonSignIn)
      .should('have.css', 'background-color')
      .and('eq', color);
  }
  // Verify sign in button color
  verifySignUpButtonColor(color: string) {
    cy.get(this.buttonSignIn)
      .should('have.css', 'background-color')
      .and('eq', color);
  }
}

export { MainPage };
