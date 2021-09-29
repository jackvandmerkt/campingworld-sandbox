import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  isSameAsMailingAddress = true;
  isUTMChecked = false;

  constructor(private formBuilder: FormBuilder) {

  }

  contactInfoForm = this.formBuilder.group({
    mailingAddress: this.formBuilder.group({
      address: '',
      city: '',
      listStateId: 0,
      zip: '',
      countryId: 0
    }),
    physicalAddress: this.formBuilder.group({
      address: '',
      city: '',
      listStateId: 0,
      zip: '',
      countryId: 0,
      latitude: '',
      longitude: '',
      elevation: ''
    }),
    latitude: '',
    longitude: '',
    elevation: '',
    email: '',
    telephone: '',
    repressedTelephone: '',
    webAddress: '',
    onlineWeb: '',
    skipUtm: false,
    facebook: '',
    twitter: '',
    pinterest: '',
    instagram: '',
  });

  ngOnInit(): void {
    this.isSameAsMailingAddress = false
    console.log(this.contactInfoForm.value)
  }

  checkBoxUTMChange(cb: any) {
    this.isUTMChecked = !this.isUTMChecked;
  }

  clearChanges() {
    this.contactInfoForm.reset()
  }


  onSubmit(): void {
    console.log(this.contactInfoForm.value);
  }

}
