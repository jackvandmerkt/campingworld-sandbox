import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map } from "rxjs/operators";
import { ListingService } from "../../shared/listing.service";
import { ListingActions } from "./actions";

@Injectable()
export class ListingEffects {

  constructor(private actions$: Actions, private listingService: ListingService) { }

  postListing$ = createEffect(() => {
    return this.actions$
      .pipe(ofType(ListingActions.postListingInfo),
      );
  });
}