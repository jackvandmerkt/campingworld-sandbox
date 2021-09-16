import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rv-homes-park-models',
  templateUrl: './rv-homes-park-models.component.html',
  styleUrls: ['./rv-homes-park-models.component.css']
})
export class RvHomesParkModelsComponent implements OnInit {

  isNewConstructionChecked = false;
  isNewPortConstructionChecked = false;
  isNewCasitaConstructionChecked = false;
  isNewSiteConstructionChecked = false;
  isFloridaRoomChecked = false;
  isStorageRoomChecked = false;
  communityInfo: string[] = [];
  recreation: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  checkBoxNewConstructionChange(cb: any) {
    this.isNewConstructionChecked = !this.isNewConstructionChecked;
  }

  checkBoxNewPortConstructionChange(cb: any) {
    this.isNewPortConstructionChecked = !this.isNewPortConstructionChecked;
  }

  checkBoxNewCasitaConstructionChange(cb: any) {
    this.isNewCasitaConstructionChecked = !this.isNewCasitaConstructionChecked;
  }

  checkBoxNewSiteConstructionChange(cb: any) {
    this.isNewSiteConstructionChecked = !this.isNewSiteConstructionChecked;
  }
  checkBoxFloridaRoomChange(cb: any) {
    this.isFloridaRoomChecked = !this.isFloridaRoomChecked;
  }
  checkBoxStorageRoomChange(cb: any) {
    this.isStorageRoomChecked = !this.isStorageRoomChecked;
  }

  communityInfoChecked(checkbox: string) {
    if (!this.communityInfo.includes(checkbox)) {
      this.communityInfo.push(checkbox)
    } else {
      this.communityInfo = this.communityInfo.filter(option => option !== checkbox)
    }

  }

  recreationChecked(checkbox: string) {
    if (!this.recreation.includes(checkbox)) {
      this.recreation.push(checkbox)
    } else {
      this.recreation = this.recreation.filter(option => option !== checkbox)
    }

  }

}
