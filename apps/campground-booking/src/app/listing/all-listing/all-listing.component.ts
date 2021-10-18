import { Component } from "@angular/core";

@Component({
  selector: 'all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.css']
})
export class AllListingsComponent {

  onChange(): void {
    console.log('aa')
  }

}