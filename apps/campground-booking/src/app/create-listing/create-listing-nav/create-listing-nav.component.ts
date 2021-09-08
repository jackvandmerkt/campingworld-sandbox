import { Component } from "@angular/core";

@Component({
    selector: 'create-listing-nav',
    templateUrl: './create-listing-nav.component.html'
})
export class CreateListingNavComponent {
    listingStatus: string = 'open';
    unHideLocationInfo: boolean = false;
    unHideLocationDetails: boolean = false;
    unHideAmenities: boolean = false;
    unHideRentBuy: boolean = false;
    unHideRatings: boolean = false;
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
        if(this.unHideRatings == false) {
            this.unHideRatings = !this.unHideRatings;
        }
        else if((this.unHideLocationInfo == true) && (this.unHideLocationDetails == true) && (this.unHideAmenities == true) 
            && (this.unHideRentBuy == true) && (this.unHideRatings == true)) {
                this.unHideLocationInfo = false;
                this.unHideLocationDetails = false;
                this.unHideAmenities = false;
                this.unHideRentBuy = false;
                this.unHideRatings = false;
        }
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
    ratingsToggle() {
        this.unHideRatings = !this.unHideRatings;
    }

    
}