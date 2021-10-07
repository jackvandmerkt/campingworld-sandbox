import { getText } from '../support/app.po';

describe('campground-booking', () => {
    beforeEach(() => {
        cy.viewport(1440, 900)
        cy.visit('/create-listing')
    });
    it('should render components', () => {
        getText().contains('Need Support?');
        getText().contains('Pro Tips');
        getText().contains('Good Sam Rating');
        cy.get("button[data-validate='Submit']");
    });

    it('Should expand all divs once expand all button is clicked', () => {
        cy.get("button[data-expandAll=Submit]").click();
        getText().contains('Good Sam Record ID');
        getText().contains('Interior Roads & Site Info');
        getText().contains('Restrooms');
        getText().contains('Tenting & Rentals');
        getText().contains('Ratings');
        cy.get("button[data-expandAll=Submit]").click();
    });

});