import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { ListingNavService } from "../../../shared/listing-nav.service";

@Component({
    selector: 'create-listing-nav',
    templateUrl: './create-listing-nav.component.html',
    styleUrls: ['./create-listing-nav.component.css']
})
export class CreateListingNavComponent implements OnInit, OnChanges{
    listingStatus: string = 'open';
    unHideLocationInfo: boolean = false;
    unHideLocationDetails: boolean = false;
    unHideAmenities: boolean = false;
    unHideRentBuy: boolean = false;
    unHideRatings: boolean = false;

    // variables for switching checkmark images
    formSubmitStatus:any = {
        locationInfoSectionStatus: 0,
        goodSamRecordFormStatus: 0,
        contactInfoFormStatus: 0,
        discountsAffiliationFormStatus: 0,
        ownerB2BInfoFormStatus: 0,
        directionsFormStatus: 0,
        goodSamParkFormStatus: 0,
        locationDetailsSectionStatus: 0,
        interiorRoadsFormStatus: 0,
        policiesFormStatus: 0,
        ratesReservationsFormStatus: 0,
        ecoFriendlyFormStatus: 0,
        amenitiesSectionStatus: 0,
        restroomsFormStatus: 0,
        onSiteServicesFormStatus: 0,
        recreationFormStatus: 0,
        waterRecreationFormStatus: 0,
        rentBuySectionStatus: 0,
        tentingRentalsFormStatus: 0,
        rvHomesFormStatus: 0,
        ratingsSectionStatus: 0,
        ratingsFormStatus: 0,
        publishedRatingsFormStatus: 0,
        listingUpdateDetailsSectionStatus: 0
      }

    constructor(private listingNavService: ListingNavService) {

    }

    ngOnInit() {
        this.listingNavService.getFormStatus().subscribe(data => {
            console.log(data)
            for(let key of Object.keys(this.formSubmitStatus)) {
                if(key === data[0]) {
                    this.formSubmitStatus[key] = data[1];
                }
            } 
        });
    }

    ngOnChanges() {
        this.listingNavService.getFormStatus().subscribe(data => {
            console.log(data)
            for(let key of Object.keys(this.formSubmitStatus)) {
                if(key === data[0]) {
                    this.formSubmitStatus[key] = data[1];
                }
            } 
        });
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