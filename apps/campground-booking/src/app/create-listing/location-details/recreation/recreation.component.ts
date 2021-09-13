import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recreation',
  templateUrl: './recreation.component.html',
  styleUrls: ['./recreation.component.css']
})
export class RecreationComponent implements OnInit {

  option: string[] = [];
  isRecreationChecked = false;

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

  checkBoxRecreationChange(cb: any) {
    this.isRecreationChecked = !this.isRecreationChecked;
  }
}
