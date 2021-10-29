import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.css']
})
export class CreateProposalComponent implements OnInit {
  displayItemPrices = false
  displayMediaKit = false

  ngOnInit() {
    console.log('aa')
  }

  onChange(): void {
    console.log('aa')
  }

  displayItemPricesChange(value: any) {
    this.displayItemPrices = value
  }

  displayMediaKitChange(value: any) {
    this.displayMediaKit = value
  }


}