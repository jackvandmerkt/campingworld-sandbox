import { Component, OnInit } from "@angular/core";
import { FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'discounts-affiliations',
    templateUrl: './discounts-affiliations.component.html',
    styleUrls: ['./discounts-affiliations.component.css']
})
export class DiscountsAffiliationsComponent implements OnInit{
    discountsAffiliations!: FormGroup
    isCoastChecked:boolean = false;
    isNeighborChecked:boolean = false;
    isAAAChecked:boolean = false;
    isARVCChecked:boolean = false;
    isMilitaryChecked:boolean = false;
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

    checkBoxCoastChange(cb:any) {
        this.isCoastChecked = !this.isCoastChecked;
    }
    checkBoxNeighborChange(cb:any) {
        this.isNeighborChecked = !this.isNeighborChecked;
    }
    checkBoxAAAChange(cb:any) {
        this.isAAAChecked = !this.isAAAChecked;
    }
    checkBoxMilitaryChange(cb:any) {
        this.isMilitaryChecked = !this.isMilitaryChecked;
    }
    checkBoxARVCChange(cb:any) {
        this.isARVCChecked = !this.isARVCChecked;
    }

}