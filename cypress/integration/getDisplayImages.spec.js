it('mock display image get', function () {
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
