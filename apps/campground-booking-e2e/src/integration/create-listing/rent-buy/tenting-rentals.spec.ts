import { getText } from '../../../support/app.po';

describe('campground-booking', () => {
    before(() => {
        cy.login("test.user@aptitive.com", "@ptitive123") 
        cy.visit('/create-listing/tenting-rentals')
    });
    it('should render components', () => {
        getText().contains('Need Support?');
        getText().contains('Pro Tips');
        getText().contains('Good Sam Rating');
        cy.get("button[data-validate='Submit']");
    });

    it('Should populate form, attempt submit, but not pass validations', () => {
        cy.get('#toggleRentalSites').check({force: true});
        cy.get('textarea[formcontrolname="rentalDescription"]').type('2', {force: true});
        cy.get('input[formcontrolname="numTentRentals"]').type('2', {force: true});
        cy.get('input[formcontrolname="numTeepeeYurts"]').type('4', {force: true});
        cy.get('input[formcontrolname="numRVParkModels"]').type('2', {force: true});
        cy.get('input[formcontrolname="numCabinsCottagesTinyHouses"]').type('4', {force: true});
        cy.get('input[formcontrolname="numLodgeRooms"]').type('not a number', {force: true});
        cy.get('input[formcontrolname="tentSleepUpTo"]').type('4', {force: true});
        cy.get('input[formcontrolname="tentMinStayNumOfDays"]').type('2', {force: true});
        cy.get('input[formcontrolname="tentDailyRateFrom"]').type('4', {force: true});
        cy.get('input[formcontrolname="tentDailyRateTo"]').type('2', {force: true});
        cy.get('input[formcontrolname="tySleepUpTo"]').type('4', {force: true});
        cy.get('input[formcontrolname="tyMinStayNumOfDays"]').type('2', {force: true});
        cy.get('input[formcontrolname="tyDailyRateFrom"]').type('4', {force: true});
        cy.get('input[formcontrolname="tyDailyRateTo"]').type('2', {force: true});
        cy.get('input[formcontrolname="rvSleepUpTo"]').type('not a number', {force: true});
        cy.get('input[formcontrolname="rvMinStayNumOfDays"]').type('4', {force: true});
        cy.get('input[formcontrolname="rvDailyRateFrom"]').type('2', {force: true});
        cy.get('input[formcontrolname="rvDailyRateTo"]').type('2', {force: true});
        cy.get('select[formcontrolname="rvBath"]').select('Option 2', {force: true});
        cy.get('select[formcontrolname="rvKitchen"]').select('Option 2', {force: true});
        cy.get('input[formcontrolname="ccthSleepUpTo"]').type('4', {force: true});
        cy.get('input[formcontrolname="ccthMinStayNumOfDays"]').type('2', {force: true});
        cy.get('input[formcontrolname="ccthDailyRateFrom"]').type('2', {force: true});
        cy.get('input[formcontrolname="ccthDailyRateTo"]').type('4', {force: true});
        cy.get('select[formcontrolname="ccthBath"]').select('Option 2', {force: true});
        cy.get('select[formcontrolname="ccthKitchen"]').select('Option 2', {force: true});
        cy.get('input[formcontrolname="lrSleepUpTo"]').type('2', {force: true});
        cy.get('input[formcontrolname="lrMinStayNumOfDays"]').type('2', {force: true});
        cy.get('input[formcontrolname="lrDailyRateFrom"]').type('4', {force: true});
        cy.get('input[formcontrolname="lrDailyRateTo"]').type('2', {force: true});
        cy.get('select[formcontrolname="lrBath"]').select('Option 2', {force: true});
        cy.get('select[formcontrolname="lrKitchen"]').select('Option 2', {force: true});
        cy.get("button[data='Submit']").click();
    });

    it('Should clear form', () => {
        cy.get("button[data='Clear']").click();
    });

    it('Should populate, pass validations, and submit form', () => {
        cy.get('#toggleRentalSites').check({force: true});
        cy.get('textarea[formcontrolname="rentalDescription"]').type('2', {force: true});
        cy.get('input[formcontrolname="numTentRentals"]').type('2', {force: true});
        cy.get('input[formcontrolname="numTeepeeYurts"]').type('4', {force: true});
        cy.get('input[formcontrolname="numRVParkModels"]').type('2', {force: true});
        cy.get('input[formcontrolname="numCabinsCottagesTinyHouses"]').type('4', {force: true});
        cy.get('input[formcontrolname="numLodgeRooms"]').type('1', {force: true});
        cy.get('input[formcontrolname="tentSleepUpTo"]').type('4', {force: true});
        cy.get('input[formcontrolname="tentMinStayNumOfDays"]').type('2', {force: true});
        cy.get('input[formcontrolname="tentDailyRateFrom"]').type('4', {force: true});
        cy.get('input[formcontrolname="tentDailyRateTo"]').type('2', {force: true});
        cy.get('input[formcontrolname="tySleepUpTo"]').type('4', {force: true});
        cy.get('input[formcontrolname="tyMinStayNumOfDays"]').type('2', {force: true});
        cy.get('input[formcontrolname="tyDailyRateFrom"]').type('4', {force: true});
        cy.get('input[formcontrolname="tyDailyRateTo"]').type('2', {force: true});
        cy.get('input[formcontrolname="rvSleepUpTo"]').type('1', {force: true});
        cy.get('input[formcontrolname="rvMinStayNumOfDays"]').type('4', {force: true});
        cy.get('input[formcontrolname="rvDailyRateFrom"]').type('2', {force: true});
        cy.get('input[formcontrolname="rvDailyRateTo"]').type('2', {force: true});
        cy.get('select[formcontrolname="rvBath"]').select('Option 2', {force: true});
        cy.get('select[formcontrolname="rvKitchen"]').select('Option 2', {force: true});
        cy.get('input[formcontrolname="ccthSleepUpTo"]').type('4', {force: true});
        cy.get('input[formcontrolname="ccthMinStayNumOfDays"]').type('2', {force: true});
        cy.get('input[formcontrolname="ccthDailyRateFrom"]').type('2', {force: true});
        cy.get('input[formcontrolname="ccthDailyRateTo"]').type('4', {force: true});
        cy.get('select[formcontrolname="ccthBath"]').select('Option 2', {force: true});
        cy.get('select[formcontrolname="ccthKitchen"]').select('Option 2', {force: true});
        cy.get('input[formcontrolname="lrSleepUpTo"]').type('2', {force: true});
        cy.get('input[formcontrolname="lrMinStayNumOfDays"]').type('2', {force: true});
        cy.get('input[formcontrolname="lrDailyRateFrom"]').type('4', {force: true});
        cy.get('input[formcontrolname="lrDailyRateTo"]').type('2', {force: true});
        cy.get('select[formcontrolname="lrBath"]').select('Option 2', {force: true});
        cy.get('select[formcontrolname="lrKitchen"]').select('Option 2', {force: true});
        cy.get("button[data='Submit']").click();
    });
});