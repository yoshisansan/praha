describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/'); // change URL to match your dev URL
    cy.get('#square0').click();
    cy.get('#square1').click();
    cy.get('#square4').click();
    cy.get('#square2').click();
    cy.get('#square8').click();
  });
});
