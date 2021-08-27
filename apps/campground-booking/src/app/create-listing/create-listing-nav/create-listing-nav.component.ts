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
    expandAll() {
        if(this.unHideLocationInfo == false) {
            this.unHideLocationInfo = !this.unHideLocationInfo;
        }
        if(this.unHideLocationDetails == false) {
            this.unHideLocationDetails = !this.unHideLocationDetails;
        }
        if(this.unHideAmenities == false) {
            this.unHideAmenities = !this.unHideAmenities;
        }
        if(this.unHideRentBuy == false) {
            this.unHideRentBuy = !this.unHideRentBuy;
        }
        if(this.unHideRatesRatings == false) {
            this.unHideRatesRatings = !this.unHideRatesRatings;
        }
        // if((this.unHideLocationInfo == true) && (this.unHideLocationDetails == true) && (this.unHideAmenities == true) 
        //     && (this.unHideRentBuy == true) && (this.unHideRatesRatings == true)) {
        //         this.unHideLocationInfo = false;
        //         this.unHideLocationDetails = !this.unHideLocationDetails;
        //         this.unHideAmenities = !this.unHideAmenities;
        //         this.unHideRentBuy = !this.unHideRentBuy;
        //         this.unHideRatesRatings = !this.unHideRatesRatings;
        // }
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