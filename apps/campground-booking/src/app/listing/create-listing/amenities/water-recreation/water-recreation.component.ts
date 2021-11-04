import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { ListingNavService } from 'apps/campground-booking/src/app/shared/listing-nav.service';
import { ListingService } from 'apps/campground-booking/src/app/shared/listing.service';

@Component({
  selector: 'water-recreation',
  templateUrl: './water-recreation.component.html',
  styleUrls: ['./water-recreation.component.css']
})
export class WaterRecreationComponent implements OnInit {
  submitted: boolean = false;
  option: string[] = [];
  bodyOfWater: string[] = [];

  fileNum:any = 0;
  postResponse:any;
  currentListing:any= {};
  waterRecreationGetObj:any = {};
  waterRecreationPostObj:any = {};

  constructor(private formBuilder: FormBuilder, private ls: ListingService,
    private listingNavService: ListingNavService, private route: ActivatedRoute) {}

  waterRecreationForm = this.formBuilder.group({
    swimPool: false, heatedPool: false, poolPaid: false, whirlPool: false, 
    wadingPool: false, splashPad: false, waterSlide: false, waterUmbrella: false, 
    bodyOfWater: null, 
    ocean: false, gulf: false, river: false, stream: false, lake: false, 
    pond: false, fishing: false, kayaking: false, swimming: false, 
    watersports: false, boatMarina: false, boatDock: false, boatRamp: false, 
    hpLimit: null, 
    electMotorsOnly: false, noMotors: false, boatRentals: false, paddleBoats: false, 
    boatingNearby: false, fishingNearby: false, houseboatingNearby: false,
    kayakingNearby: false, marinaNearby: false, watersportsNearby: false, raftingNearby: false
  })

  ngOnInit() {
    this.route.snapshot.paramMap.get('fileNumber');
    this.fileNum = this.route.snapshot.paramMap.get('fileNumber');
    this.waterRecreationGetObj = this.route.snapshot.data['data'];
    if (this.waterRecreationGetObj != null) {
      this.currentListing = this.waterRecreationGetObj;
      for(let [key, value] of Object.entries(this.currentListing)) {
          if(value == 'f') {
              this.currentListing[key] = false;
          }
          if(value == 't') {
              this.currentListing[key] = true;
          }
      }
      this.waterRecreationForm.patchValue({
        swimPool: this.currentListing.swimPool, heatedPool: this.currentListing.heatedPool, poolPaid: this.currentListing.poolPaid, 
        whirlPool: this.currentListing.whirlPool, wadingPool: this.currentListing.wadingPool, splashPad: this.currentListing.splashPad, 
        waterSlide: this.currentListing.waterSlide, waterUmbrella: this.currentListing.waterUmbrella, bodyOfWater: this.currentListing.bodyOfWater, 
        ocean: this.currentListing.ocean, gulf: this.currentListing.gulf, river: this.currentListing.river, stream: this.currentListing.steam, 
        lake: this.currentListing.lake, pond: this.currentListing.pond, fishing: this.currentListing.fishing, kayaking: this.currentListing.kayaking, 
        swimming: this.currentListing.swimming, watersports: this.currentListing.watersports, boatMarina: this.currentListing.boatMarina, 
        boatDock: this.currentListing.boatDock, boatRamp: this.currentListing.boatRamp, hpLimit: this.currentListing.hpLimit, 
        electMotorsOnly: this.currentListing.electMotorsOnly, noMotors: this.currentListing.noMotors, boatRentals: this.currentListing.boatRentals, 
        paddleBoats: this.currentListing.paddleBoats, boatingNearby: this.currentListing.boatingNearby, fishingNearby: this.currentListing.fishingNearby, 
        houseboatingNearby: this.currentListing.houseboatingNearby, kayakingNearby: this.currentListing.kayakingNearby, 
        marinaNearby: this.currentListing.marinaNearby, watersportsNearby: this.currentListing.watersportsNearby, raftingNearby: this.currentListing.raftingNearby
      });
    } 
  }

