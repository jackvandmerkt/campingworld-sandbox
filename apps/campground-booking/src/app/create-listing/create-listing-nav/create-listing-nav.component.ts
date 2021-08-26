import { Component } from "@angular/core";

@Component({
    selector: 'create-listing-nav',
    templateUrl: './create-listing-nav.component.html'
})
export class CreateListingNavComponent {
    unHideLocationInfo: boolean = false;
    unHideLocationDetails: boolean = false;
    unHideAmenities: boolean = false;
    unHideRentBuy: boolean = false;
    unHideRatesRatings: boolean = false;
    constructor() {

    }

    locationInfoToggle() {
        this.unHideLocationInfo = !this.unHideLocationInfo;
    }
    locationDetailsToggle() {
        this.unHideLocationDetails = !this.unHideLocationDetails;
    }
    amenitiesToggle() {
        this.unHideAmenities = !this.unHideAmenities;
    }
    rentBuyToggle() {
        this.unHideRentBuy = !this.unHideRentBuy;
    }
    ratesRatingsToggle() {
        this.unHideRatesRatings = !this.unHideRatesRatings;
    }
}