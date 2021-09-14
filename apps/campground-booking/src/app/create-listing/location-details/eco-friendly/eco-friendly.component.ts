import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eco-friendly',
  templateUrl: './eco-friendly.component.html',
  styleUrls: ['./eco-friendly.component.css']
})
export class EcoFriendlyComponent implements OnInit {

  option: string[] = [];
  isGreenParkChecked = false;

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

  checkBoxGreenParkChange(cb: any) {
    this.isGreenParkChecked = !this.isGreenParkChecked;
  }


}
