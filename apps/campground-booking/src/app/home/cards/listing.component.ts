import { Component, Input, Output, OnChanges, OnInit, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { IListingCounts } from '../../shared/listing.model';
import { ListingService } from '../../shared/listing.service';

@Component({
  selector: 'listings',
  templateUrl: './listings.component.html'
})

export class ListingsComponent implements OnInit, OnChanges {
  loaded = false;
  listingCounts!: IListingCounts;
  @Input() territoryCode = '';
  @Output() loading = new EventEmitter<boolean>();

  constructor(private router: Router, private listingService: ListingService) {
  }

  redirect() {
    this.router.navigateByUrl('/new-listing')
  }

  ngOnInit() {
    this.listingService.getListings('All').subscribe(response => {
      this.listingCounts = response;
      this.loading.emit(false);
      this.loaded = true
    })
  }

  ngOnChanges() {
    this.listingService.getListings(this.territoryCode).subscribe(response => {
      this.listingCounts = response;
      this.loading.emit(false);
      this.loaded = true
    })
  }


}