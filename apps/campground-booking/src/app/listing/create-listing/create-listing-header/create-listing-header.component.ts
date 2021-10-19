import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
    selector: 'create-listing-header',
    templateUrl: './create-listing-header.component.html'
})
export class CreateListingHeaderComponent implements OnInit {
    parkName: string = '';
    fileNum: number = 0;

    constructor(private store: Store<any>) {

    }

    ngOnInit() {
        this.store.select('listing-info').subscribe(
            data => {
              if (data) {
                this.fileNum = data.listingReducer.newListing.fileNumber
              }
            });
        this.store.select('listing-info').subscribe(
            data => {
                if (data) {
                this.parkName = data.listingReducer.newListing.locationListingName
                }
            });
    }
}