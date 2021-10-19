import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { IListingTypes, IListStates, IParkTypes, ISectionCodes, ITerritories } from "../../../../shared/listing-counts.model";
import { ListingService } from "../../../../shared/listing.service";

@Component({
    selector: 'good-sam-record',
    templateUrl: './good-sam-record.component.html',
    styleUrls: ['./good-sam-record.component.css']
})

export class GoodSamRecordFormComponent implements OnInit{
    isGuestsChecked:boolean = false;
    isDeleteChecked:boolean = false;
    submitted: boolean = false;
    territoriesFromService!: ITerritories[];
    sectionCodesFromService!: ISectionCodes[];
    listStatesFromService!: IListStates[];
    listingTypesFromService!: IListingTypes[];
    parkTypesFromService!: IParkTypes[];

    // temporary number, will use getter method to pull this number from api in the future
    fileNum:number = 0;
    repCode:number = 0;
    constructor(private formBuilder: FormBuilder, private ls: ListingService, private store: Store<any>) {

    }
    ngOnInit() {
        this.getFormDropDownData();

        this.store.select('listing-info').subscribe(
            data => {
              if (data) {
                this.fileNum = data.listingReducer.newListing.fileNumber
                this.goodSamRecordForm.patchValue({fileNum: this.fileNum})
              }
            });
        this.store.select('users').subscribe(
            users => {
                if (users) {
                this.repCode = users.userReducer.currentUser.repCode;
                this.goodSamRecordForm.patchValue({repCode: this.repCode})
                }
            });


    }

    getFormDropDownData() {
        this.ls.getTerritories().subscribe(response => {
            this.territoriesFromService = response;
        });

        this.ls.getListingTypes().subscribe(response => {
            this.listingTypesFromService = response;
        });

        this.ls.getListStates().subscribe(response => {
            this.listStatesFromService = response;
        });

        this.ls.getParkTypes().subscribe(response => {
            this.parkTypesFromService = response;
        });

        this.ls.getSectionCodes().subscribe(response => {
            this.sectionCodesFromService = response;
        });

    }

    goodSamRecordForm = this.formBuilder.group({
        parkName: ['', [Validators.required, Validators.maxLength(255)]],
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