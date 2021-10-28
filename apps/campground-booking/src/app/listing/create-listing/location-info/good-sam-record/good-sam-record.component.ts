import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { IAllRefs } from "../../../../shared/listing-counts.model";
import { ListingService } from "../../../../shared/listing.service";
import { ListingNavService } from "../../../../shared/listing-nav.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'good-sam-record',
    templateUrl: './good-sam-record.component.html',
    styleUrls: ['./good-sam-record.component.css']
})

export class GoodSamRecordFormComponent implements OnInit, AfterViewInit{
    isGuestsChecked:boolean = false;
    isDeleteChecked:boolean = false;
    isSalesPresentationChecked:boolean = false;
    isDuplicateSelected: boolean = false;
    isMembershipParkSelected: boolean = false;
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
    fileNumParam:any;
    repCode:number = 0;
    parkName:any;
    postResponse:any;
    currentListing:any= {};

    @ViewChild('sectionCodeId') private sectionCodeCSS!: ElementRef;
    @ViewChild('parkTypeId') private parkTypeIdCSS!: ElementRef;
    @ViewChild('listingTypeId') private listingTypeCSS!: ElementRef;
    @ViewChild('listStateId') private listingStateCSS!: ElementRef;
    @ViewChild('territoryId') private territoryCSS!: ElementRef;

    constructor(private formBuilder: FormBuilder, private ls: ListingService,
         private store: Store<any>, private listingNavService: ListingNavService, private route: ActivatedRoute) {}
    
    goodSamRecordForm = this.formBuilder.group({
        locationListingName: [null, [Validators.required, Validators.maxLength(255)]],
        fileNumber: [{value: this.fileNum},  Validators.required],
        sectionCodeId: [null, Validators.required],
        repCode: [{value: this.repCode}, Validators.required],
        listingTypeId: [null, Validators.required],
        parkTypeId: [null, Validators.required],
        duplicateListingText: null,
        primaryFileNumber: null,
        listCity: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
        listStateId: [null, Validators.required],
        territoryId: [null, Validators.required],
        salesPresentationRequired: false,
        noOvernightGuests: false,
        deleteListing: false,
        reasonForDelete: [null]
    });
    
    ngOnInit() {
        this.route.snapshot.paramMap.get('filenumber');
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
        this.currentListing = this.route.snapshot.data['data'];
        if (this.currentListing != null) {
            this.goodSamRecordForm.patchValue({
                sectionCodeId: this.currentListing.sectionCodeId,
                listingTypeId: this.currentListing.listingTypeId,
                parkTypeId: this.currentListing.parkTypeId,
                listCity: this.currentListing.listCity,
                listStateId: this.currentListing.listStateId,
                territoryId: this.currentListing.territoryId,
                noOvernightGuests: this.currentListing.noOvernightGuests,
                salesPresentationRequired: this.currentListing.salesPresentationRequired,
                deleteListing: this.currentListing.deleteListing,
                duplicateListingText:this.currentListing.duplicateListingText,
                primaryFileNumber: this.currentListing.primaryFileNumber
            });
            if(this.currentListing.listingTypeId == 4){
                this.isDuplicateSelected = true;
            }
            if(this.currentListing.noOvernightGuests == true){
                this.isGuestsChecked = true;
            }
            if(this.currentListing.salesPresentationRequired == true){
                this.isSalesPresentationChecked = true;
            }
            if(this.currentListing.deleteListing == true){
                this.isDeleteChecked = true;
            }
        }
    }

    ngAfterViewInit() {
        this.setAttributes();
    }

