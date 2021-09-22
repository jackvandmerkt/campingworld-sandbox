import { Component, OnInit } from "@angular/core";
import { TerritoriesService } from "../shared/territories.service";

@Component({
    selector: "home",
    templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit{
    territories:any = []

    constructor(private ts: TerritoriesService) {

    }

    getTerritoriesDropdownData() {
        this.ts.getTerritories().subscribe(data => {
            if(data) {
                this.territories = data;
            }
        });
    }

    ngOnInit() {
        this.getTerritoriesDropdownData();
    }

}