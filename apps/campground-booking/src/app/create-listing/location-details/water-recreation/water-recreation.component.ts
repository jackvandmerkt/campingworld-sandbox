import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'water-recreation',
  templateUrl: './water-recreation.component.html',
  styleUrls: ['./water-recreation.component.css']
})
export class WaterRecreationComponent implements OnInit {

  option: string[] = [];
  bodyOfWater: string[] = [];
  boatDetails: string[] = [];
  nearby: string[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  optionChecked(checkbox: string) {
    if (!this.option.includes(checkbox)) {
      this.option.push(checkbox)
    } else {
      this.option = this.option.filter(option => option !== checkbox)
    }

  }

  bodyOfWaterChecked(checkbox: string) {
    if (!this.bodyOfWater.includes(checkbox)) {
      this.bodyOfWater.push(checkbox)
    } else {
      this.bodyOfWater = this.bodyOfWater.filter(bodyOfWater => bodyOfWater !== checkbox)
    }

  }

  boatDetailsChecked(checkbox: string) {
    if (!this.boatDetails.includes(checkbox)) {
      this.boatDetails.push(checkbox)
    } else {
      this.boatDetails = this.boatDetails.filter(boatDetails => boatDetails !== checkbox)
    }

  }

  nearbyChecked(checkbox: string) {
    if (!this.nearby.includes(checkbox)) {
      this.nearby.push(checkbox)
    } else {
      this.nearby = this.nearby.filter(nearby => nearby !== checkbox)
    }

  }

}