    onSubmit(): void {
        this.submitted = true;
        if(this.goodSamRecordForm.valid) {
            console.log(this.goodSamRecordForm.value);
            this.postForm();
            
            this.sendFormStatus(['goodSamRecordFormStatus', 2]);
        } else {
            console.log('not valid');
            this.sendFormStatus(['goodSamRecordFormStatus', 1]);
            return;
        }
    }
    get f() { return this.goodSamRecordForm.controls; }
    clearChanges(){
        this.submitted = false;
        if (this.currentListing != null) {
            this.goodSamRecordForm.patchValue({
                sectionCodeId: this.currentListing.sectionCodeId,
                listingTypeId: this.currentListing.listingTypeId,
                parkTypeId:this.currentListing.parkTypeId,
                listCity: this.currentListing.listCity,
                listStateId: this.currentListing.listStateId,
                territoryId: this.currentListing.territoryId,
                noOvernightGuests: this.currentListing.noOvernightGuests,
                salesPresentationRequired: this.currentListing.salesPresentationRequired,
                deleteListing: this.currentListing.deleteListing,
                duplicateListingText: this.currentListing.duplicateListingText,
                primaryFileNumber: this.currentListing.primaryFileNumber,
                reasonForDelete: null
            }); 
            if(!this.currentListing.noOvernightGuests){
                this.isGuestsChecked = false;
            } else{
                this.isGuestsChecked = true;
            }
            if(!this.currentListing.salesPresentationRequired){
                this.isSalesPresentationChecked = false;
            } else{
                this.isSalesPresentationChecked = true;
            }
            if(!this.currentListing.deleteListing){
                this.isDeleteChecked = false;
            } else{
                this.isDeleteChecked = true;
            }
        } else {
            this.goodSamRecordForm.reset({
                locationListingName: this.parkName, fileNumber: this.fileNum, repCode: this.repCode, sectionCodeId: null, 
                listingTypeId: null, parkTypeId: null, listCity: null, listStateId: null, territoryId: null, noOvernightGuests: null, 
                salesPresentationRequired: null, deleteListing: null, duplicateListingText: null, primaryFileNumber: null, reasonForDelete: null
            });
            this.isGuestsChecked = false;
            this.isSalesPresentationChecked = false;
            this.isDeleteChecked = false;
            this.isDuplicateSelected = false;
            this.isMembershipParkSelected = false;
            this.setAttributes();
        }
    }
    getFormDropDownData() {
        this.allRefsTmp = window.localStorage.getItem('all-refs');
        this.allRefsObj = JSON.parse(this.allRefsTmp);
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
    setAttributes(){
        if (this.currentListing != null) {
            for(let [key, value] of Object.entries(this.currentListing)) {
                if(key === 'sectionCodeId') {
                    this.sectionCodeCSS.nativeElement.setAttribute('value', value) 
                }
                if(key === 'listingTypeId') {
                    this.listingTypeCSS.nativeElement.setAttribute('value', value)
                }
                if(key === 'parkTypeId') {
                    this.parkTypeIdCSS.nativeElement.setAttribute('value', value)
                }
                if(key === 'listStateId') {
                    this.listingStateCSS.nativeElement.setAttribute('value',value)
                }
                if(key === 'territoryId') {
                    this.territoryCSS.nativeElement.setAttribute('value', value)
                }
            }
        } else {
            this.sectionCodeCSS.nativeElement.setAttribute('value', null)
            this.listingTypeCSS.nativeElement.setAttribute('value', null)
            this.parkTypeIdCSS.nativeElement.setAttribute('value', null)
            this.listingStateCSS.nativeElement.setAttribute('value',null)
            this.territoryCSS.nativeElement.setAttribute('value', null)
        }  
    }
    sendFormStatus(value: any) {
        this.listingNavService.updateFormStatus(value)
    }
    postForm() {
        this.ls.postGoodSamRecordId(this.goodSamRecordForm.value, this.fileNum).subscribe(response => {
          if(response){
            this.postResponse = response;
            console.log(this.postResponse);
          }
        })
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
            this.goodSamRecordForm.controls['reasonForDelete'].reset()
        }
    }
    //Jack todo - change if conditional
    onChangeListingType(event:any): void {
        const newVal = event.target.value;
        console.log(newVal)
        if(newVal == '4: 4') {
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
            this.goodSamRecordForm.controls['duplicateListingText'].reset()
            this.goodSamRecordForm.controls['primaryFileNumber'].reset()
        }
    }

    onChangeParkType(event:any): void {
        const newVal = event.target.value;
        console.log(newVal)
        if(newVal == '6: 6') {
            this.isMembershipParkSelected = true;
        } else {
            this.isMembershipParkSelected = false;
        }
    }
}