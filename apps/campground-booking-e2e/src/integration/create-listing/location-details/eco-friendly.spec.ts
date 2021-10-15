import { getText } from '../../../support/app.po';

describe('campground-booking', () => {
  before(() => {
    cy.login("test.user@aptitive.com", "@ptitive123")
    cy.visit('/create-listing/eco-friendly')
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
    cy.get('#toggleGreenPark').click({ force: true });
    cy.get('input[name="option1"]').click({ force: true });
    cy.get('input[name="option6"]').click({ force: true });
    cy.get('input[name="option8"]').click({ force: true });
    cy.get("button[type='submit']").click({ force: true });
  });
});