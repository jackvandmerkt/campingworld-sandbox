import {  AfterViewInit, Component,ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { IAllRefs } from 'apps/campground-booking/src/app/shared/listing.model';
import { ListingService } from 'apps/campground-booking/src/app/shared/listing.service';
import { ListingNavService } from "../../../../shared/listing-nav.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'owner-and-b2b-info',
  templateUrl: './owner-and-b2b-info.component.html',
  styleUrls: ['./owner-and-b2b-info.component.css']
})
export class OwnerAndB2bInfoComponent implements OnInit, AfterViewInit {
  newOwner = false;
  parkForSale = false;
  allRefsTmp:any;
  allRefsObj!: IAllRefs[];
  countriesFromService: any = {};
  listStatesFromService: any = {};
  b2bCommSourcesFromService: any = {};
  droppedAffiliationFromService: any = {};
  advertisingObjectionsFromService: any = {};
  uniqueAccountsFromService: any = {};
  fileNum:any = 0;
  currentOwnerAndBNBInfo:any = {};
  ownerAndBNBPostObj:any = {};
  postResponse:any = {};

  @ViewChild('listStateId') private listStateIdCSS!:ElementRef;
  @ViewChild('countryId') private countryIdCSS!:ElementRef;
  @ViewChild('ownerGroup') private ownerGroupCSS!:ElementRef;
  @ViewChild('b2BCommEmailSourceId') private b2BCommEmailSourceIdCSS!:ElementRef;
  @ViewChild('b2BCommMailSourceId') private b2BCommMailSourceIdCSS!:ElementRef;
  @ViewChild('objectionReasonId') private objectionReasonIdCSS!:ElementRef;
  @ViewChild('droppedAffiliationReasonId') private droppedAffiliationReasonIdCSS!:ElementRef;
  @ViewChild('uniqueAccountId') private uniqueAccountIdCSS!:ElementRef;

  constructor(private formBuilder: FormBuilder,private ls: ListingService, private listingNavService: ListingNavService,
    private route:ActivatedRoute) { 

    }

  ownerAndB2bInfo = this.formBuilder.group({
    newOwner: false,
    parkForSale: false,
    name: null,
    mailingAddress: this.formBuilder.group({
      street1: null,
      city: '',
      listStateId: null,
      zip: null,
      countryId: null

    }),
    email: null,
    phone: null,
    adDecisionMaker: null,
    b2BCommEmailSourceId: null,
    b2BCommEmailIfOther: null,
    b2BCommMailSourceId: null,
    b2bCommAddressIfOther: this.formBuilder.group({
      street1:null,
      city: null,
      listStateId: null,
      zip: null,
      countryId: null
    }),
    objectionReasonId: null,
    droppedAffiliationReasonId: null,
    uniqueAccountId: null,
  })

  ngOnInit(): void {
    this.fileNum = this.route.snapshot.paramMap.get('fileNumber');
    this.getFormDropDownData();
    this.currentOwnerAndBNBInfo = this.route.snapshot.data['data'];
  }
  ngAfterViewInit() {
    this.setAttributes();
}

  onSubmit(): void {
    const formValidators = [
      this.ownerEmailRequired,
      this.invalidEmail
    ]
    let invalidValidators = 0
    formValidators.forEach(invalid => { if (invalid == true) invalidValidators++ })
     // add formaname .valid to this if -- recreation example
    if (invalidValidators == 0) {
      console.log(this.ownerAndB2bInfo.value);
      this.postForm();
      this.sendFormStatus(['ownerB2BInfoFormStatus', 2]);
    } else {
      console.log('not valid')
      this.sendFormStatus(['ownerB2BInfoFormStatus', 1]);
    }
  }

  clearChanges(): void {
    this.ownerAndB2bInfo.reset()
    this.newOwner = false
    this.parkForSale = false
  }

