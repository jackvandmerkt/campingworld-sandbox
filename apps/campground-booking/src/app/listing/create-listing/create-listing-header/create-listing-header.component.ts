import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";

@Component({
    selector: 'create-listing-header',
    templateUrl: './create-listing-header.component.html'
})
export class CreateListingHeaderComponent implements OnInit {
    newListingTmp:any;
    newListingObj: any = {};
    parkName: any;
    fileNum:any = 0;

    constructor(private store: Store<any>, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.newListingTmp = window.localStorage.getItem('new-listing');
        this.newListingObj = JSON.parse(this.newListingTmp);
        for(let [key, value] of Object.entries(this.newListingObj)) {
            if(key === 'locationListingName') {
                this.parkName = value;
            } 
            if(key === 'fileNumber') {
                this.fileNum = value;
            } 
        }
    }
}