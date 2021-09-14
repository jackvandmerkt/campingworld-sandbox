import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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
}
