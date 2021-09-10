import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  motorhomeClass = ''

  constructor() { }



  ngOnInit(): void {
  }

  motorhomeClassChecked(radio: string) {
    this.motorhomeClass = radio
  }
}
