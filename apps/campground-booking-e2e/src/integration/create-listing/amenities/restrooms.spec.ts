import { getText } from '../../../support/app.po';

describe('campground-booking', () => {
    before(() => {
        cy.login("test.user@aptitive.com", "@ptitive123") 
        cy.visit('/create-listing/restrooms')
    });
    it('should render components', () => {
        getText().contains('Need Support?');
        getText().contains('Pro Tips');
        getText().contains('Good Sam Rating');
        cy.get("button[data-validate='Submit']");
    });

    it('Should populate form, attempt submit, but not pass validations', () => {
        cy.get('select[formcontrolname="restroomsShowersSelect"]').select('Restrooms', {force: true});
        cy.get('input[formcontrolname="numToiletsMen"]').type('not a number', {force: true});
        cy.get('input[formcontrolname="numToiletsWomen"]').type('2', {force: true});
        cy.get('input[formcontrolname="numToiletsUni"]').type('not a number', {force: true});
        cy.get('#togglePaid').check({force: true});
        cy.get("button[data='Submit']").click();
    });

    it('Should clear form', () => {
        cy.get("button[data='Clear']").click();
    });

    it('Should populate, pass validations, and submit form', () => {
        cy.get('select[formcontrolname="restroomsShowersSelect"]').select('Restrooms', {force: true});
        cy.get('input[formcontrolname="numToiletsMen"]').type('2', {force: true});
        cy.get('input[formcontrolname="numToiletsWomen"]').type('2', {force: true});
        cy.get('input[formcontrolname="numToiletsUni"]').type('4', {force: true});
        cy.get('#togglePaid').check({force: true});
        cy.get("button[data='Submit']").click();
    });
});