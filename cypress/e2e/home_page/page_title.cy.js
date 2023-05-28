describe('Home page - page title', () => {
  it('Verifies title is equal to “MY EXPENSES“', () => {
    cy.visit('https://my-expenses-three.vercel.app/');
    cy.get('div#__next h1')
      .should('have.text', 'My expenses')
      .should('have.css', 'text-transform', 'uppercase');
  });
});
