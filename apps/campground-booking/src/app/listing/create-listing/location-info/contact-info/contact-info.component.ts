import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import { ICountries, IListStates } from 'apps/campground-booking/src/app/shared/listing-counts.model';
import { ListingService } from 'apps/campground-booking/src/app/shared/listing.service';

@Component({
  selector: 'contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  listStatesFromService!: IListStates[];
  countriesFromService!: ICountries[];
  isSameAsMailingAddress = true;
  isUTMChecked = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private ls: ListingService) {

  }

  contactInfoForm = this.formBuilder.group({
    address: ['', [Validators.required]],
    city: ['', [Validators.required]],
    listStateId: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    countryId: ['', [Validators.required]],
    physicalAddress: ['', [Validators.required]],
    physicalCity: ['', [Validators.required]],
    physicalListStateId: ['', [Validators.required]],
    physicalZip: ['', [Validators.required]],
    physicalCountryId: ['', [Validators.required]],
    latitude: ['', [Validators.required, Validators.pattern("^(\\+|-)?((\\d((\\.)|\\.\\d{1,6})?)|(0*?[0-8]\\d((\\.)|\\.\\d{1,6})?)|(0*?90((\\.)|\\.0{1,6})?))$")]],
    longitude: ['', [Validators.required, Validators.pattern("^(\\+|-)?((\\d((\\.)|\\.\\d{1,6})?)|(0*?\\d\\d((\\.)|\\.\\d{1,6})?)|(0*?1[0-7]\\d((\\.)|\\.\\d{1,6})?)|(0*?180((\\.)|\\.0{1,6})?))$")]],
    elevation: ['', Validators.pattern("(250[1-9]|25[1-9][0-9]|2[6-9][0-9]{2}|[3-9][0-9]{3}|1[0-9]{4}|2[0-8][0-9]{3}|290[0-2][0-9]|2903[0-3])")],
    email: ['', [Validators.required, Validators.email]],
    telephone: '',
    repressedTelephone: '',
    webAddress: ['', Validators.pattern("^[A-Za-z][A-Za-z0-9.]*$")],
    onlineWeb: ['', Validators.pattern("^[A-Za-z][A-Za-z0-9.]*$")],
    skipUtm: false,
    facebook: ['', Validators.pattern("^[A-Za-z][A-Za-z0-9.]*$")],
    twitter: ['', Validators.pattern("^[A-Za-z][A-Za-z0-9.]*$")],
    pinterest: '',
    instagram: '',
  });

  ngOnInit(): void {
    this.isSameAsMailingAddress = false
    this.ls.getListStates().subscribe(response => {
      this.listStatesFromService = response;
    });
    this.ls.getCountries().subscribe(response => {
      this.countriesFromService = response;
    });
  }

  checkBoxUTMChange(cb: any) {
    this.isUTMChecked = !this.isUTMChecked;
  }

  clearChanges() {
    this.submitted = false;
    this.contactInfoForm.reset()
  }

  changeIsSameAsMailingAdrress() {
    this.isSameAsMailingAddress = !this.isSameAsMailingAddress;
    if (this.isSameAsMailingAddress) {
      this.contactInfoForm.removeControl('physicalAddress')
      this.contactInfoForm.removeControl('physicalCity')
      this.contactInfoForm.removeControl('physicalListStateId')
      this.contactInfoForm.removeControl('physicalZip')
      this.contactInfoForm.removeControl('physicalCountryId')
      this.contactInfoForm.removeControl('latitude')
      this.contactInfoForm.removeControl('longitude')
      this.contactInfoForm.removeControl('elevation')
    } else {
      this.contactInfoForm.addControl('physicalAddress', new FormControl('', Validators.required))
      this.contactInfoForm.addControl('physicalCity', new FormControl('', Validators.required))
      this.contactInfoForm.addControl('physicalListStateId', new FormControl('', Validators.required))
      this.contactInfoForm.addControl('physicalZip', new FormControl('', Validators.required))
      this.contactInfoForm.addControl('physicalCountryId', new FormControl('', Validators.required))
      this.contactInfoForm.addControl('latitude', new FormControl('', [Validators.required, Validators.pattern("^(\\+|-)?((\\d((\\.)|\\.\\d{1,6})?)|(0*?[0-8]\\d((\\.)|\\.\\d{1,6})?)|(0*?90((\\.)|\\.0{1,6})?))$")]))
      this.contactInfoForm.addControl('longitude', new FormControl('', [Validators.required, Validators.pattern("^(\\+|-)?((\\d((\\.)|\\.\\d{1,6})?)|(0*?\\d\\d((\\.)|\\.\\d{1,6})?)|(0*?1[0-7]\\d((\\.)|\\.\\d{1,6})?)|(0*?180((\\.)|\\.0{1,6})?))$")]))
      this.contactInfoForm.addControl('elevation', new FormControl('', Validators.pattern("(250[1-9]|25[1-9][0-9]|2[6-9][0-9]{2}|[3-9][0-9]{3}|1[0-9]{4}|2[0-8][0-9]{3}|290[0-2][0-9]|2903[0-3])")))
    }

  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactInfoForm.valid) {
      console.log('VALID', this.contactInfoForm.controls);
    } else if (this.samePhone) {
      console.log('not valid: phones are the same')
    } else {
      console.log('not valid', this.contactInfoForm.controls);
      return;
    }
  }

  get f() { return this.contactInfoForm.controls; }
  get samePhone() { if (this.contactInfoForm.value.telephone != '') { return this.contactInfoForm.value.telephone == this.contactInfoForm.value.repressedTelephone } else return false }




}
