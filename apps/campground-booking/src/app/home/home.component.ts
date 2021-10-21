import { Component, OnInit } from "@angular/core";
import { ListingService } from "../shared/listing.service";
import { Router } from '@angular/router';

@Component({
  selector: "home",
  templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit {
  territories: any = []
  selectedTerritory = 'All';
  loadingOrders = true
  loadingListings = true

  constructor(private ls: ListingService, private router: Router) {

  }


  getTerritoriesDropdownData() {
    this.ls.getTerritories().subscribe(data => {
      if (data) { this.territories = data; } else { this.router.navigateByUrl('/login') }

    })
  }

  ngOnInit() {
    this.getTerritoriesDropdownData();
  }

  onChange(event: any) {
    const newVal = event.target.value;
    if (newVal === "All territories") {
      this.selectedTerritory = "All";
    } else {
      this.selectedTerritory = newVal;
    }
  }

  stopLoading() {
    this.loadingOrders = false
    this.loadingListings = false
  }

}