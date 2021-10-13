import { getText } from '../../../support/app.po';

describe('campground-booking', () => {
    before(() => {
        cy.login("test.user@aptitive.com", "@ptitive123") 
        cy.visit('/create-listing/ratings')
    });
    it('should render components', () => {
        getText().contains('Need Support?');
        getText().contains('Pro Tips');
        getText().contains('Good Sam Rating');
        cy.get("button[data-validate='Submit']");
    });

    it('Should - select park CAN be rated, attempt submit, but not pass validations', () => {
        cy.get("button[data='Clear']").click();
        cy.get('#toggleCanParkBeRated').check({force: true});
        // Facilities Section
        cy.get("button[ data='unHideFacilities']").click();
        cy.get('#interiorRoads1').check({force: true});
        cy.get('#registration1').check({force: true});
        cy.get('#sites1').check({force: true});
        cy.get('#hookups1').check({force: true});
        cy.get('#recreation1').check({force: true});
        cy.get('#security1').check({force: true});
        cy.get('#laundry1').check({force: true});
        cy.get('#services1').check({force: true});
        cy.get('#internetAccess1').check({force: true});

        // Restroom Section
        cy.get("button[data='unHideRestrooms']").click();
        cy.get('#toilets1').check({force: true});
        cy.get('#showers1').check({force: true});
        cy.get('#floors1').check({force: true});
        cy.get('#walls1').check({force: true});
        cy.get('#interiorConstruction1').check({force: true});
        cy.get('#supplyOdorFree1').check({force: true});
        cy.get('#amtOfFacilities1').check({force: true});
        cy.get('#extAppearance1').check({force: true});
        cy.get('#intAppearance1').check({force: true});

        // VA/EQ Section
        cy.get("button[data='unHideVAEQ']").click();
        cy.get('#signage1').check({force: true});
        cy.get('#entranceArea1').check({force: true});
        cy.get('#parkGrounds1').check({force: true});
        cy.get('#siteAppearance1').check({force: true});
        cy.get('#litterDebris1').check({force: true});
        cy.get('#extBuildingMaint1').check({force: true});
        cy.get('#trashDisposal1').check({force: true});
        cy.get('#noise1').check({force: true});
        cy.get('#parkSetting1').check({force: true});
        cy.get('#siteLayout1').check({force: true});

        cy.get("button[data='Submit']").click();
    });

    it('Should clear form', () => {
        cy.get("button[data='Clear']").click();
    });

    it('Should - select park CAN be rated, pass validations, and submit form', () => {
        cy.get("button[data='Clear']").click();
        cy.get('#toggleCanParkBeRated').check({force: true});
        // Facilities Section
        cy.get("button[ data='unHideFacilities']").click();
        cy.get('#interiorRoads1').check({force: true});
        cy.get('#registration1').check({force: true});
        cy.get('#sites1').check({force: true});
        cy.get('#hookups1').check({force: true});
        cy.get('#recreation1').check({force: true});
        cy.get('#swimming1').check({force: true});
        cy.get('#security1').check({force: true});
        cy.get('#laundry1').check({force: true});
        cy.get('#services1').check({force: true});
        cy.get('#internetAccess1').check({force: true});

        // Restroom Section
        cy.get("button[data='unHideRestrooms']").click();
        cy.get('#toilets1').check({force: true});
        cy.get('#showers1').check({force: true});
        cy.get('#floors1').check({force: true});
        cy.get('#walls1').check({force: true});
        cy.get('#scm1').check({force: true});
        cy.get('#interiorConstruction1').check({force: true});
        cy.get('#supplyOdorFree1').check({force: true});
        cy.get('#amtOfFacilities1').check({force: true});
        cy.get('#extAppearance1').check({force: true});
        cy.get('#intAppearance1').check({force: true});

        // VA/EQ Section
        cy.get("button[data='unHideVAEQ']").click();
        cy.get('#signage1').check({force: true});
        cy.get('#entranceArea1').check({force: true});
        cy.get('#parkGrounds1').check({force: true});
        cy.get('#siteAppearance1').check({force: true});
        cy.get('#litterDebris1').check({force: true});
        cy.get('#extBuildingMaint1').check({force: true});
        cy.get('#trashDisposal1').check({force: true});
        cy.get('#noise1').check({force: true});
        cy.get('#parkSetting1').check({force: true});
        cy.get('#siteLayout1').check({force: true});

        cy.get("button[data='Submit']").click();
       
    });

    it('Should - select park CANNOT be rated, pass validations, and submit form', () => {
        cy.get("button[data='Clear']").click();
        cy.get('select[formcontrolname="nonRatedCode"]').select('Rebuilding', {force: true});
        cy.get("button[data='Submit']").click();
    });
});