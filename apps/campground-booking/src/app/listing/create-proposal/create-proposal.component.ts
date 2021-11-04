import { Component, OnInit } from "@angular/core";
@Component({
  selector: 'create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.css']
})
export class CreateProposalComponent implements OnInit {
  downPaymentRequired = false
  displayItemPrices = false
  displayMediaKit = false
  addAProduct = false

  ngOnInit() {
    console.log('aa')
  }

  onChange(): void {
    console.log('aa')
  }

  downPaymentRequiredChange(value: any) {
    this.downPaymentRequired = !this.downPaymentRequired
  }

  displayItemPricesChange(value: any) {
    this.displayItemPrices = !this.displayItemPrices
  }

  displayMediaKitChange(value: any) {
    this.displayMediaKit = !this.displayMediaKit
  }
}