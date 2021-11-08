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

  downPaymentRequiredChange() {
    this.downPaymentRequired = !this.downPaymentRequired
  }

  displayItemPricesChange() {
    this.displayItemPrices = !this.displayItemPrices
  }

  displayMediaKitChange() {
    this.displayMediaKit = !this.displayMediaKit
  }
}