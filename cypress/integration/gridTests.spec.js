/// <reference types="Cypress" />

describe('mock images gets loaded', function() {
  it('mock display image get', function() {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/images',
      status: 200,
      response: 'fixture:images.json'
    });

    cy.visit('/');
    cy.get('[data-cy=imageComponent]').should('have.length', 6);
  });

  it('on error should show error message', function() {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/images',
      status: 500,
      response: 'ERROR'
    });
    cy.visit('/');
    cy.get('[data-cy=appError]').should('be.visible');
  });
});
