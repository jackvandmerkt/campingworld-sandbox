import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UpdateGoodSamRecordForm } from './actions/listing.actions';
import { Listing } from './models/listing';

// export class ListingStateModel {
//     listing!: Listing[];
// }

// @State<ListingStateModel>({
//     name: 'listing',
//     defaults: {
//         listing: []
//     }
// })
// export class ListingState {

//     @Selector()
//     static getListing(state: ListingStateModel) {
//         return state.listing;
//     }

//     @Action(UpdateListingForm)
//     add({getState, patchState }: StateContext<ListingStateModel>, { payload }: UpdateListingForm) {
//         const state = getState();
//         patchState({
//             listing: [...state.listing, payload]
//         });
//     }
// }

export class ListingStateModel {
  listing!: Listing;
}

@State<ListingStateModel>({
  name: 'listing',
  defaults: {
    listing: {
      goodSamRecord: {
        locationListingName: 'na',
        sectionCodeId: 1,
        listTypeId: "2",
        parkTypeId: 2,
        duplicateListingText: "",
        primaryFileNumber: "",
        listCity: "x",
        listStateId: 1,
        territoryId: 2,
        salesPresentationRequired: false,
        noOvernightGuests: false,
        deleteListing: false,
        reasonForDelete: ""
      },
      contactinfo: {
        name: 'l'
      }
  }
}
})
export class ListingState {

  @Selector()
  static getListing(state: ListingStateModel) {
      return state.listing;
  }

  // @Action(UpdateGoodSamRecordForm)
  // add({getState, setState }: StateContext<Listing>, { goodSamRecord }: UpdateGoodSamRecordForm) {
  //     const state = getState();
  //     setState({
  //         listing: {...state.listing, goodSamRecord}
  //     });
  // }

  @Action(UpdateGoodSamRecordForm)
  update({getState, setState }: StateContext<ListingStateModel>, { goodSamRecord }: UpdateGoodSamRecordForm) {
    const state = getState();
    setState({
      ...state.listing, listing: goodSamRecord
  });
  }
}