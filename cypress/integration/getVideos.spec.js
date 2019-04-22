it('mock videos get', function () {
  cy.server();
  cy.route({
    method: 'GET',
    url: '/api/videos',
    status: 200,
    response: 'fixture:videos.json'
  });

  cy.visit('/');
  cy.get('[data-cy=videoComponent]').should('have.length', 3);
});
