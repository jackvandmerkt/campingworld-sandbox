import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'discounts-affiliations',
    templateUrl: './discounts-affiliations.component.html',
    styleUrls: ['./discounts-affiliations.component.css']
})
export class DiscountsAffiliationsComponent {
    isCoastChecked:boolean = false;
    isNeighborChecked:boolean = false;
    isAAAChecked:boolean = false;
    isARVCChecked:boolean = false;
    isMilitaryChecked:boolean = false;
    submitted: boolean = false;
    constructor(private formBuilder: FormBuilder) {

    }

    discountsAffiliations = this.formBuilder.group({
        toggleAAA: false,
        toggleMilitary: false,
        affiliation: ['', Validators.required],
        toggleARVC: false,
        stateProvAffiliation: ['', Validators.required],
        toggleGoodNeighbor: false,
        goodNeighborParkNum: ['', Validators.required],
        toggleCoast: false,
        coastToCoastMembershipNum: ['', Validators.required]
      });

      get f() { return this.discountsAffiliations.controls; }
    
    onSubmit(): void {
        this.submitted = true;
        if(this.discountsAffiliations.valid) {
            console.log(this.discountsAffiliations.value);
        } else {
            console.log('not valid');
            return;
        }
    }
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