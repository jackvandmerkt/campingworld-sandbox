import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder } from '@angular/forms';
import { IAffiliations, IListStates } from "../../../../shared/listing-counts.model";
import { ListingService } from "../../../../shared/listing.service";

@Component({
    selector: 'discounts-affiliations',
    templateUrl: './discounts-affiliations.component.html',
    styleUrls: ['./discounts-affiliations.component.css']
})
export class DiscountsAffiliationsComponent implements OnInit{
    allRefsTmp:any;
    allRefsObj: any = {};
    affiliationsFromService: any = {};
    listStatesFromService: any = {};
    // affiliationsFromService!: IAffiliations[];
    isCoastChecked:boolean = false;
    isNeighborChecked:boolean = false;
    isAAAChecked:boolean = false;
    isARVCChecked:boolean = false;
    isMilitaryChecked:boolean = false;
    submitted: boolean = false;

    goodNeighborParkNum: number = 1234;
    constructor(private formBuilder: FormBuilder, private ls: ListingService) {

    }

    discountsAffiliations = this.formBuilder.group({
        toggleAAA: false,
        toggleMilitary: false,
        affiliation: ['', Validators.required],
        toggleARVC: false,
        stateProvAffiliation: ['', Validators.required],
        toggleGoodNeighbor: false,
        goodNeighborParkNum: [{value: this.goodNeighborParkNum, disabled: true}, Validators.required],
        toggleCoast: false,
        coastToCoastMembershipNum: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
      });

    ngOnInit() {
        this.getFormDropDownData();
    }
    
    onSubmit(): void {
        this.submitted = true;
        if(this.discountsAffiliations.valid) {
            console.log(this.discountsAffiliations.value);
        } else {
            console.log('not valid');
            return;
        }
    }
    get f() { return this.discountsAffiliations.controls; }
    
    clearChanges() {
        this.discountsAffiliations.reset();
        this.submitted = false;
        //resetting toggle text to no
        this.isCoastChecked = false;
        this.isNeighborChecked = false;
        this.isAAAChecked = false;
        this.isARVCChecked = false;
        this.isMilitaryChecked = false;
    }

    getFormDropDownData() {
        this.allRefsTmp = window.localStorage.getItem('all-refs');
        this.allRefsObj = JSON.parse(this.allRefsTmp);
        console.log(this.allRefsObj)
        for(let [key, value] of Object.entries(this.allRefsObj)) {
            if(key === 'affiliations') {
                this.affiliationsFromService = value;
            }
            if(key === 'listStates') {
                this.listStatesFromService = value;
            }
        }
    }

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