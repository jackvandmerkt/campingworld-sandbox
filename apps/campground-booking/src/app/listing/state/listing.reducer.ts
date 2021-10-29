import { createReducer, on, createFeatureSelector, createSelector  } from '@ngrx/store';
import { IListings } from '../../shared/listing.model';
import { listingRoutes } from '../listing.routes';
import { ListingActions } from './actions';

// State for this feature (Listing)
export interface ListingState {
    newListing: IListings | null;
  }
  const initialState: ListingState = {
    newListing: {
        locationListingName: '',
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
    on(ListingActions.updateInitialState, (state, action): ListingState => {
        return {
          ...state,
          newListing: {
            locationListingName: action.listing.locationListingName,
            listingId: action.listing.listingId,
            fileNumber: action.listing.fileNumber,
            bookYear: action.listing.bookYear
          }
        };
    }));