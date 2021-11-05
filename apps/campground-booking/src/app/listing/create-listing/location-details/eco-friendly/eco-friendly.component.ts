import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListingNavService } from 'apps/campground-booking/src/app/shared/listing-nav.service';
import { ListingService } from 'apps/campground-booking/src/app/shared/listing.service';

@Component({
  selector: 'eco-friendly',
  templateUrl: './eco-friendly.component.html',
  styleUrls: ['./eco-friendly.component.css']
})
export class EcoFriendlyComponent implements OnInit {
  submitted: boolean = false;
  option: string[] = [];
  isParkGreenCount: number = 0;
  isParkGreen:boolean = false;

  fileNum:any = 0;
  postResponse:any;
  ecoFriendlyGetObj:any = {};
  ecoFriendlyPostObj:any = {};

  constructor(private formBuilder: FormBuilder, private ls: ListingService,
    private listingNavService: ListingNavService, private route: ActivatedRoute) { }

  // form object
  ecoFriendlyForm = this.formBuilder.group({
    green: [{value: false, disabled: true}],
    nonToxicCleaningProducts: false,
    naturalPestControl: false,
    minimizedStyrofoamAndPlastic: false,
    droughtTolerantIndigenousPlants: false,
    recyclingCansForRvers: false,
    compactFlourescentLights: false,
    insulatedWaterHeaters: false,
    loweredPoolTemperatures: false,
    installedPhotocells: false,
    fuelEfficientVehicles: false,
    encouragingUseOfBikesTrikes: false,
    tanklessWaterHeaters: false,
    composting: false
  });

  ngOnInit(): void {
    this.route.snapshot.paramMap.get('fileNumber');
    this.fileNum = this.route.snapshot.paramMap.get('fileNumber');
    this.ecoFriendlyGetObj = this.route.snapshot.data['data'];
    if (this.ecoFriendlyGetObj != null) {
      this.isParkGreenCount = 0;
      for(let [key, value] of Object.entries(this.ecoFriendlyGetObj)) {
        if(value == 'f') {
            this.ecoFriendlyGetObj[key] = false;
        }
        if(value == 't') {
            this.ecoFriendlyGetObj[key] = true;
        } 
        if (key != 'green' && value == 't') {
          if (!this.option.includes(key)) {
            this.option.push(key)
            this.isParkGreenCount++;
          }
        }
        if (key != 'green' && value == 'f') {
          if (this.option.includes(key)) {
            this.option = this.option.filter(option => option !== key)
            this.isParkGreenCount--;
          }
        }
      }
      this.ecoFriendlyForm.patchValue({
        green: this.ecoFriendlyGetObj.green,
        nonToxicCleaningProducts: this.ecoFriendlyGetObj.nonToxicCleaningProducts,
        naturalPestControl: this.ecoFriendlyGetObj.naturalPestControl,
        minimizedStyrofoamAndPlastic: this.ecoFriendlyGetObj.minimizedStyrofoamAndPlastic,
        droughtTolerantIndigenousPlants: this.ecoFriendlyGetObj.droughtTolerantIndigenousPlants,
        recyclingCansForRvers: this.ecoFriendlyGetObj.recyclingCansForRvers,
        compactFlourescentLights: this.ecoFriendlyGetObj.compactFlourescentLights,
        insulatedWaterHeaters: this.ecoFriendlyGetObj.insulatedWaterHeaters,
        loweredPoolTemperatures: this.ecoFriendlyGetObj.loweredPoolTemperatures,
        installedPhotocells: this.ecoFriendlyGetObj.installedPhotocells,
        fuelEfficientVehicles: this.ecoFriendlyGetObj.fuelEfficientVehicles,
        encouragingUseOfBikesTrikes: this.ecoFriendlyGetObj.encouragingUseOfBikesTrikes,
        tanklessWaterHeaters: this.ecoFriendlyGetObj.tanklessWaterHeaters,
        composting: this.ecoFriendlyGetObj.composting
      });
      if(this.ecoFriendlyGetObj.green == true){
          this.isParkGreen = true;
      } else if(this.ecoFriendlyGetObj.green == true) {
        this.isParkGreen = false;
      }
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.ecoFriendlyForm.valid) {
      this.postForm();
      this.sendFormStatus(['ecoFriendlyFormStatus', 2]);
    } else {
      this.sendFormStatus(['ecoFriendlyFormStatus', 1]);
      return;
    }
}

