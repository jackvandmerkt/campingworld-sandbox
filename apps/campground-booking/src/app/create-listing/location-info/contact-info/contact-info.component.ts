import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {

  }

  contactInfoForm = this.formBuilder.group({
    latitude: '',
    longitude: '',
    elevation: '',
    email: '',
    telephone: '',
    repressedTelephone: '',
    webAddress: '',
    onlineWeb: '',
    skipUtm: '',
    facebook: '',
    twitter: '',
    pinterest: '',
    instagram: '',
  });

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  onSubmit(): void {
    console.log(this.contactInfoForm.value);
  }

}
