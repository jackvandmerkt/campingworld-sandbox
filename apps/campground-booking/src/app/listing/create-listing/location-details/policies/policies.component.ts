import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { ListingNavService } from 'apps/campground-booking/src/app/shared/listing-nav.service';
import { ListingService } from 'apps/campground-booking/src/app/shared/listing.service';

@Component({
  selector: 'policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {
  submitted: boolean = false
  isLessThan30Days = false
  openAllYear = false
  limitedFacilities = false
  petsAllowed = false
  petsRestrictions = false
  petRestrictionsOpts: string[] = [];

  seasonToString: string = '';
  seasonBackToArray: string[] = [];
  fileNum:any = 0;
  postResponse:any;
  policiesGetObj:any = {};
  policiesPostObj:any = {};

  constructor(private formBuilder: FormBuilder, private ls: ListingService,
    private listingNavService: ListingNavService, private route: ActivatedRoute) {

  }

  policiesForm = this.formBuilder.group({
    maxStayLessThanThirty: false,
    numberOfDaysMaxStay: null,
    openAllYear: false,
    season: null,
    areThereLimitedFacilities: false,
    lfsLtdFacSummer: false,
    lfwLtdFacWinter: false,
    ageRestrictions: false,
    familyCamping: false,
    allowsTentCampers: false,
    doesNotAllowClassAMotorhomes: false,
    doesNotAllowClassBMotorhomes: false,
    doesNotAllowClassCMotorhomes: false,
    rvAgeRestrictions: null,
    petsOk: false,
    petRestrictions: false,
    size: false,
    quantity: false,
    breed: false,
    petPaid: false
  })

  ngOnInit(): void {
    this.route.snapshot.paramMap.get('fileNumber');
    this.fileNum = this.route.snapshot.paramMap.get('fileNumber');
    this.policiesGetObj = this.route.snapshot.data['data'];
    if (this.policiesGetObj != null) {
      for(let [key, value] of Object.entries(this.policiesGetObj)) {
        if(value == 'f') {
            this.policiesGetObj[key] = false;
        }
        if(value == 't') {
            this.policiesGetObj[key] = true;
        } 
        if (key == 'size' && value == 't') {
          if (!this.petRestrictionsOpts.includes(key)) {
            this.petRestrictionsOpts.push(key)
          }
        } else if (key == 'size' && value == 'f') {
          if (this.petRestrictionsOpts.includes(key)) {
            this.petRestrictionsOpts = this.petRestrictionsOpts.filter(option => option !== key)
          }
        }
        if (key == 'quantity' && value == 't') {
          if (!this.petRestrictionsOpts.includes(key)) {
            this.petRestrictionsOpts.push(key)
          }
        } else if (key == 'quantity' && value == 'f') {
          if (this.petRestrictionsOpts.includes(key)) {
            this.petRestrictionsOpts = this.petRestrictionsOpts.filter(option => option !== key)
          }
        }
        if (key == 'breed' && value == 't') {
          if (!this.petRestrictionsOpts.includes(key)) {
            this.petRestrictionsOpts.push(key)
          }
        } else if (key == 'breed' && value == 'f') {
          if (this.petRestrictionsOpts.includes(key)) {
            this.petRestrictionsOpts = this.petRestrictionsOpts.filter(option => option !== key)
          }
        }
      }
      this.policiesForm.patchValue({
        maxStayLessThanThirty: this.policiesGetObj.maxStayLessThanThirty,
        numberOfDaysMaxStay: this.policiesGetObj.numberOfDaysMaxStay,
        openAllYear: this.policiesGetObj.openAllYear,
        season: JSON.parse(this.policiesGetObj.season),
        areThereLimitedFacilities: this.policiesGetObj.areThereLimitedFacilities,
        lfsLtdFacSummer: this.policiesGetObj.lfsLtdFacSummer,
        lfwLtdFacWinter: this.policiesGetObj.lfwLtdFacWinter,
        ageRestrictions: this.policiesGetObj.ageRestrictions,
        familyCamping: this.policiesGetObj.familyCamping,
        allowsTentCampers: this.policiesGetObj.allowsTentCampers,
        doesNotAllowClassAMotorhomes: this.policiesGetObj.doesNotAllowClassAMotorhomes,
        doesNotAllowClassBMotorhomes: this.policiesGetObj.doesNotAllowClassBMotorhomes,
        doesNotAllowClassCMotorhomes: this.policiesGetObj.doesNotAllowClassCMotorhomes,
        rvAgeRestrictions: this.policiesGetObj.rvAgeRestrictions,
        petsOk: this.policiesGetObj.petsOk,
        petRestrictions: this.policiesGetObj.petRestrictions,
        size: this.policiesGetObj.size,
        quantity: this.policiesGetObj.quantity,
        breed: this.policiesGetObj.breed,
        petPaid: this.policiesGetObj.petPaid
      });
    } 
  }

  onSubmit(): void {
    this.submitted = true;
      const formValidators = [
        this.noPetsRestrictions
      ]
      let invalidValidators = 0
      formValidators.forEach(invalid => { if (invalid == true) invalidValidators++ })
      if (invalidValidators == 0 && this.policiesForm.valid) {
          this.postForm();
          this.sendFormStatus(['policiesFormStatus', 2]);
      } else {
          this.sendFormStatus(['policiesFormStatus', 1]);
          return;
      }
  }

  clearChanges() {
    this.submitted = false;
    if (this.policiesGetObj != null) {
      this.policiesForm.patchValue({
        maxStayLessThanThirty: this.policiesGetObj.maxStayLessThanThirty,
        numberOfDaysMaxStay: this.policiesGetObj.numberOfDaysMaxStay,
        openAllYear: this.policiesGetObj.openAllYear,
        season: this.policiesGetObj.season,
        areThereLimitedFacilities: this.policiesGetObj.areThereLimitedFacilities,
        lfsLtdFacSummer: this.policiesGetObj.lfsLtdFacSummer,
        lfwLtdFacWinter: this.policiesGetObj.lfwLtdFacWinter,
        ageRestrictions: this.policiesGetObj.ageRestrictions,
        familyCamping: this.policiesGetObj.familyCamping,
        allowsTentCampers: this.policiesGetObj.allowsTentCampers,
        doesNotAllowClassAMotorhomes: this.policiesGetObj.doesNotAllowClassAMotorhomes,
        doesNotAllowClassBMotorhomes: this.policiesGetObj.doesNotAllowClassBMotorhomes,
        doesNotAllowClassCMotorhomes: this.policiesGetObj.doesNotAllowClassCMotorhomes,
        rvAgeRestrictions: this.policiesGetObj.rvAgeRestrictions,
        petsOk: this.policiesGetObj.petsOk,
        petRestrictions: this.policiesGetObj.petRestrictions,
        size: this.policiesGetObj.size,
        quantity: this.policiesGetObj.quantity,
        breed: this.policiesGetObj.breed,
        petPaid: this.policiesGetObj.petPaid
      });
      this.petRestrictionsOpts = [];
      for(let [key, value] of Object.entries(this.policiesGetObj)) {
        if (key == 'size' && value == true) {
          if (!this.petRestrictionsOpts.includes(key)) {
            this.petRestrictionsOpts.push(key)
          }
        }
        if (key == 'quantity' && value == true) {
          if (!this.petRestrictionsOpts.includes(key)) {
            this.petRestrictionsOpts.push(key)
          }
        }
        if (key == 'breed' && value == true) {
          if (!this.petRestrictionsOpts.includes(key)) {
            this.petRestrictionsOpts.push(key)
          }
        }
      }
    } else {
        this.policiesForm.reset({
          maxStayLessThanThirty: false,
          numberOfDaysMaxStay: null,
          openAllYear: false,
          season: null,
          areThereLimitedFacilities: false,
          lfsLtdFacSummer: false,
          lfwLtdFacWinter: false,
          ageRestrictions: false,
          familyCamping: false,
          allowsTentCampers: false,
          doesNotAllowClassAMotorhomes: false,
          doesNotAllowClassBMotorhomes: false,
          doesNotAllowClassCMotorhomes: false,
          rvAgeRestrictions: null,
          petsOk: false,
          petRestrictions: false,
          size: false,
          quantity: false,
          breed: false,
          petPaid: false
        });
        this.isLessThan30Days = false
        this.openAllYear = false
        this.petsAllowed = false
        this.limitedFacilities = false
        this.petsRestrictions = false
        this.petRestrictionsOpts = [];
    }
  }

  sendFormStatus(value: any) {
    this.listingNavService.updateFormStatus(value)
  }
  postForm() {
    this.policiesPostObj = this.policiesForm.value;
    if(this.policiesForm.value.season != null) {
      this.seasonToString = JSON.stringify(this.policiesForm.value.season)
    }
    for(let [key, value] of Object.entries(this.policiesPostObj)) {
      if(value === false) {
        this.policiesPostObj[key] = 'f';
      }
      if(value === true) {
        this.policiesPostObj[key] = 't';
      }
      if(key == 'season' && value != null) {
        this.policiesPostObj[key] = this.seasonToString;
      }
    }
    this.ls.postPolicies(this.policiesPostObj, this.fileNum).subscribe(response => {
      if(response){
        this.postResponse = response;
      }
    })
  }
  
  limitedFacilitiesChecked(radio: string) {
    console.log(radio)
    if(radio == 'lfsLtdFacSummer') {
      this.policiesForm.patchValue({
        lfsLtdFacSummer: true,
        lfwLtdFacWinter: false
      })
    } else if(radio == 'lfwLtdFacWinter') {
      this.policiesForm.patchValue({
        lfsLtdFacSummer: false,
        lfwLtdFacWinter: true
      })
    }
    console.log(this.policiesForm.value)
  }

  checkBoxIsLessThan30Days(cb: any) {
    this.isLessThan30Days = !this.isLessThan30Days;
    if(this.isLessThan30Days == false) {
      this.policiesForm.patchValue({
        numberOfDaysMaxStay: null
      })
    }
  }

  checkBoxOpenAllYear(cb: any) {
    this.openAllYear = !this.openAllYear;
    if (this.openAllYear == false) {
      this.limitedFacilities = false
      this.policiesForm.patchValue({
        areThereLimitedFacilities: false,
        lfsLtdFacSummer: false,
        lfwLtdFacWinter: false
      })
    }
    if (this.openAllYear == true) {
      this.policiesForm.patchValue({
        season: null
      })
    }
  }

  checkBoxLimitedFacilities(cb: any) {
    this.limitedFacilities = !this.limitedFacilities;
    if(this.limitedFacilities == false) {
      this.policiesForm.patchValue({
        lfsLtdFacSummer: false,
        lfwLtdFacWinter: false
      })
    }
  }

  checkBoxPetsAllowed(cb: any) {
    this.petsAllowed = !this.petsAllowed;
    if (this.petsAllowed == false) {
      this.petsRestrictions = false
      this.petRestrictionsOpts = []
      this.policiesForm.patchValue({
        petRestrictions: false,
        size: false,
        quantity: false,
        breed: false,
        petPaid: false
      })
    }
  }

  checkBoxPetsRestrictions(cb: any) {
    this.petsRestrictions = !this.petsRestrictions;
    if (this.petsRestrictions == false) {
      this.petRestrictionsOpts = []
    }
  }

  optionChecked(checkbox: string) {
    if (!this.petRestrictionsOpts.includes(checkbox)) {
      this.petRestrictionsOpts.push(checkbox)
    } else {
      this.petRestrictionsOpts = this.petRestrictionsOpts.filter(petRestrictionsOpts => petRestrictionsOpts !== checkbox)
    }
  }

  get noPetsRestrictions() {
    if (this.petsRestrictions && this.petRestrictionsOpts.length == 0) {
      return true
    } else { return false }
  }

}
