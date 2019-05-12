/// <reference types="Cypress" />

describe('Grid Tests', function() {
  it('mock display image get', function() {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/images',
      status: 200,
      response: 'fixture:images.json'
    });

    cy.visit('/');
    cy.get('[data-cy=imageComponent]').should('have.length', 9);
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

  it('icon click should show correct subcontent', function() {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/images',
      status: 200,
      response: 'fixture:images.json'
    });

    cy.visit('/');
    //selecteer de eerste
    cy.get('[data-cy=imageComponent]:first')
      .find('[data-cy=comments]')
      // .find('[data-cy=commentForm]')
      .should('be.visible');
    cy.get('[data-cy=comments]').should('be.visible');
    cy.get('[data-cy=imageComponent]:first')
      .find('[data-cy=specs]')
      .should('not.be.visible');
    //cy.get('[data-cy=specs]').should('not.be.visible');
    cy.get('[data-cy=imageComponent]:first')
      .find('[data-cy=specsIcon]')
      .click();
    //cy.get('[data-cy=specsIcon]').click();
    cy.get('[data-cy=imageComponent]:first')
      .find('[data-cy=comments]')
      .should('not.be.visible');
    //cy.get('[data-cy=comments]').should('not.be.visible');
    cy.get('[data-cy=imageComponent]:first')
      .find('[data-cy=specs]')
      .should('be.visible');
    cy.get('[data-cy=specs]').should('be.visible');
  });
});
