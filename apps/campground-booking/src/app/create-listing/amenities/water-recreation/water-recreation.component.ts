import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

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



  constructor(private formBuilder: FormBuilder) {

  }

  waterRecreationForm = this.formBuilder.group({
    bodyOfWaterName: '',
    hpLimit: ''
  })



  // START VALIDATIONS --------------------------------------------------------------------------

  get moreThanOnePool() {
    const pools = ['1', '2', '4', '5']
    let poolValidator = 0
    pools.forEach(pool => this.option.forEach(optPool => pool == optPool ? poolValidator++ : ''))
    if (poolValidator > 1) {
      return true
    } else { return false }
  }

  get poolPaid() {
    const pools = ['1', '2']
    let poolValidator = 0
    pools.forEach(pool => this.option.forEach(optPool => pool == optPool ? poolValidator++ : ''))
    if (this.option.includes('3') && poolValidator < 1) {
      return true
    } else { return false }
  }

  get invalidBodyOfWater() {
    const bodyOfWaters = ['1', '2', '3', '4', '5']
    let bodyOfWaterValidator = 0
    bodyOfWaters.forEach(bodyOfWater => { this.bodyOfWater.forEach(optBody => { if (bodyOfWater == optBody) { bodyOfWaterValidator++ } }) })
    if (bodyOfWaterValidator > 1) {
      return true
    } else { return false }
  }

  get invalidFishing() {
    const bodyOfWaters = ['1', '2', '3', '4', '5']
    let bodyOfWaterValidator = 0
    bodyOfWaters.forEach(bodyOfWater => { this.bodyOfWater.forEach(optBody => { if (bodyOfWater == optBody) { bodyOfWaterValidator++ } }) })
    if (this.bodyOfWater.includes('7') && bodyOfWaterValidator < 1) {
      return true
    } else { return false }
  }

  get noBodyOfWater() {
    const bodyOfWaters = ['1', '2', '3', '4', '5']
    let bodyOfWaterValidator = 0
    bodyOfWaters.forEach(bodyOfWater => { this.bodyOfWater.forEach(optBody => { if (bodyOfWater == optBody) { bodyOfWaterValidator++ } }) })
    if (this.waterRecreationForm.value.bodyOfWaterName == '' && bodyOfWaterValidator == 0) {
      return true
    } else { return false }
  }

  // END VALIDATIONS --------------------------------------------------------------------------





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

  onSubmit(): void {
    const formValidators = [
      this.moreThanOnePool,
      this.poolPaid,
      this.invalidBodyOfWater,
      this.invalidFishing,
      this.noBodyOfWater
    ]
    let invalidValidators = 0
    formValidators.forEach(invalid => { if (invalid == true) invalidValidators++ })
    if (invalidValidators == 0) {
      console.log(this.waterRecreationForm.value)
    } else {
      console.log('not valid')
    }

  }

  clearChanges(): void {
    this.waterRecreationForm.reset()
    this.option = [];
    this.bodyOfWater = [];
    this.boatDetails = [];
    this.nearby = [];
  }

}
