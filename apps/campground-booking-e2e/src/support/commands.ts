// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(): void;
  }
}

Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: `http://localhost:3000/api/v1/auth/login`,
    body: {
      email: 'test.user@aptitive.com',
      password: '@ptitive123'
    }
  })
})
