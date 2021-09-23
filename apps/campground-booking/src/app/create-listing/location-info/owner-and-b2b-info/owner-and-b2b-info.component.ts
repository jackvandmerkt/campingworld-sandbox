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
    name: '',
    email: '',
    phone: '',
    adDecisionMaker: '',
    b2BCommEmailIfOther: '',
    b2BCommMailSourceId: '',
    objectionReasonId: '',
    droppedAffiliationReasonId: '',
    uniqueAccountId: '',
  })

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
    console.log('form', this.ownerAndB2bInfo.value)
  }

}
