import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { ListingNavService } from 'apps/campground-booking/src/app/shared/listing-nav.service';
import { IAllRefs } from 'apps/campground-booking/src/app/shared/listing.model';
import { ListingService } from 'apps/campground-booking/src/app/shared/listing.service';

@Component({
  selector: 'recreation',
  templateUrl: './recreation.component.html',
  styleUrls: ['./recreation.component.css']
})
export class RecreationComponent implements OnInit {
  allRefsTmp:any;
  allRefsObj!: IAllRefs[];
  familyActivitiesFromService: any = {};
  option: string[] = [];
  nearby: string[] = [];
  hunting: string[] = [];
  huntingSeason: string[] = [];
  isRecreationChecked = false;
  isOpenChecked = false;
  isCasinoChecked = false;
  isHuntingSeasonChecked = false;
  submitted = false;

  fileNum:any = 0;
  postResponse:any;
  currentListing:any= {};
  recreationGetObj:any = {};
  recreationPostObj:any = {};

  @ViewChild('plannedFamilyActivitiesId') private plannedFamilyActivitiesCSS!: ElementRef;

  constructor(private formBuilder: FormBuilder, private ls: ListingService,
    private listingNavService: ListingNavService, private route: ActivatedRoute) {

  }

  recreationForm = this.formBuilder.group({
    archeryRange: false, badminton: false, basketball: false, bikeRentals: false, billiardRoom: false,
    poolRoom1Table: false, bocceBall: false, bouncePillow: false, childrensActivities: false, enclosedGameRoom: false,
    enclosedRecreationHall: false, exerciseRoom: false, frisbeeGolf: false, golf: false, horsebackRiding: false,
    horseshoes: false, ladderBall: false, lawnBowling: false,lawnChess: false, miniGolfNonPro: false, miniGolfPro: false,
    natureTrails: false, outdoorGames: false, pavilion: false, pedalCarts: false, pickleBall: false, plannedActivities: false,
    playground: false, puttingGreen: false, sauna: false, shuffleboard: false, oneShuffleboard: false, softball: false,
    tennis: false, touristAttractions: false, volleyball: false, casinoOnSite: false, 
    fileNumber: [null], 
    displayName: [null],
    archeryRangeNearby: false,atvRidingNearby: false, casinoNearby: false, hikingNearby: false, mountainBikingNearby: false, 
    roadBikingTrailsNearby: false, rockClimbingNearby: false, snowSportsNearby: false, things: false, huntingNearby: false, 
    cleaningFacilities: false, meatStorageFacilities: false, huntingLicenses: false, huntingGuideServices: false, 
    huntingSeasonYearRound: false, huntingWinter: false, huntingSpring: false, huntingSummer: false, huntingFall: false, 
    otherRecMajor: null,
    otherRecMinor: null, 
    eventsCalendarUrl: null, 
    plannedFamilyActivitiesId: null
  })

