describe('Home page - title', () => {
  it('Verifies title is equal to “MY EXPENSES“', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-test="title"]')
      .should('have.text', 'My expenses')
      .should('have.css', 'text-transform', 'uppercase');
  });
});
