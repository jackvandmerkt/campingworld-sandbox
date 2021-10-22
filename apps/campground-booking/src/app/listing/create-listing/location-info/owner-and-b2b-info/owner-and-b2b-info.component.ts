import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'owner-and-b2b-info',
  templateUrl: './owner-and-b2b-info.component.html',
  styleUrls: ['./owner-and-b2b-info.component.css']
})
export class OwnerAndB2bInfoComponent implements OnInit {
  newOwner = false;
  parkForSale = false;
  allRefsTmp:any;
  allRefsObj: any = {};
  countriesFromService: any = {};
  listStatesFromService: any = {};
  b2bCommSourcesFromService: any = {};
  droppedAffiliationFromService: any = {};
  advertisingObjectionsFromService: any = {};
  uniqueAccountsFromService: any = {};



  constructor(private formBuilder: FormBuilder) { }

  ownerAndB2bInfo = this.formBuilder.group({
    newOwner: false,
    parkForSale: false,
    mailingAddress: this.formBuilder.group({
      address: '',
      city: '',
      province: '',
      listStateId: '',
      zip: '',
      countryId: ''

    }),
    otherMailingAddress: this.formBuilder.group({
      address: '',
      city: '',
      province: '',
      listStateId: '',
      zip: '',
      countryId: ''
    }),
    name: '',
    email: '',
    phone: '',
    adDecisionMaker: '',
    b2BCommEmailSourceId: '',
    b2BCommEmailIfOther: '',
    b2BCommMailSourceId: '',
    objectionReasonId: '',
    droppedAffiliationReasonId: '',
    uniqueAccountId: '',
  })

  ngOnInit(): void {
    this.getFormDropDownData();
  }

  onSubmit(): void {
    const formValidators = [
      this.ownerEmailRequired,
      this.invalidEmail
    ]
    let invalidValidators = 0
    formValidators.forEach(invalid => { if (invalid == true) invalidValidators++ })
    if (invalidValidators == 0) {
      console.log(this.ownerAndB2bInfo.value)
    } else {
      console.log('not valid')
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
