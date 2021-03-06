import { getText } from '../../../support/app.po';

describe('campground-booking', () => {
    before(() => {
        cy.login("test.user@aptitive.com", "@ptitive123") 
        cy.visit('/create-listing/discounts-affiliations')
    });
    it('should render components', () => {
        getText().contains('Need Support?');
        getText().contains('Pro Tips');
        getText().contains('Good Sam Rating');
        cy.get("button[data-validate='Submit']");
    });

    it('Should populate form, attempt submit, but not pass validations', () => {
        cy.get('#toggleMilitary').check({force: true});
        cy.get('select[formcontrolname="affiliation"]').select('1 - KOA', {force: true});
        cy.get('select[formcontrolname="stateProvAffiliation"]').select('Alaska', {force: true});
        cy.get('input[formcontrolname="coastToCoastMembershipNum"]').type('not a number');
        cy.get("button[data='Submit']").click();
    });

    it('Should clear form', () => {
        cy.get("button[data='Clear']").click();
    });

    it('Should populate, pass validations, and submit form', () => {
        cy.get('#toggleMilitary').check({force: true});
        cy.get('select[formcontrolname="affiliation"]').select('1 - KOA', {force: true});
        cy.get('select[formcontrolname="stateProvAffiliation"]').select('Alaska', {force: true});
        cy.get('input[formcontrolname="coastToCoastMembershipNum"]').type('1');
        cy.get("button[data='Submit']").click();
    });
});