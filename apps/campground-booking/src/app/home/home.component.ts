import { Component, Input, OnInit } from "@angular/core";
import { ListingService } from "../shared/listing.service";

@Component({
    selector: "home",
    templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit{
    territories:any = []
    selectedTerritory:string = 'All';

    constructor(private ls: ListingService) {

    }

    getTerritoriesDropdownData() {
        this.ls.getTerritories().subscribe(data => {
            this.territories = data;
        });
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
            console.log(this.selectedTerritory)
        }
    }

}