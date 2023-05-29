describe('Home page - description', () => {
  it('Verifies title is equal to “You can track you money expenses, view monthly statistics and more.', () => {
    cy.visit('https://my-expenses-three.vercel.app/');
    cy.get('[data-test="information"]')
      .contains('My expenses')
      .parent()
      .next()
      .contains(
        'You can track your money expenses, view monthly statistics and more.'
      )
      .should('be.visible');
    cy.get('[data-test="description"]').should(
      'have.text',
      'You can track your money expenses, view monthly statistics and more.'
    );
  });
});
