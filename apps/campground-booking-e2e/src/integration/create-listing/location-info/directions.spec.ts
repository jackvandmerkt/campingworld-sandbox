import { getText } from '../../../support/app.po';

describe('campground-booking', () => {
    before(() => {
        cy.login("test.user@aptitive.com", "@ptitive123") 
        cy.visit('/create-listing/directions')
    });
    it('should render components', () => {
        getText().contains('Need Support?');
        getText().contains('Pro Tips');
        getText().contains('Good Sam Rating');
        cy.get("button[data-validate='Submit']");
    });

    it('Should populate form, attempt submit, but not pass validations', () => {
        cy.get('textarea[formcontrolname="directions"]').type('Test Name 1', {force: true})
        cy.get('select[formcontrolname="directionsFromTown"]').select('Option 2', {force: true});
        cy.get('#toggleNascar').check({force: true});
        cy.get('input[formcontrolname="milesOrKM"]').type('Test Name 1', {force: true})
        cy.get('select[formcontrolname="unitOfMeasurement"]').select('Mi', {force: true});
        cy.get("button[data='Submit']").click();
    });

    it('Should clear form', () => {
        cy.get("button[data='Clear']").click();
    });

    it('Should populate, pass validations, and submit form', () => {
        cy.get('textarea[formcontrolname="directions"]').type('Test Name 1', {force: true})
        cy.get('select[formcontrolname="directionsFromTown"]').select('Option 2', {force: true});
        cy.get('#toggleNascar').check({force: true});
        cy.get('input[formcontrolname="milesOrKM"]').type('1', {force: true})
        cy.get('select[formcontrolname="unitOfMeasurement"]').select('Mi', {force: true});
        cy.get('select[formcontrolname="nameOfTrack"]').select('Auto Club Speedway', {force: true});
        cy.get("button[data='Submit']").click();
    });
});