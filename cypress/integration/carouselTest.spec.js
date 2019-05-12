/// <reference types="Cypress" />
describe('Carousel tests', function() {
  it('mock videos get', function() {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/videos',
      status: 200,
      response: 'fixture:videos.json'
    });

    cy.visit('/carousel/videos');
    cy.get('[data-cy=videoComponent]').should('have.length', 1);
  });

  it('button next should show next video', function() {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/videos',
      status: 200,
      response: 'fixture:videos.json'
    });

    cy.visit('/carousel/videos');
    cy.get('[data-cy=videoComponent]')
      .should('have.attr', '[video]', 'currentVid')
      .should('have.id', '1');
    cy.get('[data-cy=buttonNext]').click();
    cy.get('[data-cy=videoComponent]')
      .should('have.attr.', '[video]', 'currentVid')
      .should('have.id', '2');
  });

  it('on error should show error message', function() {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/videos',
      status: 500,
      response: 'ERROR'
    });
    cy.visit('/carousel/videos');
    cy.get('[data-cy=appError]').should('be.visible');
  });
});
