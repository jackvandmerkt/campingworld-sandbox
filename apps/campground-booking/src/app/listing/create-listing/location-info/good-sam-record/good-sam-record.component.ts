import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { IAllRefs, IListingTypes, IListStates, IParkTypes, ISectionCodes, ITerritories } from "../../../../shared/listing-counts.model";
import { ListingService } from "../../../../shared/listing.service";
import { ListingNavService } from "../../../../shared/listing-nav.service";

@Component({
    selector: 'good-sam-record',
    templateUrl: './good-sam-record.component.html',
    styleUrls: ['./good-sam-record.component.css']
})

export class GoodSamRecordFormComponent implements OnInit{
    isGuestsChecked:boolean = false;
    isDeleteChecked:boolean = false;
    isSalesPresentationChecked:boolean = false;
    isDuplicateSelected: boolean = false;
    submitted: boolean = false;
    allRefsTmp:any;
    allRefsObj!: IAllRefs[];
    territoriesFromService: any = {};
    sectionCodesFromService: any = {};
    listStatesFromService: any = {};
    listingTypesFromService: any = {};
    parkTypesFromService: any = {};

    // temporary number, will use getter method to pull this number from api in the future
    newListingTmp:any;
    newListingObj: any = {};
    fileNum:any = 0;
    repCode:number = 0;
    parkName:any;

    // @Output() formStatus = new EventEmitter<any>();

    constructor(private formBuilder: FormBuilder, private ls: ListingService,
         private store: Store<any>, private listingNavService: ListingNavService) {}

    ngOnInit() {
        this.getFormDropDownData();
        this.newListingTmp = window.localStorage.getItem('new-listing');
        this.newListingObj = JSON.parse(this.newListingTmp);
        for(let [key, value] of Object.entries(this.newListingObj)) {
            if(key === 'fileNumber') {
                this.fileNum = value;
                this.goodSamRecordForm.patchValue({fileNumber: this.fileNum})
            }
            if(key === 'locationListingName') {
                this.parkName = value;
                this.goodSamRecordForm.patchValue({locationListingName: this.parkName})
            }
        }
        this.store.select('users').subscribe(
            users => {
                if (users) {
                this.repCode = users.userReducer.currentUser.repCode;
                this.goodSamRecordForm.patchValue({repCode: this.repCode})
                }
            });


    }

    getFormDropDownData() {
        this.allRefsTmp = window.localStorage.getItem('all-refs');
        this.allRefsObj = JSON.parse(this.allRefsTmp);
        console.log(this.allRefsObj)
        for(let [key, value] of Object.entries(this.allRefsObj)) {
            if(key === 'territories') {
                this.territoriesFromService = value;
            }
            if(key === 'sectionCodes') {
                this.sectionCodesFromService = value;
            }
            if(key === 'listStates') {
                this.listStatesFromService = value;
            }
            if(key === 'listingTypes') {
                this.listingTypesFromService = value;
            }
            if(key === 'parkTypes') {
                this.parkTypesFromService = value;
            }
        }
    }

    goodSamRecordForm = this.formBuilder.group({
        locationListingName: ['', [Validators.required, Validators.maxLength(255)]],
        fileNumber: [{value: this.fileNum, disabled: true},  Validators.required],
        sectionCodeId: ['', Validators.required],
        repCode: [{value: this.repCode, disabled: true}, Validators.required],
        listTypeId: ['', Validators.required],
        parkTypeId: ['', Validators.required],
        duplicateListingText: [''],
        primaryFileNumber: [''],
        listCity: ['', [Validators.required, Validators.maxLength(255)]],
        listStateId: ['', Validators.required],
        territoryId: ['', Validators.required],
        salesPresentationRequired: false,
        noOvernightGuests: false,
        deleteListing: false,
        reasonForDelete: ['']
      });

    sendFormStatus(value: any) {
        this.listingNavService.updateFormStatus(value)
    }
    
    onSubmit(): void {
        this.submitted = true;
        if(this.goodSamRecordForm.valid) {
            console.log(this.goodSamRecordForm.value);
            this.sendFormStatus(['goodSamRecordFormStatus', 2]);
        } else {
            console.log('not valid');
            this.sendFormStatus(['goodSamRecordFormStatus', 1]);
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
        this.isSalesPresentationChecked = false;
        this.sendFormStatus(['goodSamRecordFormStatus', 0]);
    }

    checkBoxSalesPresentationChange(cb:any) {
        this.isSalesPresentationChecked = !this.isSalesPresentationChecked;
    }
    checkBoxGuestsChange(cb:any) {
        this.isGuestsChecked = !this.isGuestsChecked;
    }
    checkBoxDeleteChange(cb:any) {
        this.isDeleteChecked = !this.isDeleteChecked;
        if (this.isDeleteChecked === true) {
            this.goodSamRecordForm.get('reasonForDelete')?.setValidators([Validators.required])
            this.goodSamRecordForm.get('reasonForDelete')?.updateValueAndValidity()
        } else {
            this.goodSamRecordForm.get('reasonForDelete')?.clearValidators()
            this.goodSamRecordForm.get('reasonForDelete')?.updateValueAndValidity()
        }
    }

    onChange(event:any): void {
        const newVal = event.target.value;
        if(newVal == 4) {
            this.isDuplicateSelected = true;
            this.goodSamRecordForm.get('duplicateListingText')?.setValidators([Validators.required])
            this.goodSamRecordForm.get('primaryFileNumber')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.goodSamRecordForm.get('duplicateListingText')?.updateValueAndValidity()
            this.goodSamRecordForm.get('primaryFileNumber')?.updateValueAndValidity()
        } else {
            this.isDuplicateSelected = false;
            this.goodSamRecordForm.get('duplicateListingText')?.clearValidators()
            this.goodSamRecordForm.get('primaryFileNumber')?.clearValidators()
            this.goodSamRecordForm.get('duplicateListingText')?.updateValueAndValidity()
            this.goodSamRecordForm.get('primaryFileNumber')?.updateValueAndValidity()
        }
    }
}