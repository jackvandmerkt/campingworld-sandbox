import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  motorhomeClass = ''
  isLessThan30Days = false
  openAllYear = false
  limitedFacilities = false
  ageRestrictions = false
  familyCamping = false
  allowsTent = false
  petsAllowed = false
  petsRestrictions = false
  additionalChargeForPets = false
  petRestrictionsOpts: string[] = [];
  limitedOptions = ''

  // public start: Date = new Date();

  // public end: Date = new Date();

  constructor(private formBuilder: FormBuilder) {

  }

  policiesForm = this.formBuilder.group({
    maxStayLessThanThirty: false,
    numberOfDaysMaxStay: null,
    openAllYear: false,
    areThereLimitedFacilities: false,
    lfsLtdFacSummer: false,
    lfwLtdFacWinter: false,
    ageRestrictions: false,
    familyCamping: false,
    allowsTentCampers: false,
    doesNotAllowClassAMotorhomes: false,
    doesNotAllowClassBMotorhomes: false,
    doesNotAllowClassCMotorhomes: false,
    rvAgeRestrictions: null,
    petsOk: false,
    petRestrictions: false,
    size: false,
    quantity: false,
    breed: false,
    petPaid: false
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.policiesForm.value);
  }

  clearChanges() {
    this.policiesForm.reset()
    this.motorhomeClass = ''
    this.isLessThan30Days = false
    this.openAllYear = false
    this.ageRestrictions = false
    this.familyCamping = false
    this.allowsTent = false
    this.petsAllowed = false

  }

  motorhomeClassChecked(radio: string) {
    this.motorhomeClass = radio
  }

  limitedFacilitiesChecked(radio: string) {
    console.log(radio)
    if(radio == 'lfsLtdFacSummer') {
      this.policiesForm.patchValue({
        lfsLtdFacSummer: true,
        lfwLtdFacWinter: false
      })
    } else if(radio == 'lfwLtdFacWinter') {
      this.policiesForm.patchValue({
        lfsLtdFacSummer: false,
        lfwLtdFacWinter: true
      })
    }
    console.log(this.policiesForm.value)
  }

  checkBoxIsLessThan30Days(cb: any) {
    this.isLessThan30Days = !this.isLessThan30Days;
  }

  checkBoxOpenAllYear(cb: any) {
    this.openAllYear = !this.openAllYear;
    if (!this.openAllYear) {
      this.limitedFacilities = false
      this.limitedOptions = ''
    }
  }

  checkBoxLimitedFacilities(cb: any) {
    this.limitedFacilities = !this.limitedFacilities;
  }


  checkBoxAgeRestrictions(cb: any) {
    this.ageRestrictions = !this.ageRestrictions;
  }

  checkBoxFamilyCamping(cb: any) {
    this.familyCamping = !this.familyCamping;
  }

  checkBoxAllowsTent(cb: any) {
    this.allowsTent = !this.allowsTent;
  }

  checkBoxPetsAllowed(cb: any) {
    this.petsAllowed = !this.petsAllowed;
    if (!this.petsAllowed) {
      this.petsRestrictions = false
      this.additionalChargeForPets = false
      this.petRestrictionsOpts = []
    }
  }

  checkBoxPetsRestrictions(cb: any) {
    this.petsRestrictions = !this.petsRestrictions;
    if (!this.petsRestrictions) {
      this.petRestrictionsOpts = []
    }
  }

  checkBoxAdditionalChargeForPets(cb: any) {
    this.additionalChargeForPets = !this.additionalChargeForPets;
  }

  optionChecked(checkbox: string) {
    if (!this.petRestrictionsOpts.includes(checkbox)) {
      this.petRestrictionsOpts.push(checkbox)
    } else {
      this.petRestrictionsOpts = this.petRestrictionsOpts.filter(petRestrictionsOpts => petRestrictionsOpts !== checkbox)
    }
  }

  get noPetsRestrictions() {
    if (this.petsRestrictions && this.petRestrictionsOpts.length == 0) {
      return true
    } else { return false }
  }

}
