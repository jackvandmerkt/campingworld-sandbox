import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'good-sam-park',
    templateUrl: './good-sam-park.component.html',
    styleUrls: ['./good-sam-park.component.css']
})
export class GoodSamParkComponent {
    is2021Checked:boolean = false;
    isRenewChecked:boolean = false;
    isNewChecked:boolean = false;

    constructor(private formBuilder: FormBuilder) {

    }

   // form object
    goodSamPark = this.formBuilder.group({
        numbersOfSigns: '',
        numbersOfFlags: '',
        toggle2021: false,
        toggleRenew: false,
        toggleNew: false,
        goodSamAgisNumber: '',
        goodSamParkHistory: ''
    });

    onSubmit(): void {
        console.log(this.goodSamPark.value);
    }

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