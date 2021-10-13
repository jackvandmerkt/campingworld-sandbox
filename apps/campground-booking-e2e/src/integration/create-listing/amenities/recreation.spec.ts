import { getText } from '../../../support/app.po';

describe('campground-booking', () => {
  before(() => {
    cy.login("test.user@aptitive.com", "@ptitive123")
    cy.visit('/create-listing/recreation')
  });
  it('should render components', () => {
    getText().contains('Need Support?');
    getText().contains('Pro Tips');
    getText().contains('Good Sam Rating');
    cy.get("button[data-validate='Submit']");
  });

  it('Should populate form, attempt submit, but not pass validations', () => {
    cy.get('#toggleRecreation').check({ force: true });
    cy.get('#toggleOpen').check({ force: true });
    cy.get('input[name="option31"]').click({ force: true });
    cy.get('input[name="option32"]').click({ force: true });
    cy.get("button[type='submit']").click({ force: true });
  });

  it('Should clear form', () => {
    cy.get("button[type='reset']").click({ force: true });
  });

  it('Should populate, pass validations, and submit form', () => {
    cy.get('#toggleRecreation').check({ force: true });
    cy.get('input[name="option31"]').click({ force: true });
    cy.get('input[name="option20"]').click({ force: true });
    cy.get('input[name="option10"]').click({ force: true });
    cy.get("button[type='submit']").click({ force: true });
  });
});