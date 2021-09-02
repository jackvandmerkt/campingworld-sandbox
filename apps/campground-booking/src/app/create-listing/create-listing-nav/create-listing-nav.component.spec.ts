import { CreateListingNavComponent } from './create-listing-nav.component'

describe('CreateListingComponent', () => {
    let fixture: CreateListingNavComponent;

    beforeEach( () => {
        fixture = new CreateListingNavComponent;
    })

    describe('Setup Component', () => {
        it('should', () => {
            const expandAllSpy = jest.spyOn(fixture, 'expandAll');

            expect(expandAllSpy).toHaveBeenCalled;
        });
    });
});
