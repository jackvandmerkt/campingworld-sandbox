import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'owner-and-b2b-info',
  templateUrl: './owner-and-b2b-info.component.html',
  styleUrls: ['./owner-and-b2b-info.component.css']
})
export class OwnerAndB2bInfoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  newOwner = false
  parkForSale = false


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

  ngOnInit(): void {
  }


  clearChanges(): void {
    this.ownerAndB2bInfo.reset()
    this.newOwner = false
    this.parkForSale = false
  }

  newOwnerChange(cb: any) {
    this.newOwner = !this.newOwner;
  }
  parkForSaleChange(cb: any) {
    this.parkForSale = !this.parkForSale;
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

}
