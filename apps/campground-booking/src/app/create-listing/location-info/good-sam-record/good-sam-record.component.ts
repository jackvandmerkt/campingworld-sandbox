import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ListingService } from "../../../shared/listing.service";

@Component({
    selector: 'good-sam-record',
    templateUrl: './good-sam-record.component.html',
    styleUrls: ['./good-sam-record.component.css']
})

export class GoodSamRecordFormComponent implements OnInit{
    isGuestsChecked:boolean = false;
    isDeleteChecked:boolean = false;
    submitted: boolean = false;
    territories:any = [];
    // temporary number, will use getter method to pull this number from api in the future
    fileNum:any = '1230405060';
    repCode:any = '101010';
    constructor(private formBuilder: FormBuilder, private ls: ListingService) {

    }
    ngOnInit() {
        this.getTerritoriesDropdownData();
    }

    getTerritoriesDropdownData() {
        this.ls.getTerritories().subscribe(data => {
            if(data) {
                this.territories = data;
            }
        });
    }

    goodSamRecordForm = this.formBuilder.group({
        parkName: ['', Validators.required],
        fileNum: [{value: this.fileNum, disabled: true},  Validators.required],
        sectionCode: ['', Validators.required],
        repCode: [{value: this.repCode, disabled: true}, Validators.required],
        listCity: ['', [Validators.required, Validators.maxLength(255)]],
        listState: ['', Validators.required],
        territory: ['', Validators.required],
        listType: ['', Validators.required],
        parkType: ['', Validators.required],
        toggleGuests: false,
        toggleDelete: false
      });
    
    onSubmit(): void {
        this.submitted = true;
        if(this.goodSamRecordForm.valid) {
            console.log(this.goodSamRecordForm.value);
        } else {
            console.log('not valid');
            return;
        }
    }
    
    get f() { return this.goodSamRecordForm.controls; }

    clearChanges() {
        this.goodSamRecordForm.reset();
        this.submitted = false;
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