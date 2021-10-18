import { createReducer, on, createFeatureSelector, createSelector  } from '@ngrx/store';
import { IListings } from '../../shared/listing-counts.model';

// State for this feature (Listing)
export interface ListingState {
    newListing: IListings | null;
  }
  const initialState: ListingState = {
    newListing: null
  };
// Selector functions
const getListingFeatureState = createFeatureSelector<ListingState>('listing-info');

export const getCurrentUser = createSelector(
    getListingFeatureState,
    state => state.newListing
  );
  export const listingReducer = createReducer<ListingState>(
    initialState,
    // create action
    on((state): ListingState => {
      return {
        ...state,
      };
    })
  );