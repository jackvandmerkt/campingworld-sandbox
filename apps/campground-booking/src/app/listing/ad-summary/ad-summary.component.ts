import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'ad-summary',
  templateUrl: './ad-summary.component.html',
  styleUrls: ['./ad-summary.component.css']
})
export class AdSummaryComponent implements OnInit {

  orders: Array<any> = []
  proposals: Array<any> = []

  ngOnInit() {
    const count = ['1', '2', '3', '4', '5', '6']
    count.forEach((times, index) => this.orders.push({
      bookYr: '2021',
      status: '2022 Marketing OS Standard Online Only',
      orderRev: '27942-4',
      product: 'GS Standard Bundle Online Only',
      dateCreated: '08/21/20',
      price: '$12,090.00',
      background: index % 2 == 0 ? 'gray' : 'normal'
    }))

    const count2 = ['1', '2']

    count2.forEach((times, index) => this.proposals.push({
      bookYr: '2021',
      status: '2022 Marketing OS Standard Online Only',
      orderRev: '27942-4',
      product: 'GS Standard Bundle Online Only',
      dateCreated: '08/21/20',
      price: '$12,090.00',
      forecast: false,
      background: index % 2 == 0 ? 'gray' : 'normal'
    }))
    console.log(this.orders)
  }

  onChange(): void {
    console.log('aa')
  }

}