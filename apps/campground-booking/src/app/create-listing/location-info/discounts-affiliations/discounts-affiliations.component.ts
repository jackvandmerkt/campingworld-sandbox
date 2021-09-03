import { Component, OnInit } from "@angular/core";
import { FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'discounts-affiliations',
    templateUrl: './discounts-affiliations.component.html',
    styleUrls: ['./discounts-affiliations.component.css']
})
export class DiscountsAffiliationsComponent implements OnInit{
    discountsAffiliations!: FormGroup
    // isCoastChecked:boolean = false;
    constructor() {

    }
    ngOnInit() {
        this.discountsAffiliations = new FormGroup({
            aaaDiscount: new FormControl(''),
            militaryDiscount: new FormControl(''),
            affiliation: new FormControl(''),
            membersOfARVC: new FormControl(''),
            stateProvAffiliation: new FormControl(''),
            goodNeighborPark: new FormControl(''),
            goodNeighborParkNum: new FormControl(''),
            coastToCoastPark: new FormControl(''),
            coastToCoastParkMembershipNum: new FormControl('')       
        });
    };
}