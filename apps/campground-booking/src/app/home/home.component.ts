import { Component, OnInit } from "@angular/core";
import { ListingService } from "../shared/listing.service";
import { Router } from '@angular/router';
import { IAllRefs } from "../shared/listing.model";

@Component({
  selector: "home",
  templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit {
  territories: any = []
  allRefsFromService!: IAllRefs[];
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
    this.ls.getAllRefs().subscribe(data => {
      if(data) {
        this.allRefsFromService = data;
        window.localStorage.setItem('all-refs', JSON.stringify(this.allRefsFromService));
      }
    })
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