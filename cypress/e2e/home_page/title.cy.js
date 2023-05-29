describe('Home page - title', () => {
  it('Verifies title is equal to “MY EXPENSES“', () => {
    cy.visit('https://my-expenses-three.vercel.app/');
    cy.get('[data-test="title"]')
      .should('have.text', 'My expenses')
      .should('have.css', 'text-transform', 'uppercase');
  });
});
