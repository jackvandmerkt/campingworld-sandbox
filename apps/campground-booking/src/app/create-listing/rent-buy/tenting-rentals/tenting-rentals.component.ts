import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'tenting-rentals',
    templateUrl: './tenting-rentals.component.html',
    styleUrls: ['./tenting-rentals.component.css']
})
export class TentingRentalsComponent implements OnInit{
    tentingRentals!: FormGroup;
    otherOptions: string[] = [];

    //toggle variables
    tentSites: boolean = false;
    tentingArea: boolean = false;
    rentalSites: boolean = false;
    tentPetsAllowed: boolean = false;
    tentPetsAllowedCost: boolean = false;
    tyPetsAllowed: boolean = false;
    tyPetsAllowedCost: boolean = false;
    rvPetsAllowed: boolean = false;
    rvPetsAllowedCost: boolean = false;
    rvLinensAvail: boolean = false;
    rvLinensAvailCost: boolean = false;
    ccthPetsAllowed: boolean = false;
    ccthPetsAllowedCost: boolean = false;
    ccthLinensAvail: boolean = false;
    ccthLinensAvailCost: boolean = false;
    lrPetsAllowed: boolean = false;
    lrPetsAllowedCost: boolean = false;
    lrLinensAvail: boolean = false;
    lrLinensAvailCost: boolean = false;

    constructor() {

    }

    ngOnInit() {
        this.tentingRentals = new FormGroup({

        });
    }

    // Other Multi check radios
    otherChecked(radio: any) {
        if (!this.otherOptions.includes(radio)) {
            this.otherOptions.push(radio)
          } else {
            this.otherOptions = this.otherOptions.filter(option => option !== radio)
          }
    }
    // Tent sites? toggle
    checkBoxTentSitesChange(cb:any) {
        this.tentSites = !this.tentSites;
    }
    // Dedicated tenting area toggle
    checkBoxTentingAreaChange(cb:any) {
        this.tentingArea = !this.tentingArea;
    }

    // Rentals? toggle
    checkBoxRentalsSitesChange(cb:any) {
        this.rentalSites = !this.rentalSites;
    }

    // Tent Rentals toggles
    checkBoxTentPetsAllowedChange(cb:any) {
        this.tentPetsAllowed = !this.tentPetsAllowed;
    }
    checkBoxTentPetsAllowedCostChange(cb:any) {
        this.tentPetsAllowedCost = !this.tentPetsAllowedCost;
    }

    // Teepee Yurts Rentals toggles
    checkBoxTYPetsAllowedChange(cb:any) {
        this.tyPetsAllowed = !this.tyPetsAllowed;
    }
    checkBoxTYPetsAllowedCostChange(cb:any) {
        this.tyPetsAllowedCost = !this.tyPetsAllowedCost;
    }

    // RV Park Model Rentals toggles
    checkBoxRVPetsAllowedChange(cb:any) {
        this.rvPetsAllowed = !this.rvPetsAllowed;
    }
    checkBoxRVPetsAllowedCostChange(cb:any) {
        this.rvPetsAllowedCost = !this.rvPetsAllowedCost;
    }
    checkBoxRVLinensAvailChange(cb:any) {
        this.rvLinensAvail = !this.rvLinensAvail;
    }
    checkBoxRVLinensAvailCostChange(cb:any) {
        this.rvLinensAvailCost = !this.rvLinensAvailCost;
    }

    // Cabin, Cottage, Tiny House Rentals toggles
    checkBoxCCTHPetsAllowedChange(cb:any) {
        this.ccthPetsAllowed = !this.ccthPetsAllowed;
    }
    checkBoxCCTHPetsAllowedCostChange(cb:any) {
        this.ccthPetsAllowedCost = !this.ccthPetsAllowedCost;
    }
    checkBoxCCTHLinensAvailChange(cb:any) {
        this.ccthLinensAvail = !this.ccthLinensAvail;
    }
    checkBoxCCTHLinensAvailCostChange(cb:any) {
        this.ccthLinensAvailCost = !this.ccthLinensAvailCost;
    }

    // Lodge Rentals toggles
    checkBoxLRPetsAllowedChange(cb:any) {
        this.lrPetsAllowed = !this.lrPetsAllowed;
    }
    checkBoxLRPetsAllowedCostChange(cb:any) {
        this.lrPetsAllowedCost = !this.lrPetsAllowedCost;
    }
    checkBoxLRLinensAvailChange(cb:any) {
        this.lrLinensAvail = !this.lrLinensAvail;
    }
    checkBoxLRLinensAvailCostChange(cb:any) {
        this.lrLinensAvailCost = !this.lrLinensAvailCost;
    }
}