import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ListingNavService } from "apps/campground-booking/src/app/shared/listing-nav.service";
import { ListingService } from "apps/campground-booking/src/app/shared/listing.service";

@Component({
    selector: 'on-site-services',
    templateUrl: './on-site-services.component.html',
    styleUrls: ['./on-site-services.component.css']
})
export class OnSiteServicesComponent implements OnInit{
  submitted: boolean = false;
  // radio checkbox variables
  basicFacilitiesOptions: string[] = [];
  securityOptions: string[] = [];
  otherServicesOptions: string[] = [];
  petServicesOptions: string[] = [];

  // toggle button boolean variables
  centralInternet: boolean = false;
  centralInternetCharge: boolean = false;
  wifiHotspotBool: boolean = false;
  wifiHotspotsCharge: boolean = false;
  wifi: boolean = false;
  wifiCharge: boolean = false;
  mobileDevices: boolean = false;
  streamingSupport: boolean = false;
  wiFiTechSupport: boolean = false;
  overnightCentralInternet: boolean = false;
  overnightCentralInternetCharge: boolean = false;

  fileNum:any = 0;
  postResponse:any;
  currentListing:any= {};
  onSiteServicesGetObj:any = {};
  onSiteServicesPostObj:any = {};

  constructor(private formBuilder: FormBuilder, private ls: ListingService,
    private listingNavService: ListingNavService, private route: ActivatedRoute) {}

  // form object
  onSiteServices = this.formBuilder.group({
    dumpingStationGs1: false, mobileSewerService: false, laundry: false, partialHandicapAccess: false,
    controlAccessGate: false, emergencyPhone: false, centralInternetHU: false, centralInternetHUPaid: false,
    wifiHotspot: false, wifiHotspotPaid: false, 
    wifiHotspotCount: [null], 
    wifiWirelessInternet: false,
    wifiWirelessPaid: false, wifiWirelessMobile: false, wifiWirelessStreaming: false, wifiWirelessSupport: false,
    wifiOvernightSites: false, wifiOvernightSitesPaid: false,
    howManySitesHaveWiFi: [null],
    numDevicesSupported: [null],
    atmMachine: false, boatStorage: false,bbqAtSite: false, cableMajor: false, cableMinor: false, offerCarRentals: false, 
    churchServices: false, cocktailLounge: false, complimentaryBreakfast: false, dvdRentals: false, evChargingStation: false,
    evChargingStationPlanned: false, entertainment: false, faxCopyService: false, firewood: false, fireRings: false,
    fishingGuides: false, fishingLicenses: false, fishingSupplies: false, golfCarts: false, groceries: false,
    guestServices: false, horseCorral: false, ice: false, libraryBookExchange: false, lpBottlesOnly: false,
    meteredLpGas: false, mailDelivery: false, newspaper: false, onsiteRvService: false,  patiosYes: false, 
    personalEscortToSite: false, restaurant: false, rvSuppliesGs1: false, secureRvStorage: false, selfServRvWash: false, 
    staffedRvWash: false, shuttleService: false, snackBar: false, spaServices: false, tableAtSite: false,
    tourShowTickets: false, trashPickupAtSite: false, dogPark: false, dogWalkingServices: false, dogWashingStation: false,
    enclosedDogRun: false, petBoarding: false, petGrooming: false, petSitting: false, petSuppliesInStore: false,
    otherServicesMinor: null, 
    otherServicesMajor: null
  });

