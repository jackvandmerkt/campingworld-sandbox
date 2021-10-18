import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.css']
})
export class AllListingsComponent implements OnInit {

  orders: Array<any> = []

  ngOnInit() {
    this.orders.push({
      status: {},
      date: "2021-10-18T18:25:24.822Z",
      fileNumber: 202211111,
      name: "Amazing Alaskan Adventures",
      city: "Juneau",
      state: {
        id: 1,
        value: "AK - Alaska",
        code: "AK",
        name: "Alaska"
      },
      listingType: {
        id: 1,
        value: "Park Primary"
      },
      sectionCode: {},
      territory: {
        id: 1,
        code: "AK",
        description: "Alaska",
        listStateId: 1,
        goalRevenue: 100439.36,
        goalGsp: 24,
        hidden: "f",
        countryId: "1"
      },
      newRenew: "N",
      cdAdv: "3$",
      delete: {
        id: 1,
        value: "1 - Substandard"
      }
    })
    console.log(this.orders)
  }

  onChange(): void {
    console.log('aa')
  }

}