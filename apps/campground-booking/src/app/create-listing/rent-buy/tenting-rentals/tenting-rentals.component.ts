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
    tentSites: boolean = false;
    tentingArea: boolean = false;
    rentalSites: boolean = false;
    constructor() {

    }

    ngOnInit() {
        this.tentingRentals = new FormGroup({

        });
    }

    otherChecked(radio: any) {
        if (!this.otherOptions.includes(radio)) {
            this.otherOptions.push(radio)
          } else {
            this.otherOptions = this.otherOptions.filter(option => option !== radio)
          }
    }

    checkBoxTentSitesChange(cb:any) {
        this.tentSites = !this.tentSites;
    }
    checkBoxTentingAreaChange(cb:any) {
        this.tentingArea = !this.tentingArea;
    }

    checkBoxRentalsSitesChange(cb:any) {
        this.rentalSites = !this.rentalSites;
    }
}