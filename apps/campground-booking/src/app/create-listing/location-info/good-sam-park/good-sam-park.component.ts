import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'good-sam-park',
    templateUrl: './good-sam-park.component.html',
    styleUrls: ['./good-sam-park.component.css']
})
export class GoodSamParkComponent {
    goodSamPark!: FormGroup;
    is2021Checked:boolean = false;
    isRenewChecked:boolean = false;
    isNewChecked:boolean = false;

    constructor() {

    }

    ngOnInit() {
        this.goodSamPark = new FormGroup({
            numbersOfSigns: new FormControl(''),
            numbersOfFlags: new FormControl(''),
            toggle2021: new FormControl(''),
            toggleRenew: new FormControl(''),
            toggleNew: new FormControl(''),
            goodSamAgisNumber: new FormControl(''),
            goodSamParkHistory: new FormControl('')
        });
    };

    checkBox2021Change(cb:any) {
        this.is2021Checked = !this.is2021Checked;
    }
    checkBoxRenewChange(cb:any) {
        this.isRenewChecked = !this.isRenewChecked;
    }
    checkBoxNewChange(cb:any) {
        this.isNewChecked = !this.isNewChecked;
    }
    
}