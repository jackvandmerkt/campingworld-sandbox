import { Component } from "@angular/core";

@Component({
  selector: 'create-listing',
  templateUrl: './create-listing.component.html'
})
export class CreateListingComponent {
  locationInfoStep = 'Contact Info';
  locationInfoStep = 'Directions';
  locationInfoStep = 'Owner and b2b info';

  constructor() {

  }
}