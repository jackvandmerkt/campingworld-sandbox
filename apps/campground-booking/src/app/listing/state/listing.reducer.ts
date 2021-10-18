import { createReducer, on, createFeatureSelector, createSelector  } from '@ngrx/store';
import { IListings } from '../../shared/listing-counts.model';
import { listingRoutes } from '../listing.routes';
import { ListingActions } from './actions';

// State for this feature (Listing)
export interface ListingState {
    newListing: IListings | null;
  }
  const initialState: ListingState = {
    newListing: {
        locationListingsName: '',
        listingId: 0,
        fileNumber: 0,
        bookYear: ''
    }
  };
// Selector functions
const getListingFeatureState = createFeatureSelector<ListingState>('listing-info');

export const getCurrentListing = createSelector(
    getListingFeatureState,
    state => state.newListing
  );
  export const listingReducer = createReducer<ListingState>(
    initialState,
    on(ListingActions.postListingInfo, (state, action): ListingState => {
        const newfileNumber = 0;
        const newlocationListingName = '';
        const newlistingId = 0;
        const newbookYear = '';
        return {
          ...state,
          newListing: {
            locationListingsName: newlocationListingName,
            listingId: newlistingId,
            fileNumber: newfileNumber,
            bookYear: newbookYear
          }
        };
    }));