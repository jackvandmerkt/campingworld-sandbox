import { getText } from '../support/app.po';

describe('campground-booking', () => {
  beforeEach(() => cy.visit('/'));

  it('should render listing and order card components', () => {
    getText().contains('Listings');
    getText().contains('Orders');
    cy.get('.flex-col > :nth-child(1)');
    cy.get("button[data-cy=Submit]").click();
  });

  it('should render proposals card', () => {
    getText().contains('Proposals');
    getText().contains('Conversion Rate');
  });

  it('should render recently view listings', () => {
    getText().contains('Recently Viewed Listings');
    
  });
});
