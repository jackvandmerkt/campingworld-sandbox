import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'new-listing',
    templateUrl: './new-listing.component.html',
    styleUrls: ['./new-listing.component.css']
})
export class NewListingsComponent implements OnInit{
    newListingForm!: FormGroup;

    constructor() {
        
    }
    ngOnInit() {
        this.newListingForm = new FormGroup({
            sectionCode: new FormControl(''),
            repName: new FormControl(''),
            parkName: new FormControl(''),
            parkType: new FormControl('')
        });
    };

      getSectionCode (){
        return this.newListingForm.get('sectionCode');
      } 
      getRepName (){
        return this.newListingForm.get('repName');
      } 
      getParkName (){
        return this.newListingForm.get('parkName');
      } 
      getParkType (){
        return this.newListingForm.get('parkType');
      } 
}