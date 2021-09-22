import { Component, OnInit } from "@angular/core";
import { ListingService } from "../shared/listing.service";

@Component({
    selector: "home",
    templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit{
    territories:any = []

    constructor(private ls: ListingService) {

    }

    getTerritoriesDropdownData() {
        this.ls.getTerritories().subscribe(data => {
            if(data) {
                this.territories = data;
            }
        });
    }

    ngOnInit() {
        this.getTerritoriesDropdownData();
    }

}