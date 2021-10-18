import { createAction, props } from "@ngrx/store";
import { IListings } from "../../../shared/listing-counts.model";

export const postListingInfo = createAction(
    '[Listing Info] POST Listing Info',
    props<{ listing: IListings }>()
  );