  ngOnInit() {
    this.route.snapshot.paramMap.get('fileNumber');
    this.fileNum = this.route.snapshot.paramMap.get('fileNumber');
    this.getFormDropDownData();
    this.recreationGetObj = this.route.snapshot.data['data'];
    if (this.recreationGetObj != null) {
      this.currentListing = this.recreationGetObj;
      for(let [key, value] of Object.entries(this.currentListing)) {
          if(value == 'f') {
              this.currentListing[key] = false;
          }
          if(value == 't') {
              this.currentListing[key] = true;
          }
      }
      console.log('this.currentListing before patchvalue inside if (this.recreationGetObj != null) in ngoninit')
      console.log(this.currentListing)
      this.recreationForm.patchValue({
        archeryRange: this.currentListing.archeryRange, poolRoom1Table: this.currentListing.poolRoom1Table, enclosedRecreationHall: this.currentListing.enclosedRecreationHall,
        horseshoes: this.currentListing.horseshoes, natureTrails: this.currentListing.natureTrails, playground: this.currentListing.playground,
        tennis: this.currentListing.tennis, fileNumber: this.currentListing.fileNumber, displayName: this.currentListing.displayName,
        archeryRangeNearby: this.currentListing.archeryRangeNearby, roadBikingTrailsNearby: this.currentListing.roadBikingTrailsNearby, 
        cleaningFacilities: this.currentListing.cleaningFacilities, huntingSeasonYearRound: this.currentListing.huntingSeasonYearRound,
        otherRecMajor: this.currentListing.otherRecMajor, otherRecMinor: this.currentListing.otherRecMinor, eventsCalendarUrl: this.currentListing.eventsCalendarUrl,
        plannedFamilyActivitiesId: this.currentListing.plannedFamilyActivitiesId, badminton: this.currentListing.badminton, bocceBall: this.currentListing.bocceBall,
        exerciseRoom: this.currentListing.exerciseRoom, ladderBall: this.currentListing.ladderBall, outdoorGames: this.currentListing.outdoorGames,
        puttingGreen: this.currentListing.puttingGreen, touristAttractions: this.currentListing.touristAttractions, basketball: this.currentListing.basketball,
        bouncePillow: this.currentListing.bouncePillow, frisbeeGolf: this.currentListing.frisbeeGolf, lawnBowling: this.currentListing.lawnBowling,
        pavilion: this.currentListing.pavilion, sauna: this.currentListing.sauna, volleyball: this.currentListing.volleyball,
        bikeRentals: this.currentListing.bikeRentals, childrensActivities: this.currentListing.childrensActivities, golf: this.currentListing.golf,
        lawnChess: this.currentListing.lawnChess, pedalCarts: this.currentListing.pedalCarts, shuffleboard: this.currentListing.shuffleboard,
        casinoOnSite: this.currentListing.casinoOnSite, billiardRoom: this.currentListing.billiardRoom, enclosedGameRoom: this.currentListing.enclosedGameRoom,
        horsebackRiding: this.currentListing.horsebackRiding, miniGolfNonPro: this.currentListing.miniGolfNonPro, pickleBall: this.currentListing.pickleBall,
        oneShuffleboard: this.currentListing.oneShuffleboard, miniGolfPro: this.currentListing.miniGolfPro, plannedActivities: this.currentListing.plannedActivities,
        softball: this.currentListing.softball, atvRidingNearby: this.currentListing.atvRidingNearby, rockClimbingNearby: this.currentListing.rockClimbingNearby,
        meatStorageFacilities: this.currentListing.meatStorageFacilities, huntingWinter: this.currentListing.huntingWinter, casinoNearby: this.currentListing.casinoNearby,
        snowSportsNearby: this.currentListing.snowSportsNearby, huntingLicenses: this.currentListing.huntingLicenses, huntingSpring: this.currentListing.huntingSpring,
        hikingNearby: this.currentListing.hikingNearby, things: this.currentListing.things, huntingGuideServices: this.currentListing.huntingGuideServices,
        huntingSummer: this.currentListing.huntingSummer, mountainBikingNearby: this.currentListing.mountainBikingNearby,
        huntingNearby: this.currentListing.huntingNearby, huntingFall: this.currentListing.huntingFall
      });
      if(this.currentListing.casinoOnSite == true){
          this.isCasinoChecked = true;
      }
      if(this.currentListing.huntingSeasonYearRound == true){
          this.isHuntingSeasonChecked = true;
      }
    } 
  }
  ngAfterViewInit() {
      this.setAttributes();
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.recreationForm.valid && this.dualShuffleboard == false) {
        console.log('this.recreationForm.value inside onSubmit if valid');
        console.log(this.recreationForm.value);
        this.postForm();
        this.sendFormStatus(['recreationFormStatus', 2]);
    } else {
        console.log('not valid');
        console.log('this.recreationForm.value inside onSubmit if invalid');
        console.log(this.recreationForm.value);
        this.sendFormStatus(['recreationFormStatus', 1]);
        return;
    }
  }
  get f() { return this.recreationForm.controls; }

  clearChanges() {
    this.submitted = false;
    if (this.recreationGetObj != null) {
      this.recreationForm.patchValue({
        archeryRange: this.currentListing.archeryRange, poolRoom1Table: this.currentListing.poolRoom1Table, enclosedRecreationHall: this.currentListing.enclosedRecreationHall,
        horseshoes: this.currentListing.horseshoes, natureTrails: this.currentListing.natureTrails, playground: this.currentListing.playground,
        tennis: this.currentListing.tennis, fileNumber: this.currentListing.fileNumber, displayName: this.currentListing.displayName,
        archeryRangeNearby: this.currentListing.archeryRangeNearby, roadBikingTrailsNearby: this.currentListing.roadBikingTrailsNearby, 
        cleaningFacilities: this.currentListing.cleaningFacilities, huntingSeasonYearRound: this.currentListing.huntingSeasonYearRound,
        otherRecMajor: this.currentListing.otherRecMajor, otherRecMinor: this.currentListing.otherRecMinor, eventsCalendarUrl: this.currentListing.eventsCalendarUrl,
        plannedFamilyActivitiesId: this.currentListing.plannedFamilyActivitiesId, badminton: this.currentListing.badminton, bocceBall: this.currentListing.bocceBall,
        exerciseRoom: this.currentListing.exerciseRoom, ladderBall: this.currentListing.ladderBall, outdoorGames: this.currentListing.outdoorGames,
        puttingGreen: this.currentListing.puttingGreen, touristAttractions: this.currentListing.touristAttractions, basketball: this.currentListing.basketball,
        bouncePillow: this.currentListing.bouncePillow, frisbeeGolf: this.currentListing.frisbeeGolf, lawnBowling: this.currentListing.lawnBowling,
        pavilion: this.currentListing.pavilion, sauna: this.currentListing.sauna, volleyball: this.currentListing.volleyball,
        bikeRentals: this.currentListing.bikeRentals, childrensActivities: this.currentListing.childrensActivities, golf: this.currentListing.golf,
        lawnChess: this.currentListing.lawnChess, pedalCarts: this.currentListing.pedalCarts, shuffleboard: this.currentListing.shuffleboard,
        casinoOnSite: this.currentListing.casinoOnSite, billiardRoom: this.currentListing.billiardRoom, enclosedGameRoom: this.currentListing.enclosedGameRoom,
        horsebackRiding: this.currentListing.horsebackRiding, miniGolfNonPro: this.currentListing.miniGolfNonPro, pickleBall: this.currentListing.pickleBall,
        oneShuffleboard: this.currentListing.oneShuffleboard, miniGolfPro: this.currentListing.miniGolfPro, plannedActivities: this.currentListing.plannedActivities,
        softball: this.currentListing.softball, atvRidingNearby: this.currentListing.atvRidingNearby, rockClimbingNearby: this.currentListing.rockClimbingNearby,
        meatStorageFacilities: this.currentListing.meatStorageFacilities, huntingWinter: this.currentListing.huntingWinter, casinoNearby: this.currentListing.casinoNearby,
        snowSportsNearby: this.currentListing.snowSportsNearby, huntingLicenses: this.currentListing.huntingLicenses, huntingSpring: this.currentListing.huntingSpring,
        hikingNearby: this.currentListing.hikingNearby, things: this.currentListing.things, huntingGuideServices: this.currentListing.huntingGuideServices,
        huntingSummer: this.currentListing.huntingSummer, mountainBikingNearby: this.currentListing.mountainBikingNearby,
        huntingNearby: this.currentListing.huntingNearby, huntingFall: this.currentListing.huntingFall
      }); 
      this.setAttributes();
      if(!this.currentListing.huntingSeasonYearRound){
          this.isHuntingSeasonChecked = false;
      } else{
          this.isHuntingSeasonChecked = true;
      }
      if(!this.currentListing.casinoOnSite){
          this.isCasinoChecked = false;
      } else{
          this.isCasinoChecked = true;
      }
    } else {
        this.recreationForm.reset({
          archeryRange: false, badminton: false, basketball: false, bikeRentals: false, billiardRoom: false,
          poolRoom1Table: false, bocceBall: false, bouncePillow: false, childrensActivities: false, enclosedGameRoom: false,
          enclosedRecreationHall: false, exerciseRoom: false, frisbeeGolf: false, golf: false, horsebackRiding: false,
          horseshoes: false, ladderBall: false, lawnBowling: false,lawnChess: false, miniGolfNonPro: false, miniGolfPro: false,
          natureTrails: false, outdoorGames: false, pavilion: false, pedalCarts: false, pickleBall: false, plannedActivities: false,
          playground: false, puttingGreen: false, sauna: false, shuffleboard: false, oneShuffleboard: false, softball: false,
          tennis: false, touristAttractions: false, volleyball: false, casinoOnSite: false, 
          fileNumber: [null],
          displayName: [null],
          archeryRangeNearby: false,atvRidingNearby: false, casinoNearby: false, hikingNearby: false, mountainBikingNearby: false, 
          roadBikingTrailsNearby: false, rockClimbingNearby: false, snowSportsNearby: false, things: false, huntingNearby: false, 
          cleaningFacilities: false, meatStorageFacilities: false, huntingLicenses: false, huntingGuideServices: false, 
          huntingSeasonYearRound: false, huntingWinter: false, huntingSpring: false, huntingSummer: false, huntingFall: false, 
          otherRecMajor: null,
          otherRecMinor: null, 
          eventsCalendarUrl: null, 
          plannedFamilyActivitiesId: null
        });
        this.option = [];
        this.nearby = [];
        this.hunting = [];
        this.huntingSeason = [];
        this.isRecreationChecked = false;
        this.isOpenChecked = false;
        this.isCasinoChecked = false;
        this.isHuntingSeasonChecked = false;
        this.setAttributes();
    }
  }

  getFormDropDownData() {
    this.allRefsTmp = window.localStorage.getItem('all-refs');
    this.allRefsObj = JSON.parse(this.allRefsTmp);
    for(let [key, value] of Object.entries(this.allRefsObj)) {
        if(key === 'plannedFamilyActivities') {
            this.familyActivitiesFromService = value;
        }
    }
  }

  setAttributes(){
    if (this.currentListing != null) {
      for(let [key, value] of Object.entries(this.currentListing)) {
        if(key === 'plannedFamilyActivitiesId') {
            this.plannedFamilyActivitiesCSS.nativeElement.setAttribute('value', value) 
        }
      }
    } else {
        this.plannedFamilyActivitiesCSS.nativeElement.setAttribute('value', null)
    }  
  }
  sendFormStatus(value: any) {
      this.listingNavService.updateFormStatus(value)
  }
  postForm() {
    this.recreationPostObj = this.recreationForm.value;
    for(let [key, value] of Object.entries(this.recreationPostObj)) {
        if(value === false) {
            this.recreationPostObj[key] = 'f';
        }
        if(value === true) {
            this.recreationPostObj[key] = 't';
        }
    }
    this.ls.postRecreation(this.recreationPostObj, this.fileNum).subscribe(response => {
      if(response){
        this.postResponse = response;
      }
    })
  }

  checkBoxRecreationChange(cb: any) {
    this.isRecreationChecked = !this.isRecreationChecked;
    if (!this.isRecreationChecked) {
      this.isOpenChecked = false
    }
  }

  checkBoxOpenChange(cb: any) {
    this.isOpenChecked = !this.isOpenChecked;
  }

  checkBoxCasinoChange(cb: any) {
    this.isCasinoChecked = !this.isCasinoChecked;
    // add validations for displayName and filenumber
  }

  checkBoxHuntingSeasonChange(cb: any) {
    this.isHuntingSeasonChecked = !this.isHuntingSeasonChecked;
    if(this.isHuntingSeasonChecked == true) {
      
    }
  }

  get dualShuffleboard() { 
    if ((this.recreationForm.value.shuffleboard == true && this.recreationForm.value.oneShuffleboard == true) ||
        (this.recreationForm.value.shuffleboard == 't' && this.recreationForm.value.oneShuffleboard == 't')) { 
      return true 
    } else 
    return false 
  }
}