  ngOnInit() {
    this.route.snapshot.paramMap.get('fileNumber');
    this.onSiteServicesGetObj = this.route.snapshot.data['data'];
    if (this.onSiteServicesGetObj != null) {
      this.currentListing = this.onSiteServicesGetObj;
      for(let [key, value] of Object.entries(this.currentListing)) {
        if(value == 'f') {
            this.currentListing[key] = false;
        }
        if(value == 't') {
            this.currentListing[key] = true;
        }
      }
      this.onSiteServices.patchValue({
        dumpingStationGs1: this.currentListing.dumpingStationGs1, mobileSewerService: this.currentListing.mobileSewerService, 
        laundry: this.currentListing.laundry, partialHandicapAccess: this.currentListing.partialHandicapAccess,
        controlAccessGate: this.currentListing.controlAccessGate, emergencyPhone: this.currentListing.emergencyPhone, 
        centralInternetHU: this.currentListing.centralInternetHU, centralInternetHUPaid: this.currentListing.centralInternetHUPaid,
        wifiHotspot: this.currentListing.wifiHotspot, wifiHotspotPaid: this.currentListing.wifiHotspotPaid, wifiHotspotCount: this.currentListing.wifiHotspotCount, 
        wifiWirelessInternet: this.currentListing.wifiWirelessInternet, wifiWirelessPaid: this.currentListing.wifiWirelessPaid, 
        wifiWirelessMobile: this.currentListing.wifiWirelessMobile, wifiWirelessStreaming: this.currentListing.wifiWirelessStreaming, 
        wifiWirelessSupport: this.currentListing.wifiWirelessSupport, wifiOvernightSites: this.currentListing.wifiOvernightSites, wifiOvernightSitesPaid: this.currentListing.wifiOvernightSitesPaid,
        howManySitesHaveWiFi: this.currentListing.howManySitesHaveWiFi, numDevicesSupported: this.currentListing.numDevicesSupported,
        atmMachine: this.currentListing.atmMachine, boatStorage: this.currentListing.boatStorage, bbqAtSite: this.currentListing.bbqAtSite, 
        cableMajor: this.currentListing.cableMajor, cableMinor: this.currentListing.cableMinor, offerCarRentals: this.currentListing.offerCarRentals, 
        churchServices: this.currentListing.churchServices, cocktailLounge: this.currentListing.cocktailLounge, complimentaryBreakfast: 
        this.currentListing.complimentaryBreakfast, dvdRentals: this.currentListing.dvdRentals, evChargingStation: this.currentListing.evChargingStation,
        evChargingStationPlanned: this.currentListing.evChargingStationPlanned, entertainment: this.currentListing.entertainment, 
        faxCopyService: this.currentListing.faxCopyService, firewood: this.currentListing.firewood, fireRings: this.currentListing.fireRings,
        fishingGuides: this.currentListing.fishingGuides, fishingLicenses: this.currentListing.fishingLicenses, fishingSupplies: this.currentListing.fishingSupplies, 
        golfCarts: this.currentListing.golfCarts, groceries: this.currentListing.groceries, guestServices: this.currentListing.guestServices, 
        horseCorral: this.currentListing.horseCorral, ice: this.currentListing.ice, libraryBookExchange: this.currentListing.libraryBookExchange, 
        lpBottlesOnly: this.currentListing.lpBottlesOnly, meteredLpGas: this.currentListing.meteredLpGas, mailDelivery: this.currentListing.mailDelivery, 
        newspaper: this.currentListing.newspaper, onsiteRvService: this.currentListing.onsiteRvService,  patiosYes: this.currentListing.patiosYes, 
        personalEscortToSite: this.currentListing.personalEscortToSite, restaurant: this.currentListing.restaurant, 
        rvSuppliesGs1: this.currentListing.rvSuppliesGs1, secureRvStorage: this.currentListing.secureRvStorage, selfServRvWash: this.currentListing.selfServRvWash, 
        staffedRvWash: this.currentListing.staffedRvWash, shuttleService: this.currentListing.shuttleService,
        snackBar: this.currentListing.snackBar, spaServices: this.currentListing.spaServices, tableAtSite: this.currentListing.tableAtSite,
        tourShowTickets: this.currentListing.tourShowTickets, trashPickupAtSite: this.currentListing.trashPickupAtSite, 
        dogPark: this.currentListing.dogPark, dogWalkingServices: this.currentListing.dogWalkingServices, dogWashingStation: this.currentListing.dogWashingStation,
        enclosedDogRun: this.currentListing.enclosedDogRun, petBoarding: this.currentListing.petBoarding, 
        petGrooming: this.currentListing.petGrooming, petSitting: this.currentListing.petSitting, petSuppliesInStore: this.currentListing.petSuppliesInStore,
        otherServicesMinor: this.currentListing.otherServicesMinor, otherServicesMajor: this.currentListing.otherServicesMajor
      });
      if(this.currentListing.centralInternetHU == true){
          this.centralInternet = true;
      }
      if(this.currentListing.centralInternetHUPaid == true){
          this.centralInternetCharge = true;
      }
      if(this.currentListing.wifiHotspot == true){
          this.wifiHotspotBool = true;
      }
      if(this.currentListing.wifiHotspotPaid == true){
        this.wifiHotspotsCharge = true;
      }
      if(this.currentListing.wifiWirelessInternet == true){
          this.wifi = true;
      }
      if(this.currentListing.wifiWirelessPaid == true){
          this.wifiCharge = true;
      }
      if(this.currentListing.wifiWirelessMobile == true){
        this.mobileDevices = true;
      }
      if(this.currentListing.wifiWirelessStreaming == true){
          this.streamingSupport = true;
      }
      if(this.currentListing.wifiWirelessSupport == true){
          this.wiFiTechSupport = true;
      }
      if(this.currentListing.wifiOvernightSites == true){
        this.overnightCentralInternet = true;
      }
      if(this.currentListing.wifiOvernightSitesPaid == true){
        this.overnightCentralInternetCharge = true;
      }
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.onSiteServices.valid) {
        console.log(this.onSiteServices.value);
        // this.postForm();
        this.sendFormStatus(['onSiteServicesFormStatus', 2]);
    } else {
        console.log('not valid');
        this.sendFormStatus(['onSiteServicesFormStatus', 1]);
        return;
    }
  }
  get f() { return this.onSiteServices.controls; }
  clearChanges() {
    this.onSiteServices.reset({
      dumpingStationGs1: false, mobileSewerService: false, laundry: false, partialHandicapAccess: false,
      controlAccessGate: false, emergencyPhone: false, centralInternetHU: false, centralInternetHUPaid: false,
      wifiHotspot: false, wifiHotspotPaid: false, wifiHotspotCount: null, wifiWirelessInternet: false,
      wifiWirelessPaid: false, wifiWirelessMobile: false, wifiWirelessStreaming: false, wifiWirelessSupport: false,
      wifiOvernightSites: false, wifiOvernightSitesPaid: false, howManySitesHaveWiFi: null,numDevicesSupported: null,
      atmMachine: false, boatStorage: false, bbqAtSite: false, cableMajor: false, cableMinor: false, offerCarRentals: false, 
      churchServices: false, cocktailLounge: false, complimentaryBreakfast: false, dvdRentals: false, evChargingStation: false,
      evChargingStationPlanned: false, entertainment: false, faxCopyService: false, firewood: false, fireRings: false,
      fishingGuides: false, fishingLicenses: false, fishingSupplies: false, golfCarts: false, groceries: false,
      guestServices: false, horseCorral: false, ice: false, libraryBookExchange: false, lpBottlesOnly: false,
      meteredLpGas: false, mailDelivery: false, newspaper: false, onsiteRvService: false,  patiosYes: false, 
      personalEscortToSite: false, restaurant: false, rvSuppliesGs1: false, secureRvStorage: false, selfServRvWash: false, 
      staffedRvWash: false, shuttleService: false, snackBar: false, spaServices: false, tableAtSite: false,
      tourShowTickets: false, trashPickupAtSite: false, dogPark: false, dogWalkingServices: false, dogWashingStation: false,
      enclosedDogRun: false, petBoarding: false, petGrooming: false, petSitting: false, petSuppliesInStore: false,
      otherServicesMinor: null, otherServicesMajor: null
    });
    //resetting toggle text to no
    this.centralInternet = false;
    this.centralInternetCharge = false;
    this.wifiHotspotBool = false;
    this.wifiHotspotsCharge = false;
    this.wifi = false;
    this.wifiCharge = false;
    this.mobileDevices = false;
    this.streamingSupport = false;
    this.wiFiTechSupport = false;
    this.overnightCentralInternet = false;
    this.overnightCentralInternetCharge = false;
    // resetting radios select all that apply lists
    this.basicFacilitiesOptions = [];
    this.securityOptions = [];
    this.otherServicesOptions = [];
    this.petServicesOptions = [];

  }
  sendFormStatus(value: any) {
    this.listingNavService.updateFormStatus(value)
  }
  postForm() {
    this.onSiteServicesPostObj = this.onSiteServices.value;
    for(let [key, value] of Object.entries(this.onSiteServicesPostObj)) {
        if(value === false) {
            this.onSiteServicesPostObj[key] = 'f';
        }
        if(value === true) {
            this.onSiteServicesPostObj[key] = 't';
        }
    }
    console.log(this.onSiteServicesPostObj)
    this.ls.postOnSiteServices(this.onSiteServicesPostObj, this.fileNum).subscribe(response => {
      if(response){
        this.postResponse = response;
      }
    })
  }

