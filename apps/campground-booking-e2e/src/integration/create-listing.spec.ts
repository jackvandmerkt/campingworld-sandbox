import { getText } from '../support/app.po';

describe('campground-booking', () => {
    beforeEach(() => cy.visit('/create-listing'));
    it('should render components', () => {
        getText().contains('Need Support?');
        getText().contains('Good Sam Record ID');
    });

});