import { getText } from '../../../support/app.po';

describe('campground-booking', () => {
  before(() => {
    cy.login("test.user@aptitive.com", "@ptitive123")
    cy.visit('/create-listing/water-recreation')
  });
  it('should render components', () => {
    getText().contains('Need Support?');
    getText().contains('Pro Tips');
    getText().contains('Good Sam Rating');
    cy.get("button[data-validate='Submit']");
  });

  it('Should populate form, attempt submit, but not pass validations', () => {
    cy.get('input[name="option1"]').click({ force: true });
    cy.get('input[name="option5"]').click({ force: true });
    cy.get('input[name="bodyOfWater1"]').click({ force: true });
    cy.get('input[name="bodyOfWater2"]').click({ force: true });
    cy.get('input[name="bodyOfWater1"]').click({ force: true });
    cy.get('input[name="bodyOfWater2"]').click({ force: true });
    cy.get('input[name="boatDetails1"]').click({ force: true });
    cy.get('input[name="boatDetails2"]').click({ force: true });
    cy.get('input[name="nearby2"]').click({ force: true });
    cy.get('input[name="nearby6"]').click({ force: true });
    cy.get("button[type='submit']").click({ force: true });
  });

  it('Should clear form', () => {
    cy.get("button[type='reset']").click({ force: true });
  });

  it('Should populate, pass validations, and submit form', () => {
    cy.get('input[name="option1"]').click({ force: true });
    cy.get('input[name="option6"]').click({ force: true });
    cy.get('input[name="option8"]').click({ force: true });
    cy.get('input[name="bodyOfWater1"]').click({ force: true });
    cy.get('input[name="bodyOfWater8"]').click({ force: true });
    cy.get('input[name="boatDetails1"]').click({ force: true });
    cy.get('input[name="boatDetails2"]').click({ force: true });
    cy.get('input[name="boatDetails6"]').click({ force: true });
    cy.get('input[name="nearby2"]').click({ force: true });
    cy.get('input[name="nearby6"]').click({ force: true });
    cy.get("button[type='submit']").click({ force: true });
  });
});