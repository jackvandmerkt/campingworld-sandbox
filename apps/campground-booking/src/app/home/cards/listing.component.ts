import {Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {IListingCounts} from '../../shared/listing-counts.model';
import {ListingService} from '../../shared/listing.service';

@Component({
    selector: 'listings',
    templateUrl: './listings.component.html'
})
export class ListingsComponent implements OnInit {
    listingCounts!:IListingCounts;
    territoryCode = 'AK';
    constructor(private router: Router, private listingService:ListingService) {
    }
    redirect() {
        this.router.navigateByUrl('/new-listing')
    }
    ngOnInit(){
        this.listingService.getListings(this.territoryCode).subscribe(response => {
            this.listingCounts = response;
       })
    }


}