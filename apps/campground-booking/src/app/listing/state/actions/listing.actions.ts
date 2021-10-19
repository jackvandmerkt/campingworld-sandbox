import { createAction, props } from "@ngrx/store";
import { IListings } from "../../../shared/listing-counts.model";

export const updateInitialState = createAction(
    '[Listing Info] Update Listing Info',
    props<{ listing: IListings }>()
  );

