/// <reference types="Cypress" />
describe('Contact tests', function() {
  it('button should be disabled without proper values', function() {
    cy.visit('/contact/mail');
    cy.get('[data-cy=sendButton]').should('be.disabled');
    cy.get('[data-cy=topic]').click();
    cy.get('mat-option')
      .contains('Question')
      .then(option => {
        cy.wrap(option).contains('Question');
        option[0].click();
        cy.get('[data-cy="topic"]').contains('Question');
      });
    cy.get('[data-cy=message]').type('this is a test mail');
    cy.get('[data-cy=sendButton]').should('not.be.disabled');
  });

  it('not logged in should throw error', function() {
    cy.visit('/contact/mail');
    cy.get('[data-cy=topic]').click();
    cy.get('mat-option')
      .contains('Question')
      .then(option => {
        cy.wrap(option).contains('Question');
        option[0].click();
        cy.get('[data-cy="topic"]').contains('Question');
      });
    cy.get('[data-cy=message]').type('this is a test mail');
    cy.get('[data-cy=sendButton]').click();
    //get snackbox error
  });
});
