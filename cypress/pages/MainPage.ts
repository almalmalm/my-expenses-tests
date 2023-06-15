class MainPage {
  private readonly title = '[data-test="title"]';
  private readonly information = '[data-test="information"]';
  private readonly description = '[data-test="description"]';

  visit() {
    cy.visit('https://my-expenses-three.vercel.app/'); // Navigates to the main page
  }
  verifyTitleIsEqualTo(title: string) {
    cy.get(this.title)
      .should('have.text', title)
      .should('have.css', 'text-transform', 'uppercase');
  }
  verifyDescriptionIsEqualTo(description: string) {
    cy.get(this.description).should('have.text', description);
  }
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
}

export { MainPage };