  basicFacilitiesChecked(radio: string) {
      if (!this.basicFacilitiesOptions.includes(radio)) {
        this.basicFacilitiesOptions.push(radio)
      } else {
        this.basicFacilitiesOptions = this.basicFacilitiesOptions.filter(option => option !== radio)
      }
  }

  securityChecked(radio: string) {
      if (!this.securityOptions.includes(radio)) {
        this.securityOptions.push(radio)
      } else {
        this.securityOptions = this.securityOptions.filter(option => option !== radio)
      }
  }

    otherServicesChecked(radio: string) {
        if (!this.otherServicesOptions.includes(radio)) {
          this.otherServicesOptions.push(radio)
        } else {
          this.otherServicesOptions = this.otherServicesOptions.filter(option => option !== radio)
        }
    }

    petServicesChecked(radio: string) {
      if (!this.petServicesOptions.includes(radio)) {
        this.petServicesOptions.push(radio)
      } else {
        this.petServicesOptions = this.petServicesOptions.filter(option => option !== radio)
      }
  }

  checkBoxCentralInternetChange(cb:any) {
    this.centralInternet = !this.centralInternet;
  }
  checkBoxCentralInternetChargeChange(cb:any) {
    this.centralInternetCharge = !this.centralInternetCharge;
  }

