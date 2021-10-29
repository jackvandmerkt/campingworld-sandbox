import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { IAllRefs } from "../../shared/listing.model";
import { ListingService } from "../../shared/listing.service";
import { ListingActions } from "../state/actions";

@Component({
    selector: 'new-listing',
    templateUrl: './new-listing.component.html',
    styleUrls: ['./new-listing.component.css']
})
export class NewListingsComponent implements OnInit{
    submitted: boolean = false;
    repNameFromState:string = '';
    postResponse:any;
    fileNumber:any;
    newListingTmp:any;
    newListingObj: any = {};

    allRefsTmp:any;
    allRefsObj!: IAllRefs[];
    sectionCodesFromService: any = {};
    parkTypesFromService: any = {};


    constructor(private formBuilder: FormBuilder, private ls: ListingService, private router: Router, private store: Store<any>) {
        
    }
    ngOnInit() {
     this.getFormDropDownData();
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
          window.localStorage.setItem('new-listing', JSON.stringify(this.postResponse));
          for(let [key, value] of Object.entries(this.postResponse)) {
            if(key === 'fileNumber') {
                this.fileNumber = value;
            }
          }
          this.router.navigateByUrl('/listing/good-sam-record/' + this.fileNumber)
        }
      })
    }

    getFormDropDownData() {
      this.allRefsTmp = window.localStorage.getItem('all-refs');
      this.allRefsObj = JSON.parse(this.allRefsTmp);
      for(let [key, value] of Object.entries(this.allRefsObj)) {
          if(key === 'sectionCodes') {
              this.sectionCodesFromService = value;
          }
          if(key === 'parkTypes') {
              this.parkTypesFromService = value;
          }
      }
    }

}