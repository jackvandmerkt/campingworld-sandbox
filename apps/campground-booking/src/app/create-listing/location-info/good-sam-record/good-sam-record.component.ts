import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: 'good-sam-record',
    templateUrl: './good-sam-record.component.html',
    styleUrls: ['./good-sam-record.component.css']
})

export class GoodSamRecordFormComponent {
    isGuestsChecked:boolean = false;
    isDeleteChecked:boolean = false;
    constructor(private formBuilder: FormBuilder) {

    }

    goodSamRecordForm = this.formBuilder.group({
        parkName: '',
        fileNum: '',
        sectionCode: '',
        repCode: '',
        listCity: '',
        listState: '',
        territory: '',
        listType: '',
        parkType: '',
        toggleGuests: false,
        toggleDelete: false
      });
    
    onSubmit(): void {
        console.log(this.goodSamRecordForm.value);
    }
    clearChanges() {
        this.goodSamRecordForm.reset();
        //resetting toggle text to no
        this.isGuestsChecked = false;
        this.isDeleteChecked = false;
    }

    checkBoxGuestsChange(cb:any) {
        this.isGuestsChecked = !this.isGuestsChecked;
    }
    checkBoxDeleteChange(cb:any) {
        this.isDeleteChecked = !this.isDeleteChecked;
    }
}