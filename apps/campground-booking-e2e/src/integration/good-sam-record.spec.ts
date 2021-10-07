import { getText } from '../support/app.po';

describe('campground-booking', () => {
    before(() => {
        cy.login("test.user@aptitive.com", "@ptitive123") 
        // cy.wait('@loginAttempt')
        cy.visit('/create-listing/good-sam-record')
    });
    it('should render components', () => {
        getText().contains('Need Support?');
        getText().contains('Pro Tips');
        getText().contains('Good Sam Rating');
        cy.get("button[data-validate='Submit']");
    });

    it('Submit form', () => {
        cy.get('input[formcontrolname="listCity"]').type('Test Name 1')
        cy.get('input[formcontrolname="parkName"]').type('Test Name 1')
        cy.get('select[formcontrolname="listState"]').select('Alaska', {force: true})
        cy.get('select[formcontrolname="sectionCode"]').select('Private Park - 010', {force: true})
        cy.get('select[formcontrolname="listType"]').select('Park Primary', {force: true})
        cy.get('select[formcontrolname="parkType"]').select('Campground', {force: true})
        cy.get('select[formcontrolname="territory"]').select('Alaska', {force: true})
    });

    it('', () => {
        
    });

});