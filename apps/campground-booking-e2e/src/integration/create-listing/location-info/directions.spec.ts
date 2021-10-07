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
        cy.get('input[formcontrolname="directions"]').type('Test Name 1')
    });

    it('Should clear form', () => {
        cy.get("button[data='Clear']").click();
    });

    it('Should populate, pass validations, and submit form', () => {
        
    });

});