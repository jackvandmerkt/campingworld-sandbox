import { getText } from '../../../support/app.po';

describe('campground-booking', () => {
  before(() => {
    cy.login("test.user@aptitive.com", "@ptitive123")
    cy.visit('/create-listing/policies')
  });
  it('should render components', () => {
    getText().contains('Need Support?');
    getText().contains('Pro Tips');
    getText().contains('Good Sam Rating');
    cy.get("button[data-validate='Submit']");
  })

  it('Should clear form', () => {
    cy.get("button[type='reset']").click({ force: true });
  });

  it('Should populate and submit form', () => {
    cy.get('#isLessThan30Days').click({ force: true });
    cy.get('#openAllYear').click({ force: true });
    cy.get('#limitedFacilities').click({ force: true });
    cy.get('#summer').click({ force: true });
    cy.get('.e-input-group-icon').click({ force: true });
    cy.get('#ageRestrictions').click({ force: true });
    cy.get('#familyCamping').click({ force: true });
    cy.get('#allowsTent').click({ force: true });
    cy.get('#classA').click({ force: true });
    cy.get('#rvAgeRestrictions').type('Hello, World')
    cy.get('#petsAllowed').click({ force: true });
    cy.get('#petsRestrictions').click({ force: true });
    cy.get('#size').click({ force: true });
    cy.get('#quantity').click({ force: true });
    cy.get('#breed').click({ force: true });
    cy.get('#additionalChargeForPets').click({ force: true });
    cy.get("button[type='submit']").click({ force: true });
  });
});