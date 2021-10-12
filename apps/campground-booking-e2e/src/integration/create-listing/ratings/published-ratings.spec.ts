import { getText } from '../../../support/app.po';

describe('campground-booking', () => {
    before(() => {
        cy.login("test.user@aptitive.com", "@ptitive123") 
        cy.visit('/create-listing/published-ratings')
    });
    it('should render components', () => {
        getText().contains('Need Support?');
        getText().contains('Pro Tips');
        getText().contains('Good Sam Rating');
        cy.get("button[data-validate='Submit']");
    });

    it('Should populate form, attempt submit, but not pass validations', () => {
        cy.get('select[formcontrolname="lyNonRatedCode"]').select('Rebuilding', {force: true});
        cy.get('input[formcontrolname="lyFacilitiesTotal"]').type('not a number', {force: true});
        cy.get('input[formcontrolname="lyRestroomsTotal"]').type('1', {force: true});
        cy.get('input[formcontrolname="lyVisualTotal"]').type('1', {force: true});
        cy.get('textarea[formcontrolname="lyRatingChange"]').type('1', {force: true});
        cy.get('select[formcontrolname="tyNonRatedCode"]').select('Rebuilding', {force: true});
        cy.get('input[formcontrolname="tyFacilitiesTotal"]').type('1', {force: true});
        cy.get('input[formcontrolname="tyRestroomsTotal"]').type('1', {force: true});
        cy.get('input[formcontrolname="tyVisualTotal"]').type('1', {force: true});
        cy.get('textarea[formcontrolname="tyRatingChange"]').type('1', {force: true});
        cy.get('#confirmCheck').check({force: true});
        cy.get("button[data='Submit']").click();
    });

    it('Should clear form', () => {
        cy.get("button[data='Clear']").click();
    });

    it('Should populate, pass validations, and submit form', () => {
        cy.get('select[formcontrolname="lyNonRatedCode"]').select('Rebuilding', {force: true});
        cy.get('input[formcontrolname="lyFacilitiesTotal"]').type('1', {force: true});
        cy.get('input[formcontrolname="lyRestroomsTotal"]').type('1', {force: true});
        cy.get('input[formcontrolname="lyVisualTotal"]').type('1', {force: true});
        cy.get('textarea[formcontrolname="lyRatingChange"]').type('1', {force: true});
        cy.get('select[formcontrolname="tyNonRatedCode"]').select('Rebuilding', {force: true});
        cy.get('input[formcontrolname="tyFacilitiesTotal"]').type('1', {force: true});
        cy.get('input[formcontrolname="tyRestroomsTotal"]').type('1', {force: true});
        cy.get('input[formcontrolname="tyVisualTotal"]').type('1', {force: true});
        cy.get('textarea[formcontrolname="tyRatingChange"]').type('1', {force: true});
        cy.get('#confirmCheck').check({force: true});
        cy.get("button[data='Submit']").click();
    });
});