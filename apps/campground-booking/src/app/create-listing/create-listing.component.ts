import { Component } from "@angular/core";

@Component({
  selector: 'create-listing',
  templateUrl: './create-listing.component.html'
})
export class CreateListingComponent {
  locationInfoStep = 'directions';

  constructor() {

  }
}