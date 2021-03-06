/* eslint-disable no-useless-escape */
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators, FormControl, FormGroup } from "@angular/forms";
import { IAllRefs, IContactInfo } from 'apps/campground-booking/src/app/shared/listing.model';
import { ListingService } from 'apps/campground-booking/src/app/shared/listing.service';
import { ListingNavService } from "../../../../shared/listing-nav.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit, AfterViewInit {
  allRefsTmp:any;
  allRefsObj!: IAllRefs[];
  listStatesFromService: any = {};
  countriesFromService: any = {};
  isSameAsMailingAddress = false;
  isUTMChecked = false;
  submitted = false;
  postResponse:any;
  fileNum:any = 0;
  fileNumParam:any;
  currentContactInfo:any= {};
  postObject = <IContactInfo>{}

  @ViewChild('countryId') private countryIdCSS!: ElementRef;
  @ViewChild('listStateId') private listStateIdCSS!: ElementRef;
  @ViewChild('physicalCountryId') private physicalCountryIdCSS!: ElementRef;
  @ViewChild('physicalListStateId') private physicalListStateIdCSS!: ElementRef;

  constructor(private formBuilder: FormBuilder, private ls: ListingService, private route:ActivatedRoute,
    private listingNavService: ListingNavService,) {

  }

  contactInfoForm = this.formBuilder.group({
    address: [null, [Validators.required]],
    city: [null, [Validators.required]],
    listStateId: [null, [Validators.required]],
    zip: [null, [Validators.required]],
    countryId: [null, [Validators.required]],
    physicalAddress: [null, [Validators.required]],
    physicalCity: [null, [Validators.required]],
    physicalListStateId: [null, [Validators.required]],
    physicalZip: [null, [Validators.required]],
    physicalCountryId: [null, [Validators.required]],
    latitude: [null, [Validators.pattern("^(\\+|-)?((\\d((\\.)|\\.\\d{1,6})?)|(0*?[0-8]\\d((\\.)|\\.\\d{1,6})?)|(0*?90((\\.)|\\.0{1,6})?))$")]],
    longitude: [null, [Validators.pattern("^(\\+|-)?((\\d((\\.)|\\.\\d{1,6})?)|(0*?\\d\\d((\\.)|\\.\\d{1,6})?)|(0*?1[0-7]\\d((\\.)|\\.\\d{1,6})?)|(0*?180((\\.)|\\.0{1,6})?))$")]],
    elevation: [null, Validators.pattern("(250[1-9]|25[1-9][0-9]|2[6-9][0-9]{2}|[3-9][0-9]{3}|1[0-9]{4}|2[0-8][0-9]{3}|290[0-2][0-9]|2903[0-3])")],
    email: [null, [Validators.required, Validators.email]],
    telephone: null,
    repressedTelephone: null,
    webAddress: [null, Validators.pattern("(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})")],
    onlineWeb: [null, Validators.pattern("(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})")],
    skipUtm: false,
    facebook:[null, Validators.pattern("(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})")],
    twitter: [null, Validators.pattern("(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})")],
    pinterest: null,
    instagram: null,
    physicalAndMailingAddressSame:null
  });

  ngOnInit(): void {
    this.fileNum = this.route.snapshot.paramMap.get('fileNumber');
    this.isSameAsMailingAddress = false
    this.getFormDropDownData();
    this.currentContactInfo = this.route.snapshot.data['data'];
    if (this.currentContactInfo != null) {
      for(let [key, value] of Object.entries(this.currentContactInfo)) {
        if(value == 'f') {
            this.currentContactInfo[key] = false;
        }
        if(value == 't') {
            this.currentContactInfo[key] = true;
        }
    }
      if(!this.currentContactInfo.physicalAddress){
        this.contactInfoForm.patchValue({
          address: this.currentContactInfo.mailingAddress.street1,
          city: this.currentContactInfo.mailingAddress.city,
          listStateId: this.currentContactInfo.mailingAddress.listStateId,
          zip: this.currentContactInfo.mailingAddress.zip,
          countryId: this.currentContactInfo.mailingAddress.countryId,
          latitude: this.currentContactInfo.latitude,
          longitude: this.currentContactInfo.longitude,
          elevation:this.currentContactInfo.elevation,
          email: this.currentContactInfo.email,
          telephone: this.currentContactInfo.telephone,
          repressedTelephone:this.currentContactInfo.repressedTelephone,
          webAddress: this.currentContactInfo.webAddress,
          onlineWeb: this.currentContactInfo.onlineWeb,
          skipUtm: this.currentContactInfo.skipUtm,
          facebook: this.currentContactInfo.facebook,
          twitter:this.currentContactInfo.twitter,
          pinterest: this.currentContactInfo.pinterest,
          instagram: this.currentContactInfo.instagram,
          physicalAndMailingAddressSame: this.currentContactInfo.physicalAndMailingAddressSame,
      })
        }
      else {
        this.contactInfoForm.patchValue({
          address: this.currentContactInfo.mailingAddress.street1,
          city: this.currentContactInfo.mailingAddress.city,
          listStateId: this.currentContactInfo.mailingAddress.listStateId,
          zip: this.currentContactInfo.mailingAddress.zip,
          countryId: this.currentContactInfo.mailingAddress.countryId,
          physicalAddress: this.currentContactInfo.physicalAddress.street1,
          physicalCity: this.currentContactInfo.physicalAddress.city,
          physicalListStateId: this.currentContactInfo.physicalAddress.listStateId,
          physicalZip: this.currentContactInfo.physicalAddress.zip,
          physicalCountryId: this.currentContactInfo.physicalAddress.countryId,
          latitude: this.currentContactInfo.latitude,
          longitude: this.currentContactInfo.longitude,
          elevation:this.currentContactInfo.elevation,
          email: this.currentContactInfo.email,
          telephone: this.currentContactInfo.telephone,
          repressedTelephone:this.currentContactInfo.repressedTelephone,
          webAddress: this.currentContactInfo.webAddress,
          onlineWeb: this.currentContactInfo.onlineWeb,
          skipUtm: this.currentContactInfo.skipUtm,
          facebook: this.currentContactInfo.facebook,
          twitter:this.currentContactInfo.twitter,
          pinterest: this.currentContactInfo.pinterest,
          instagram: this.currentContactInfo.instagram,
          physicalAndMailingAddressSame: this.currentContactInfo.physicalAndMailingAddressSame,
      })
      }
    }
    if(this.currentContactInfo.physicalAndMailingAddressSame){
      this.isSameAsMailingAddress = true;
      this.contactInfoForm.get('physicalAddress')?.clearValidators();
      this.contactInfoForm.get('physicalAddress')?.updateValueAndValidity();
      this.contactInfoForm.controls['physicalAddress'].reset();
      this.contactInfoForm.get('physicalCity')?.clearValidators();
      this.contactInfoForm.get('physicalCity')?.updateValueAndValidity();
      this.contactInfoForm.controls['physicalCity'].reset();
      this.contactInfoForm.get('physicalListStateId')?.clearValidators();
      this.contactInfoForm.get('physicalListStateId')?.updateValueAndValidity();
      this.contactInfoForm.controls['physicalListStateId'].reset();
      this.contactInfoForm.get('physicalZip')?.clearValidators();
      this.contactInfoForm.get('physicalZip')?.updateValueAndValidity();
      this.contactInfoForm.controls['physicalZip'].reset();
      this.contactInfoForm.get('physicalCountryId')?.clearValidators();
      this.contactInfoForm.get('physicalCountryId')?.updateValueAndValidity();
      this.contactInfoForm.controls['physicalCountryId'].reset();
    }
  }
  ngAfterViewInit() {
    this.setAttributes();
}

  onSubmit(): void {
    this.submitted = true;
    if (this.contactInfoForm.valid) {
      this.mapForm(); 
      this.sendFormStatus(['contactInfoFormStatus', 2]);
    } else if (this.samePhone) {
      this.sendFormStatus(['contactInfoFormStatus', 1]);
    } else {
      this.sendFormStatus(['contactInfoFormStatus', 1]);
      return;
    }
  }
