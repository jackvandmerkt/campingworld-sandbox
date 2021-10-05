import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder } from '@angular/forms';
import { IListingsResponse, IParkTypes, ISectionCodes } from "../shared/listing-counts.model";
import { ListingService } from "../shared/listing.service";

@Component({
    selector: 'new-listing',
    templateUrl: './new-listing.component.html',
    styleUrls: ['./new-listing.component.css']
})
export class NewListingsComponent implements OnInit{
    submitted: boolean = false;
    sectionCodesFromService!: ISectionCodes[];
    parkTypesFromService!: IParkTypes[];
    postResponse!: IListingsResponse[];

    constructor(private formBuilder: FormBuilder, private ls: ListingService) {
        
    }
    ngOnInit() {
      this.ls.getParkTypes().subscribe(response => {
        this.parkTypesFromService = response;
      });

      this.ls.getSectionCodes().subscribe(response => {
          this.sectionCodesFromService = response;
      });
    };

    // form object
    newListingForm = this.formBuilder.group({
      sectionCodeId: ['', Validators.required],
      parkTypeId: [''],
      repName: ['', Validators.required],
      locationListingName: ['', Validators.required]
    });

    onSubmit(): void {
      this.submitted = true;
      if(this.newListingForm.valid) {
          console.log(this.newListingForm.value);
          this.postForm()
      } else {
          console.log('not valid');
          return;
      }
    }
  
    get f() { return this.newListingForm.controls; }

    postForm() {
      this.ls.postNewListing(this.newListingForm).subscribe(response => {
        // this.postResponse = response;
      })
    }

}