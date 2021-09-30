import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'recreation',
  templateUrl: './recreation.component.html',
  styleUrls: ['./recreation.component.css']
})
export class RecreationComponent implements OnInit {

  option: string[] = [];
  nearby: string[] = [];
  hunting: string[] = [];
  isRecreationChecked = false;
  isOpenChecked = false;
  isCasinoChecked = false;
  isHuntingSeasonChecked = false;

  constructor(private formBuilder: FormBuilder) {

  }

  recreationForm = this.formBuilder.group({
    recreation: false,
    open: false,
    casino: false,
    huntingSeason: false,
    fileNumber: '',
    displayName: '',
    otherRecMajor: '',
    otherRecMinor: '',
    eventCalendarsUrl: '',
    plannedFamilyActivities: ''
  })

  ngOnInit(): void {

  }

  optionChecked(radio: string) {
    if (!this.option.includes(radio)) {
      this.option.push(radio)
    } else {
      this.option = this.option.filter(option => option !== radio)
    }
  }

  nearbyChecked(radio: string) {
    if (!this.nearby.includes(radio)) {
      this.nearby.push(radio)
    } else {
      this.nearby = this.nearby.filter(nearby => nearby !== radio)
    }
  }

  huntingChecked(radio: string) {
    if (!this.hunting.includes(radio)) {
      this.hunting.push(radio)
    } else {
      this.hunting = this.hunting.filter(hunting => hunting !== radio)
    }
  }

  checkBoxRecreationChange(cb: any) {
    this.isRecreationChecked = !this.isRecreationChecked;
    if (!this.isRecreationChecked) {
      this.isOpenChecked = false
    }
  }

  checkBoxOpenChange(cb: any) {
    this.isOpenChecked = !this.isOpenChecked;
  }

  checkBoxCasinoChange(cb: any) {
    this.isCasinoChecked = !this.isCasinoChecked;
  }

  checkBoxHuntingSeasonChange(cb: any) {
    this.isHuntingSeasonChecked = !this.isHuntingSeasonChecked;
  }

  onSubmit() {
    console.log('form', this.recreationForm.value)
  }

  clearChanges() {
    this.option = [];
    this.nearby = [];
    this.hunting = [];
    this.isRecreationChecked = false;
    this.isOpenChecked = false;
    this.isCasinoChecked = false;
    this.isHuntingSeasonChecked = false;
    this.recreationForm.reset()
  }
}
