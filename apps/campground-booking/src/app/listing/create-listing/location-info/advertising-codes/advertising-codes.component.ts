import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'advertising-codes',
  templateUrl: './advertising-codes.component.html',
  styleUrls: ['./advertising-codes.component.css']
})
export class AdvertisingCodesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  advertisingCodes = this.formBuilder.group({
    cdAdv: '',
    cdAdHistory: '',
    extendedStayAdv: '',
    extendedStayListing: '',
    serviceAttractionAdv: '',
    serviceAttractionListing: '',
    basicPaidListing: '',
    onlineSeasonsListing: '',
    onlineRentalListing: '',
    seoDescriptionField1: '',
    seoDescriptionField2: '',
    seoDescriptionField3: '',
    seoDescriptionField4: '',
  })


  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('form', this.advertisingCodes.value)
  }


  clearChanges(): void {
    this.advertisingCodes.reset()
  }



}
