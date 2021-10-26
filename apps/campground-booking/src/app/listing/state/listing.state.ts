import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UpdateGoodSamRecordForm } from './actions/listing.actions';
import { IGoodSamRecord, IContactInfo } from './models/listing';
export class ListingStateModel {
    goodSamRecord!: IGoodSamRecord;
    contactInfo!: IContactInfo;
}
@State<ListingStateModel>({
  name: 'listing',
  defaults: {
      goodSamRecord: {
        locationListingName: 'Default',
        sectionCodeId: 1,
        listingTypeId: 1,
        parkTypeId: 1,
        duplicateListingText: 'Default',
        primaryFileNumber: 1,
        listCity: 'Default',
        listStateId: 1,
        territoryId: 1,
        salesPresentationRequired: false,
        noOverniteGuests: false,
        deleteListing: false,
        deleteCodeId: 1
      },
      contactInfo: {
        mailingAddress: {
          street1: "123 Some Street",
          street2: "123 Some Street",
          city: "Chicago",
          listStateId: 5,
          zip: "60603",
          countryId: 1
        },
        physicalAndMailingAddressSame: false,
        physicalAddress: {
          street1: "123 Some Street",
          street2: "123 Some Street",
          city: "Chicago",
          listStateId: 5,
          zip: "60603",
          countryId: 1
        },
        latitude: 89.12323,
        longitude: 135.23488,
        elevation: 2732,
        email: "john.doe@example.com",
        telephone: "555-555-5555",
        repressedTelephone: "555-555-5555",
        webAddress: "https://www.example.com/",
        onlineWeb: "https://www.example.com/",
        skipUtm: false,
        facebook: "https://www.facebook.com/...",
        twitter: "https://twitter.com/...",
        pinterest: "https://www.pinterest.com/...",
        instagram: "https://www.instagram.com/...",
        parkTypeId: 1
      }
}
})
export class ListingState {
  @Selector()
  static getGoodSamRecord(state: ListingStateModel) {
    return state.goodSamRecord;
  }
  static getContactInfo(state: ListingStateModel) {
    return state.contactInfo;
}

  @Action(UpdateGoodSamRecordForm)
  update({getState, patchState }: StateContext<ListingStateModel>, { goodSamRecord }: UpdateGoodSamRecordForm) {
    const state = getState();
    patchState({
      ...state, goodSamRecord
  });
  }
}