//to do
  clearChanges() {
    this.submitted = false;
    if(this.currentContactInfo != null && this.currentContactInfo.physicalAddress){
      this.contactInfoForm.patchValue({
        address: this.currentContactInfo.mailingAddress.street1,
        city: this.currentContactInfo.mailingAddress.city,
        listStateId: this.currentContactInfo.mailingAddress.listStateId,
        zip: this.currentContactInfo.mailingAddress.zip,
        countryId: this.currentContactInfo.mailingAddress.countryId,
        physicalAddress: this.currentContactInfo.physicalAddress.street1,
        physicalCity: this.currentContactInfo.physicalAddress.city,
        physicalListStateId: this.currentContactInfo.physicalAddress.listStateId,
        physicalZip: this.currentContactInfo.physicalAddress.zip,
        physicalCountryId: this.currentContactInfo.physicalAddress.countryId,
        latitude: this.currentContactInfo.latitude,
        longitude: this.currentContactInfo.longitude,
        elevation:this.currentContactInfo.elevation,
        email: this.currentContactInfo.email,
        telephone: this.currentContactInfo.telephone,
        repressedTelephone:this.currentContactInfo.repressedTelephone,
        webAddress: this.currentContactInfo.webAddress,
        onlineWeb: this.currentContactInfo.onlineWeb,
        skipUtm: this.currentContactInfo.skipUtm,
        facebook: this.currentContactInfo.facebook,
        twitter:this.currentContactInfo.twitter,
        pinterest: this.currentContactInfo.pinterest,
        instagram: this.currentContactInfo.instagram,
        physicalAndMailingAddressSame: this.currentContactInfo.physicalAndMailingAddressSame,
      })
      this.setAttributes();
    }
    else if(this.currentContactInfo != null && this.isSameAsMailingAddress === true){
      this.contactInfoForm.patchValue({
      address: this.currentContactInfo.mailingAddress.street1,
      city: this.currentContactInfo.mailingAddress.city,
      listStateId: this.currentContactInfo.mailingAddress.listStateId,
      zip: this.currentContactInfo.mailingAddress.zip,
      countryId: this.currentContactInfo.mailingAddress.countryId,
      email: this.currentContactInfo.email,
      telephone: this.currentContactInfo.telephone,
      repressedTelephone:this.currentContactInfo.repressedTelephone,
      webAddress: this.currentContactInfo.webAddress,
      onlineWeb: this.currentContactInfo.onlineWeb,
      skipUtm: this.currentContactInfo.skipUtm,
      facebook: this.currentContactInfo.facebook,
      twitter:this.currentContactInfo.twitter,
      pinterest: this.currentContactInfo.pinterest,
      instagram: this.currentContactInfo.instagram,
      physicalAndMailingAddressSame: this.currentContactInfo.physicalAndMailingAddressSame,
      })
      this.setAttributes();
    }
    else{
      this.contactInfoForm.reset()
    }
  }

  getFormDropDownData() {
    this.allRefsTmp = window.localStorage.getItem('all-refs');
    this.allRefsObj = JSON.parse(this.allRefsTmp);
    for(let [key, value] of Object.entries(this.allRefsObj)) {
        if(key === 'listStates') {
            this.listStatesFromService = value;
        }
        if(key === 'countries') {
            this.countriesFromService = value;
        }
    }
  }
  setAttributes(){
    // do this from the form
    if (this.currentContactInfo != null) {
        for(let [key, value] of Object.entries(this.currentContactInfo.mailingAddress)) {
            if(key === 'countryId') {
                this.countryIdCSS.nativeElement.setAttribute('value', value) 
            }
            if(key === 'listStateId') {
                this.listStateIdCSS.nativeElement.setAttribute('value', value)
            }
        }
    if(this.currentContactInfo.physicalAddress){
        for(let [key, value] of Object.entries(this.currentContactInfo.physicalAddress)) {
          if(key === 'countryId') {
            this.physicalCountryIdCSS.nativeElement.setAttribute('value', value)
        }
        if(key === 'listStateId') {
            this.physicalListStateIdCSS.nativeElement.setAttribute('value',value)
        }
      }
    }
  }
    else {
      this.countryIdCSS.nativeElement.setAttribute('value', null)
      this.listStateIdCSS.nativeElement.setAttribute('value', null)
      this.physicalCountryIdCSS.nativeElement.setAttribute('value',null)
      this.physicalListStateIdCSS.nativeElement.setAttribute('value', null)
  }  
    
}
sendFormStatus(value: any) {
  this.listingNavService.updateFormStatus(value)
}

  checkBoxUTMChange(cb: any) {
    this.isUTMChecked = !this.isUTMChecked;
  }
  changeIsSameAsMailingAddress() {
    this.isSameAsMailingAddress = !this.isSameAsMailingAddress;
    if(this.isSameAsMailingAddress === true){
      this.contactInfoForm.get('physicalAddress')?.clearValidators();
      this.contactInfoForm.get('physicalAddress')?.updateValueAndValidity();
      this.contactInfoForm.controls['physicalAddress'].reset();
      this.contactInfoForm.get('physicalCity')?.clearValidators();
      this.contactInfoForm.get('physicalCity')?.updateValueAndValidity();
      this.contactInfoForm.controls['physicalCity'].reset();
      this.contactInfoForm.get('physicalListStateId')?.clearValidators();
      this.contactInfoForm.get('physicalListStateId')?.updateValueAndValidity();
      this.contactInfoForm.controls['physicalListStateId'].reset();
      this.contactInfoForm.get('physicalZip')?.clearValidators();
      this.contactInfoForm.get('physicalZip')?.updateValueAndValidity();
      this.contactInfoForm.controls['physicalZip'].reset();
      this.contactInfoForm.get('physicalCountryId')?.clearValidators();
      this.contactInfoForm.get('physicalCountryId')?.updateValueAndValidity();
      this.contactInfoForm.controls['physicalCountryId'].reset();
    } else {
      this.contactInfoForm.get('physicalAddress')?.setValidators([Validators.required]);
      this.contactInfoForm.get('physicalAddress')?.updateValueAndValidity();
      this.contactInfoForm.get('physicalCity')?.setValidators([Validators.required]);
      this.contactInfoForm.get('physicalCity')?.updateValueAndValidity();
      this.contactInfoForm.get('physicalListStateId')?.setValidators([Validators.required]);
      this.contactInfoForm.get('physicalListStateId')?.updateValueAndValidity();
      this.contactInfoForm.get('physicalZip')?.setValidators([Validators.required]);
      this.contactInfoForm.get('physicalZip')?.updateValueAndValidity();
      this.contactInfoForm.get('physicalCountryId')?.setValidators([Validators.required]);
      this.contactInfoForm.get('physicalCountryId')?.updateValueAndValidity();
      this.getFormDropDownData();
    }
  }

  get f() { return this.contactInfoForm.controls; }
  get samePhone() { if (this.contactInfoForm.value.telephone != null) { return this.contactInfoForm.value.telephone == this.contactInfoForm.value.repressedTelephone } else return false }

  postForm() {
    this.ls.postContactInfo(this.postObject, this.fileNum).subscribe(response => {
      if(response){
        this.postResponse = response;
      }
    })
  }
  mapForm(){
    if(this.contactInfoForm.value.physicalAndMailingAddressSame){
      this.postObject.physicalAndMailingAddressSame = 't';
    }
    else{
      this.postObject.physicalAndMailingAddressSame = 'f';
    }
    const mailingAddress = {
      city : this.contactInfoForm.value.city,
      street1 : this.contactInfoForm.value.address,
      listStateId : this.contactInfoForm.value.listStateId,
      zip : this.contactInfoForm.value.zip,
      countryId : this.contactInfoForm.value.countryId,
    }
    this.postObject.mailingAddress = mailingAddress;
    if(!this.contactInfoForm.value.physicalAndMailingAddressSame){
      const physicalAddress = {
        city : this.contactInfoForm.value.physicalCity,
        street1 : this.contactInfoForm.value.physicalAddress,
        listStateId : this.contactInfoForm.value.physicalListStateId,
        zip : this.contactInfoForm.value.physicalZip,
        countryId : this.contactInfoForm.value.physicalCountryId,
      }
      this.postObject.physicalAddress = physicalAddress;
    }
    this.postObject.latitude = this.contactInfoForm.value.latitude;
    this.postObject.longitude =this.contactInfoForm.value.longitude;
    this.postObject.elevation = this.contactInfoForm.value.elevation;
    this.postObject.email = this.contactInfoForm.value.email;
    this.postObject.telephone = this.contactInfoForm.value.telephone;
    this.postObject.repressedTelephone = this.contactInfoForm.value.repressedTelephone;
    this.postObject.webAddress = this.contactInfoForm.value.webAddress;
    this.postObject.onlineWeb = this.contactInfoForm.value.onlineWeb;
    this.postObject.skipUtm = this.contactInfoForm.value.skipUtm;
    this.postObject.facebook = this.contactInfoForm.value.facebook;
    this.postObject.twitter = this.contactInfoForm.value.twitter;
    this.postObject.pinterest = this.contactInfoForm.value.pinterest;
    this.postObject.instagram = this.contactInfoForm.value.instagram;
    this.postObject.parkTypeId = this.contactInfoForm.value.parkTypeId;
    this.postForm();
  }
}