  getFormDropDownData() {
    this.allRefsTmp = window.localStorage.getItem('all-refs');
    this.allRefsObj = JSON.parse(this.allRefsTmp);
    console.log(this.allRefsObj)
    for(let [key, value] of Object.entries(this.allRefsObj)) {
      if(key === 'listStates') {
          this.listStatesFromService = value;
      }
      if(key === 'droppedAffiliationReasons') {
        this.droppedAffiliationFromService = value;
      }
      if(key === 'advertisingObjections') {
        this.advertisingObjectionsFromService = value;
      }
      if(key === 'b2bCommSources') {
        this.b2bCommSourcesFromService = value;
        console.log(this.b2bCommSourcesFromService)
      }
      if(key === 'countries') {
        this.countriesFromService = value;
      }
      if(key === 'uniqueAccounts') {
        this.uniqueAccountsFromService = value;
      }
    }
  }
  setAttributes(){
    if(this.currentOwnerAndBNBInfo != null){
      for(let [key,value]of Object.entries(this.currentOwnerAndBNBInfo.mailingAddress)){
        if(key === 'countryId'){
          this.countryIdCSS.nativeElement.setAttribute('value', value)
        }
        if(key === 'listStateId'){
          this.listStateIdCSS.nativeElement.setAttribute('value', value)
        }
        if(key === 'b2BCommEmailSourceId'){
          this.b2BCommEmailSourceIdCSS.nativeElement.setAttribute('value', value)
        }
        if(key === 'b2BCommMailSourceId'){
          this.b2BCommMailSourceIdCSS.nativeElement.setAttribute('value', value)
        }
        if(key === 'objectionReasonIdCSS'){
          this.objectionReasonIdCSS.nativeElement.setAttribute('value', value)
        }
        if(key === 'droppedAffiliationReasonId'){
          this.droppedAffiliationReasonIdCSS.nativeElement.setAttribute('value', value)
        }
        if(key === 'uniqueAccountId'){
          this.uniqueAccountIdCSS.nativeElement.setAttribute('value', value)
        }
      }
      this.ownerGroupCSS.nativeElement.setAttribute('value', null)
    }
    else {
      this.countryIdCSS.nativeElement.setAttribute('value', null)
      this.listStateIdCSS.nativeElement.setAttribute('value', null)
      this.ownerGroupCSS.nativeElement.setAttribute('value', null)
      this.b2BCommEmailSourceIdCSS.nativeElement.setAttribute('value', null)
      this.b2BCommMailSourceIdCSS.nativeElement.setAttribute('value', null)
      this.objectionReasonIdCSS.nativeElement.setAttribute('value', null)
      this.droppedAffiliationReasonIdCSS.nativeElement.setAttribute('value', null)
      this.uniqueAccountIdCSS.nativeElement.setAttribute('value', null)
    }  
  }
  sendFormStatus(value: any) {
    this.listingNavService.updateFormStatus(value)
  }
  postForm(){
    this.ownerAndBNBPostObj = this.ownerAndB2bInfo.value;
    for(let [key,value] of Object.entries(this.ownerAndBNBPostObj)){
      if(value === false) {
        this.ownerAndBNBPostObj[key] = 'f';
      }
        if(value === true) {
            this.ownerAndBNBPostObj[key] = 't';
      }
    }
    console.log(this.ownerAndBNBPostObj)
    this.ls.postOwnerAndB2BInfo(this.ownerAndBNBPostObj, this.fileNum).subscribe(response => {
      if(response){
        this.postResponse = response;
      }
    })
  }

  get ownerEmailRequired() {
    if (this.ownerAndB2bInfo.value.b2BCommEmailSourceId == '1' && this.ownerAndB2bInfo.value.b2BCommEmailIfOther == '') {
      return true
    } else { return false }
  }

  get invalidEmail() {
    const email = this.ownerAndB2bInfo.value.b2BCommEmailIfOther
    const validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return !validate.test(email)
  }

  newOwnerChange(cb: any) {
    this.newOwner = !this.newOwner;
  }
  parkForSaleChange(cb: any) {
    this.parkForSale = !this.parkForSale;
  }

}
