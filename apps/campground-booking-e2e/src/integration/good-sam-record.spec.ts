import { getText } from '../support/app.po';

describe('campground-booking', () => {
    beforeEach(() => {
        cy.viewport(1440, 900)
        cy.login()

        cy.visit('/create-listing/good-sam-record')
        
    });
    it('should render components', () => {
        getText().contains('Need Support?');
        getText().contains('Pro Tips');
        getText().contains('Good Sam Rating');
        cy.get("button[data-validate='Submit']");
    });

    it('Submit form', () => {
        cy.get('input[name="listCity"]').type('Test Name 1')
        cy.get('select[name="listState"]').select('')
        cy.get('select[name="sectionCode"]').select('')
        cy.get('select[name="listingType"]').select('')
        cy.get('select[name="parkType"]').select('')
        cy.get('select[name="territory"]').select('')
    });

    it('', () => {
        
    });

});