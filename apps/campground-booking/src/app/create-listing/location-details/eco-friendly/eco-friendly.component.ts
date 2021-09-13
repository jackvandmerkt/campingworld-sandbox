import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eco-friendly',
  templateUrl: './eco-friendly.component.html',
  styleUrls: ['./eco-friendly.component.css']
})
export class EcoFriendlyComponent implements OnInit {

  option = ''
  isGreenParkChecked = false;

  constructor() { }

  ngOnInit(): void {
  }

  optionChecked(radio: string) {
    this.option = radio
  }

  checkBoxGreenParkChange(cb: any) {
    this.isGreenParkChecked = !this.isGreenParkChecked;
  }

}
