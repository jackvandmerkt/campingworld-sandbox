import { Component } from "@angular/core";

@Component({
    selector: 'good-sam-record',
    templateUrl: './good-sam-record.component.html',
    styleUrls: ['./good-sam-record.component.css']
})

export class GoodSamRecordFormComponent {
    isGuestsChecked:boolean = false;
    isDeleteChecked:boolean = false;
    constructor() {

    }

    checkBoxGuestsChange(cb:any) {
        this.isGuestsChecked = !this.isGuestsChecked;
    }
    checkBoxDeleteChange(cb:any) {
        this.isDeleteChecked = !this.isDeleteChecked;
    }
}