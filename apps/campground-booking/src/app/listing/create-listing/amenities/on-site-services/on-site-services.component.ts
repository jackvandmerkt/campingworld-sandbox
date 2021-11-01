import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: 'on-site-services',
    templateUrl: './on-site-services.component.html',
    styleUrls: ['./on-site-services.component.css']
})
export class OnSiteServicesComponent {
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

    constructor(private formBuilder: FormBuilder) {

    }

    // form object
    onSiteServices = this.formBuilder.group({
      dumpingStationGs1: false, mobileSewerService: false, laundry: false, partialHandicapAccess: false,
      controlAccessGate: false, emergencyPhone: false, centralInternetHU: false, centralInternetHUPaid: false,
      wifiHotspot: false, wifiHotspotPaid: false, wifiHotspotCount: null, wifiWirelessInternet: false,
      wifiWirelessPaid: false, wifiWirelessMobile: false, wifiWirelessStreaming: false, wifiWirelessSupport: false,
      wifiOvernightSites: false, wifiOvernightSitesPaid: false, atmMachine: false, boatStorage: false,
      bbqAtSite: false, cableMajor: false, cableMinor: false, offerCarRentals: false, churchServices: false,
      cocktailLounge: false, complimentaryBreakfast: false, dvdRentals: false, evChargingStation: false,
      evChargingStationPlanned: false, entertainment: false, faxCopyService: false, firewood: false, fireRings: false,
      fishingGuides: false, fishingLicenses: false, fishingSupplies: false, golfCarts: false, groceries: false,
      guestServices: false, horseCorral: false, ice: false, libraryBookExchange: false, lpBottlesOnly: false,
      meteredLpGas: false, mailDelivery: false, newspaper: false, onsiteRvService: false, patiosYes: false,
      personalEscortToSite: false, restaurant: false, rvSuppliesGs1: false, secureRvStorage: false,
      selfServRvWash: false, staffedRvWash: false, shuttleService: false, snackBar: false, spaServices: false, tableAtSite: false,
      tourShowTickets: false, trashPickupAtSite: false, dogPark: false, dogWalkingServices: false, dogWashingStation: false,
      enclosedDogRun: false, petBoarding: false, petGrooming: false, petSitting: false, petSuppliesInStore: false,
      otherServicesMinor: null, otherServicesMajor: null
    });
  
  onSubmit(): void {
      console.log(this.onSiteServices.value);
  }
  clearChanges() {
    this.onSiteServices.reset();
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
    }
    checkBoxOvernightCentralInternetChargeChange(cb:any) {
      this.overnightCentralInternetCharge = !this.overnightCentralInternetCharge;
    }
}