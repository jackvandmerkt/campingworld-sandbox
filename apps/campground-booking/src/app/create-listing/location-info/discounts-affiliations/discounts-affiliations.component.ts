import { Component, OnInit } from "@angular/core";
import { FormGroup, FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';

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
    constructor(private formBuilder: FormBuilder) {

    }

    discountsAffiliations = this.formBuilder.group({
        toggleAAA: false,
        toggleMilitary: false,
        affiliation: '',
        toggleARVC: false,
        stateProvAffiliation: '',
        toggleGoodNeighbor: false,
        goodNeighborParkNum: '',
        toggleCoast: false,
        coastToCoastMembershipNum: ''
      });
    
    onSubmit(): void {
        console.log(this.discountsAffiliations.value);
    }
    clearChanges() {
        this.discountsAffiliations.reset();
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