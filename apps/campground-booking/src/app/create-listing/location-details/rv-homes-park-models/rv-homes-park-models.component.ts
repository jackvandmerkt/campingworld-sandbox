import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rv-homes-park-models',
  templateUrl: './rv-homes-park-models.component.html',
  styleUrls: ['./rv-homes-park-models.component.css']
})
export class RvHomesParkModelsComponent implements OnInit {

  isNewConstructionChecked = false;

  constructor() { }

  ngOnInit(): void {
  }


  checkBoxNewConstructionChange(cb: any) {
    this.isNewConstructionChecked = !this.isNewConstructionChecked;
  }

}
