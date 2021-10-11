import { getText } from '../../../support/app.po';

describe('campground-booking', () => {
    before(() => {
        cy.login("test.user@aptitive.com", "@ptitive123") 
        cy.visit('/create-listing/interior-roads')
    });
    it('should render components', () => {
        getText().contains('Need Support?');
        getText().contains('Pro Tips');
        getText().contains('Good Sam Rating');
        cy.get("button[data-validate='Submit']");
    });

    it('Should populate form, attempt submit, but not pass validations', () => {
        cy.get('#goodRadio').check({force: true});
        cy.get('select[formcontrolname="interiorRoadType"]').select('Option 2', {force: true});
        cy.get('input[formcontrolname="totalSpaces"]').type('1', {force: true});
        cy.get('input[formcontrolname="numAvailable"]').type('not a number', {force: true});
        cy.get('input[formcontrolname="numSeasonal"]').type('1', {force: true});
        cy.get('input[formcontrolname="numPermanent"]').type('1', {force: true});
        cy.get('#toggleSeasonal').check({force: true});
        cy.get('input[formcontrolname="numPaved"]').type('not a number', {force: true});
        cy.get('input[formcontrolname="numAllWeather"]').type('1', {force: true});
        cy.get('input[formcontrolname="numGravel"]').type('1', {force: true});
        cy.get('input[formcontrolname="numGrass"]').type('1', {force: true});
        cy.get('input[formcontrolname="numDirt"]').type('1', {force: true});
        cy.get('input[formcontrolname="numFullHookups"]').type('1', {force: true});
        cy.get('input[formcontrolname="numWater"]').type('not a number', {force: true});
        cy.get('input[formcontrolname="numSewer"]').type('1', {force: true});
        cy.get('input[formcontrolname="numElectric"]').type('1', {force: true});
        cy.get('input[formcontrolname="numNoHookups"]').type('not a number', {force: true});
        cy.get('select[formcontrolname="amps"]').select('Option 2', {force: true});
        cy.get('#someRadio').check({force: true});
        cy.get('#toggleBigRig').check({force: true});
        cy.get('input[formcontrolname="pullThruW"]').type('1', {force: true});
        cy.get('input[formcontrolname="pullThruL"]').type('1', {force: true});
        cy.get('input[formcontrolname="numOfPullThrus"]').type('1', {force: true});
        cy.get('input[formcontrolname="backInW"]').type('1', {force: true});
        cy.get('input[formcontrolname="backInL"]').type('not a number', {force: true});
        cy.get('#toggleSlideOuts').check({force: true});
        cy.get('#shadedSomeRadio').check({force: true});
        cy.get("button[data='Submit']").click();
    });

    it('Should clear form', () => {
        cy.get("button[data='Clear']").click();
    });

    it('Should populate, pass validations, and submit form', () => {
        cy.get('#goodRadio').check({force: true});
        cy.get('select[formcontrolname="interiorRoadType"]').select('Option 2', {force: true});
        cy.get('input[formcontrolname="totalSpaces"]').type('1', {force: true});
        cy.get('input[formcontrolname="numAvailable"]').type('1', {force: true});
        cy.get('input[formcontrolname="numSeasonal"]').type('1', {force: true});
        cy.get('input[formcontrolname="numPermanent"]').type('1', {force: true});
        cy.get('#toggleSeasonal').check({force: true});
        cy.get('input[formcontrolname="numPaved"]').type('1', {force: true});
        cy.get('input[formcontrolname="numAllWeather"]').type('1', {force: true});
        cy.get('input[formcontrolname="numGravel"]').type('1', {force: true});
        cy.get('input[formcontrolname="numGrass"]').type('1', {force: true});
        cy.get('input[formcontrolname="numDirt"]').type('1', {force: true});
        cy.get('input[formcontrolname="numFullHookups"]').type('1', {force: true});
        cy.get('input[formcontrolname="numWater"]').type('1', {force: true});
        cy.get('input[formcontrolname="numSewer"]').type('1', {force: true});
        cy.get('input[formcontrolname="numElectric"]').type('1', {force: true});
        cy.get('input[formcontrolname="numNoHookups"]').type('1', {force: true});
        cy.get('select[formcontrolname="amps"]').select('Option 2', {force: true});
        cy.get('#someRadio').check({force: true});
        cy.get('#toggleBigRig').check({force: true});
        cy.get('input[formcontrolname="pullThruW"]').type('1', {force: true});
        cy.get('input[formcontrolname="pullThruL"]').type('1', {force: true});
        cy.get('input[formcontrolname="numOfPullThrus"]').type('1', {force: true});
        cy.get('input[formcontrolname="backInW"]').type('1', {force: true});
        cy.get('input[formcontrolname="backInL"]').type('1', {force: true});
        cy.get('#toggleSlideOuts').check({force: true});
        cy.get('#shadedSomeRadio').check({force: true});
        cy.get("button[data='Submit']").click();
    });
});