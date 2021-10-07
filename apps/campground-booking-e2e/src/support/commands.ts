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
    login(email: string, password: string): void;
  }
}

// Cypress.Commands.add('login', () => {
//   cy.intercept('POST', '**/api/v1/auth/login?*', {
//     statusCode: 200,
//     body: {
//       id: 145,
//       email: "test.user@aptitive.com",
//       firstName:"Test",
//       lastName:"User",
//       repCode:999
//     },
//   }).as('loginAttempt')
// })

Cypress.Commands.add("login", (email, password) => {
  cy.visit('/login')
  cy.get('input[name="email"]').type(email)
  cy.get('input[name="password"]').type(password)
  cy.get("button[data-login=Submit]").click();
  cy.intercept('POST','/api/v1/auth/login').as('loginAttempt')
  cy.wait('@loginAttempt').its('response.statusCode').should('equal', 200)
});