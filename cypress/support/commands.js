// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
  const email = 'moutpessemier@hotmail.be';

  cy.request({
    method: 'POST',
    url: '/api/account',
    body: { email, password: 'P@ssword1' }
  }).then(res => localStorage.setItem('currentUser', res.body.token));
});

Cypress.Commands.add(
  'register',
  (email, password, firstName, lastName, phoneNumber, country = null) => {
    cy.request({
      method: 'POST',
      url: '/api/account/register',
      body: {
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
        country,
        passwordConfirmation: password
      }
    }).then(res => localStorage.setItem('currentUser', res.body.token));
  }
);
