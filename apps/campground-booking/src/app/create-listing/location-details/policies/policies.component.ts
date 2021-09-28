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
  ageRestrictions = false
  familyCamping = false
  allowsTent = false
  petsAllowed = false

  public start: Date = new Date("10/07/2017");

  public end: Date = new Date("11/25/2017");

  constructor(private formBuilder: FormBuilder) {

  }

  policiesForm = this.formBuilder.group({
    rvAgeRestrictions: '',
    motorhomeClass: '',
    isLessThan30Days: false,
    openAllYear: false,
    ageRestrictions: false,
    familyCamping: false,
    allowsTent: false,
    petsAllowed: false,
    start: '',
    end: ''
  })

  ngOnInit(): void {
  }

  motorhomeClassChecked(radio: string) {
    this.motorhomeClass = radio
  }

  checkBoxIsLessThan30Days(cb: any) {
    this.isLessThan30Days = !this.isLessThan30Days;
  }
  checkBoxOpenAllYear(cb: any) {
    this.openAllYear = !this.openAllYear;
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
}