  checkBoxWiFiHotspotsChange(cb:any) {
    this.wifiHotspotBool = !this.wifiHotspotBool;
    if (this.wifiHotspotBool === true) {
      this.onSiteServices.get('wifiHotspotCount')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
      this.onSiteServices.get('wifiHotspotCount')?.updateValueAndValidity()
    } else {
      this.onSiteServices.get('wifiHotspotCount')?.clearValidators()
      this.onSiteServices.get('wifiHotspotCount')?.updateValueAndValidity()
      this.onSiteServices.controls['wifiHotspotCount'].reset()
    }
  }
  checkBoxWiFiHotspotsChargeChange(cb:any) {
    this.wifiHotspotsCharge = !this.wifiHotspotsCharge;
  }

  checkBoxWiFiChange(cb:any) {
    this.wifi = !this.wifi;
  }
  checkBoxWiFiChargeChange(cb:any) {
    this.wifiCharge = !this.wifiCharge;
  }

  checkBoxMobileDevicesChange(cb:any) {
    this.mobileDevices = !this.mobileDevices;
  }
  checkBoxStreamingSupportChange(cb:any) {
    this.streamingSupport = !this.streamingSupport;
  }
  checkBoxWiFiTechSupportChange(cb:any) {
    this.wiFiTechSupport = !this.wiFiTechSupport;
  }

  checkBoxOvernightCentralInternetChange(cb:any) {
    this.overnightCentralInternet = !this.overnightCentralInternet;
    if (this.overnightCentralInternet === true) {
      this.onSiteServices.get('howManySitesHaveWiFi')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
      this.onSiteServices.get('numDevicesSupported')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
      this.onSiteServices.get('howManySitesHaveWiFi')?.updateValueAndValidity()
      this.onSiteServices.get('numDevicesSupported')?.updateValueAndValidity()
    } else {
      this.onSiteServices.get('howManySitesHaveWiFi')?.clearValidators()
      this.onSiteServices.get('numDevicesSupported')?.clearValidators()
      this.onSiteServices.get('howManySitesHaveWiFi')?.updateValueAndValidity()
      this.onSiteServices.get('numDevicesSupported')?.updateValueAndValidity()
      this.onSiteServices.controls['howManySitesHaveWiFi'].reset()
      this.onSiteServices.controls['numDevicesSupported'].reset()
    }
  }
  checkBoxOvernightCentralInternetChargeChange(cb:any) {
    this.overnightCentralInternetCharge = !this.overnightCentralInternetCharge;
  }
}