  onSubmit(): void {
    this.submitted = true;
    const formValidators = [
      this.moreThanOnePool,
      this.poolPaid,
      this.invalidBodyOfWater,
      this.invalidFishing,
      this.noBodyOfWater
    ]
    let invalidValidators = 0
    formValidators.forEach(invalid => { if (invalid == true) invalidValidators++ })
    if (invalidValidators == 0) {
      console.log(this.waterRecreationForm.value)
      this.postForm()
      this.sendFormStatus(['waterRecreationFormStatus', 2]);
    } else {
      console.log('not valid')
      this.sendFormStatus(['waterRecreationFormStatus', 1]);
    }

  }
  get f() { return this.waterRecreationForm.controls; }
  clearChanges(): void {
    if (this.waterRecreationGetObj != null) {
      this.waterRecreationForm.patchValue({
        swimPool: this.currentListing.swimPool, heatedPool: this.currentListing.heatedPool, poolPaid: this.currentListing.poolPaid, 
        whirlPool: this.currentListing.whirlPool, wadingPool: this.currentListing.wadingPool, splashPad: this.currentListing.splashPad, 
        waterSlide: this.currentListing.waterSlide, waterUmbrella: this.currentListing.waterUmbrella, bodyOfWater: this.currentListing.bodyOfWater, 
        ocean: this.currentListing.ocean, gulf: this.currentListing.gulf, river: this.currentListing.river, stream: this.currentListing.steam, 
        lake: this.currentListing.lake, pond: this.currentListing.pond, fishing: this.currentListing.fishing, kayaking: this.currentListing.kayaking, 
        swimming: this.currentListing.swimming, watersports: this.currentListing.watersports, boatMarina: this.currentListing.boatMarina, 
        boatDock: this.currentListing.boatDock, boatRamp: this.currentListing.boatRamp, hpLimit: this.currentListing.hpLimit, 
        electMotorsOnly: this.currentListing.electMotorsOnly, noMotors: this.currentListing.noMotors, boatRentals: this.currentListing.boatRentals, 
        paddleBoats: this.currentListing.paddleBoats, boatingNearby: this.currentListing.boatingNearby, fishingNearby: this.currentListing.fishingNearby, 
        houseboatingNearby: this.currentListing.houseboatingNearby, kayakingNearby: this.currentListing.kayakingNearby, 
        marinaNearby: this.currentListing.marinaNearby, watersportsNearby: this.currentListing.watersportsNearby, raftingNearby: this.currentListing.raftingNearby
      }); 
    } else {
        this.waterRecreationForm.reset({
          swimPool: false, heatedPool: false, poolPaid: false, whirlPool: false, 
          wadingPool: false, splashPad: false, waterSlide: false, waterUmbrella: false, 
          bodyOfWater: null, 
          ocean: false, gulf: false, river: false, stream: false, lake: false, 
          pond: false, fishing: false, kayaking: false, swimming: false, 
          watersports: false, boatMarina: false, boatDock: false, boatRamp: false, 
          hpLimit: null, 
          electMotorsOnly: false, noMotors: false, boatRentals: false, paddleBoats: false, 
          boatingNearby: false, fishingNearby: false, houseboatingNearby: false,
          kayakingNearby: false, marinaNearby: false, watersportsNearby: false, raftingNearby: false
        });
        this.option = [];
        this.bodyOfWater = [];
    }
  }
  sendFormStatus(value: any) {
    this.listingNavService.updateFormStatus(value)
  }
  postForm() {
    this.waterRecreationPostObj = this.waterRecreationForm.value;
    for(let [key, value] of Object.entries(this.waterRecreationPostObj)) {
        if(value === false) {
            this.waterRecreationPostObj[key] = 'f';
        }
        if(value === true) {
            this.waterRecreationPostObj[key] = 't';
        }
    }
    console.log(this.waterRecreationPostObj)
    this.ls.postWaterRecreation(this.waterRecreationPostObj, this.fileNum).subscribe(response => {
      if(response){
        this.postResponse = response;
      }
    })
  }

  optionChecked(checkbox: string) {
    if (!this.option.includes(checkbox)) {
      this.option.push(checkbox)
    } else {
      this.option = this.option.filter(option => option !== checkbox)
    }
  }

  bodyOfWaterChecked(checkbox: string) {
    if (!this.bodyOfWater.includes(checkbox)) {
      this.bodyOfWater.push(checkbox)
    } else {
      this.bodyOfWater = this.bodyOfWater.filter(bodyOfWater => bodyOfWater !== checkbox)
    }

  }

    // START VALIDATIONS --------------------------------------------------------------------------

    get moreThanOnePool() {
      const pools = ['1', '2', '4', '5']
      let poolValidator = 0
      pools.forEach(pool => this.option.forEach(optPool => pool == optPool ? poolValidator++ : ''))
      if (poolValidator > 1) {
        return true
      } else { return false }
    }
  
    get poolPaid() {
      const pools = ['1', '2']
      let poolValidator = 0
      pools.forEach(pool => this.option.forEach(optPool => pool == optPool ? poolValidator++ : ''))
      if (this.option.includes('3') && poolValidator < 1) {
        return true
      } else { return false }
    }
  
    get invalidBodyOfWater() {
      const bodyOfWaters = ['1', '2', '3', '4', '5', '6']
      let bodyOfWaterValidator = 0
      bodyOfWaters.forEach(bodyOfWater => { this.bodyOfWater.forEach(optBody => { if (bodyOfWater == optBody) { bodyOfWaterValidator++ } }) })
      if (bodyOfWaterValidator > 1) {
        return true
      } else { return false }
    }
  
    get invalidFishing() {
      const bodyOfWaters = ['1', '2', '3', '4', '5', '6']
      let bodyOfWaterValidator = 0
      bodyOfWaters.forEach(bodyOfWater => { this.bodyOfWater.forEach(optBody => { if (bodyOfWater == optBody) { bodyOfWaterValidator++ } }) })
      if (this.bodyOfWater.includes('7') && bodyOfWaterValidator < 1) {
        return true
      } else { return false }
    }
  
    get noBodyOfWater() {
      const bodyOfWaters = ['1', '2', '3', '4', '5', '6']
      let bodyOfWaterValidator = 0
      bodyOfWaters.forEach(bodyOfWater => { this.bodyOfWater.forEach(optBody => { if (bodyOfWater == optBody) { bodyOfWaterValidator++ } }) })
      if (this.waterRecreationForm.value.bodyOfWaterName == '' && bodyOfWaterValidator == 0) {
        return true
      } else { return false }
    }
  
    // END VALIDATIONS --------------------------------------------------------------------------
}