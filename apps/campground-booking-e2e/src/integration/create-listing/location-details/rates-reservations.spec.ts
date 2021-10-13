import { getText } from '../../../support/app.po';

describe('campground-booking', () => {
    before(() => {
        cy.login("test.user@aptitive.com", "@ptitive123") 
        cy.visit('/create-listing/rates-reservations')
    });
    it('should render components', () => {
        getText().contains('Need Support?');
        getText().contains('Pro Tips');
        getText().contains('Good Sam Rating');
        cy.get("button[data-validate='Submit']");
    });

    it('Should populate form, attempt submit, but not pass validations', () => {
        cy.get('input[formcontrolname="overnightRatesFrom"]').type('1', {force: true});
        cy.get('input[formcontrolname="overnightRatesTo"]').type('1', {force: true});
        cy.get('input[formcontrolname="tentRatesFrom"]').type('1', {force: true});
        cy.get('input[formcontrolname="tentRatesTo"]').type('1', {force: true});
        cy.get('input[formcontrolname="seasonalRatesFrom"]').type('1', {force: true});
        cy.get('input[formcontrolname="seasonalRatesTo"]').type('not a number', {force: true});
        cy.get('select[formcontrolname="byWeekMonth"]').select('Week', {force: true});
        // cy.get('ejs-datepicker[formcontrolname="rateStartDate"]').type('10/20/2021', {force: true});
        // cy.get('ejs-datepicker[formcontrolname="rateEndDate"]').type('not a date', {force: true});
        cy.get('#togglecreditCards').check({force: true});
        cy.get('#creditCardOption1').check({force: true});
        cy.get('#toggleReservations').check({force: true});
        cy.get('#toggleOnlineReservation').check({force: true});
        cy.get('select[formcontrolname="onlineReservationSystem"]').select('Other', {force: true});
        cy.get('input[formcontrolname="onlineReservationSystemOther"]').type('other system', {force: true});
        cy.get("button[data='Submit']").click();
    });

    it('Should clear form', () => {
        cy.get("button[data='Clear']").click();
    });

    it('Should populate, pass validations, and submit form', () => {
        cy.get('input[formcontrolname="overnightRatesFrom"]').type('1', {force: true});
        cy.get('input[formcontrolname="overnightRatesTo"]').type('1', {force: true});
        cy.get('input[formcontrolname="tentRatesFrom"]').type('1', {force: true});
        cy.get('input[formcontrolname="tentRatesTo"]').type('1', {force: true});
        cy.get('input[formcontrolname="seasonalRatesFrom"]').type('1', {force: true});
        cy.get('input[formcontrolname="seasonalRatesTo"]').type('1', {force: true});
        cy.get('select[formcontrolname="byWeekMonth"]').select('Week', {force: true});
        // cy.get('ejs-datepicker[formcontrolname="rateStartDate"]').type('10/20/2021', {force: true});
        // cy.get('ejs-datepicker[formcontrolname="rateEndDate"]').type('not a date', {force: true});
        cy.get('#togglecreditCards').check({force: true});
        cy.get('#creditCardOption1').check({force: true});
        cy.get('#toggleReservations').check({force: true});
        cy.get('#toggleOnlineReservation').check({force: true});
        cy.get('select[formcontrolname="onlineReservationSystem"]').select('Other', {force: true});
        cy.get('input[formcontrolname="onlineReservationSystemOther"]').type('other system', {force: true});
        cy.get("button[data='Submit']").click();
    });
});