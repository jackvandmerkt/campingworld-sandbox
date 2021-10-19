import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { IParkTypes, ISectionCodes } from "../../shared/listing-counts.model";
import { ListingService } from "../../shared/listing.service";
import { ListingActions } from "../state/actions";
import { listingReducer } from "../state/listing.reducer";

@Component({
    selector: 'new-listing',
    templateUrl: './new-listing.component.html',
    styleUrls: ['./new-listing.component.css']
})
export class NewListingsComponent implements OnInit{
    submitted: boolean = false;
    sectionCodesFromService!: ISectionCodes[];
    parkTypesFromService!: IParkTypes[];
    repNameFromState:string = '';
    postResponse:any;

    constructor(private formBuilder: FormBuilder, private ls: ListingService, private router: Router, private store: Store<any>) {
        
    }
    ngOnInit() {
      this.ls.getParkTypes().subscribe(response => {
        this.parkTypesFromService = response;
      });

      this.ls.getSectionCodes().subscribe(response => {
          this.sectionCodesFromService = response;
      });

      this.store.select('users').subscribe(
        users => {
          if (users) {
            this.repNameFromState = users.userReducer.currentUser.firstName + ' ' + users.userReducer.currentUser.lastName;
            this.newListingForm.patchValue({repName: this.repNameFromState})
          }
        });
    };

    // form object
    newListingForm = this.formBuilder.group({
      sectionCodeId: ['', Validators.required],
      parkTypeId: [''],
      repName: [{value: this.repNameFromState, disabled: true},  Validators.required],
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
      this.ls.postNewListing(this.newListingForm.value).subscribe(response => {
        if(response){
          this.postResponse = response;
          console.log(this.postResponse)
          this.store.dispatch(ListingActions.updateInitialState({ listing: this.postResponse}));
          this.router.navigateByUrl('/create-listing/good-sam-record')
        }
      })
    }

}