  clearChanges() {
    this.submitted = false;
    if (this.ecoFriendlyGetObj != null) {
      this.ecoFriendlyForm.patchValue({
        green: this.ecoFriendlyGetObj.green,
        nonToxicCleaningProducts: this.ecoFriendlyGetObj.nonToxicCleaningProducts,
        naturalPestControl: this.ecoFriendlyGetObj.naturalPestControl,
        minimizedStyrofoamAndPlastic: this.ecoFriendlyGetObj.minimizedStyrofoamAndPlastic,
        droughtTolerantIndigenousPlants: this.ecoFriendlyGetObj.droughtTolerantIndigenousPlants,
        recyclingCansForRvers: this.ecoFriendlyGetObj.recyclingCansForRvers,
        compactFlourescentLights: this.ecoFriendlyGetObj.compactFlourescentLights,
        insulatedWaterHeaters: this.ecoFriendlyGetObj.insulatedWaterHeaters,
        loweredPoolTemperatures: this.ecoFriendlyGetObj.loweredPoolTemperatures,
        installedPhotocells: this.ecoFriendlyGetObj.installedPhotocells,
        fuelEfficientVehicles: this.ecoFriendlyGetObj.fuelEfficientVehicles,
        encouragingUseOfBikesTrikes: this.ecoFriendlyGetObj.encouragingUseOfBikesTrikes,
        tanklessWaterHeaters: this.ecoFriendlyGetObj.tanklessWaterHeaters,
        composting: this.ecoFriendlyGetObj.composting
      });
      this.option = [];
      this.isParkGreenCount = 0;
      for(let [key, value] of Object.entries(this.ecoFriendlyGetObj)) {
        if (key != 'green' && value == true) {
          if (!this.option.includes(key)) {
            this.option.push(key)
            this.isParkGreenCount++;
          }
        }
        if (key != 'green' && value == false) {
          if (this.option.includes(key)) {
            this.option = this.option.filter(option => option !== key)
            this.isParkGreenCount--;
          }
        }
        if(this.isParkGreenCount >= 3) {
          this.ecoFriendlyForm.patchValue({
            green: true
          })
          this.isParkGreen = true;
        } else if (this.isParkGreenCount < 3) {
          this.ecoFriendlyForm.patchValue({
            green: false
          })
          this.isParkGreen = false;
        }
      }
    } else {
        this.ecoFriendlyForm.reset({
          green: false,
          nonToxicCleaningProducts: false,
          naturalPestControl: false,
          minimizedStyrofoamAndPlastic: false,
          droughtTolerantIndigenousPlants: false,
          recyclingCansForRvers: false,
          compactFlourescentLights: false,
          insulatedWaterHeaters: false,
          loweredPoolTemperatures: false,
          installedPhotocells: false,
          fuelEfficientVehicles: false,
          encouragingUseOfBikesTrikes: false,
          tanklessWaterHeaters: false,
          composting: false
        });
        this.option = [];
        this.isParkGreenCount = 0;
        this.isParkGreen = false;
    }
  }

  sendFormStatus(value: any) {
    this.listingNavService.updateFormStatus(value)
  }
  postForm() {
    this.ecoFriendlyPostObj = this.ecoFriendlyForm.value;
      for(let [key, value] of Object.entries(this.ecoFriendlyPostObj)) {
        if(value === false) {
          this.ecoFriendlyPostObj[key] = 'f';
        }
        if(value === true) {
          this.ecoFriendlyPostObj[key] = 't';
        }
      }
    this.ls.postEcoFriendly(this.ecoFriendlyPostObj, this.fileNum).subscribe(response => {
      if(response){
        this.postResponse = response;
      }
    })
  }


  optionChecked(radio: string) {
    if (!this.option.includes(radio)) {
      this.option.push(radio)
      this.isParkGreenCount++;
    } else {
      this.option = this.option.filter(option => option !== radio)
      this.isParkGreenCount--;
    }
    console.log(this.isParkGreenCount)
    if(this.isParkGreenCount >= 3) {
      this.ecoFriendlyForm.patchValue({
        green: true
      })
      this.isParkGreen = true;
    } else if (this.isParkGreenCount < 3) {
      this.ecoFriendlyForm.patchValue({
        green: false
      })
      this.isParkGreen = false;
    }
  }
}
