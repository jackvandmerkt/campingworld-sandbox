import { Component } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

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
    wifiHotspots: boolean = false;
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
      basicOptions: this.formBuilder.group({
        basicOption1: false, basicOption2: false, basicOption3: false, basicOption4: false
      }),
      securityOptions: this.formBuilder.group({
        securityOption1: false, securityOption2: false
      }),
      toggleCentralInternet: false,
      toggleCentralInternetCharge: false,
      toggleWiFiHotspots: false,
      toggleWiFiHotspotsCharge: false,
      howManyHotspots: '',
      toggleWiFi: false,
      toggleWiFiCharge: false,
      toggleMobileDevices: false,
      toggleStreamingSupport: false,
      toggleWiFiTechSupport: false,
      toggleOvernightCentralInternet: false,
      toggleOvernightCentralInternetCharge: false,
      howManySitesHaveWiFi: '',
      numDevicesSupported: '',
      otherOptions: this.formBuilder.group({
        otherOption1: false, otherOption2: false, otherOption3: false, otherOption4: false,
        otherOption5: false, otherOption6: false, otherOption7: false, otherOption8: false,
        otherOption9: false, otherOption10: false, otherOption11: false, otherOption12: false,
        otherOption13: false, otherOption14: false, otherOption15: false, otherOption16: false,
        otherOption17: false, otherOption18: false, otherOption19: false, otherOption20: false,
        otherOption21: false, otherOption22: false, otherOption23: false, otherOption24: false,
        otherOption25: false, otherOption26: false, otherOption27: false, otherOption28: false,
        otherOption29: false, otherOption30: false, otherOption31: false, otherOption32: false,
        otherOption33: false, otherOption34: false, otherOption35: false, otherOption36: false,
        otherOption37: false, otherOption38: false, otherOption39: false, otherOption40: false,
        otherOption41: false, otherOption42: false, otherOption43: false
      }),
      petOptions: this.formBuilder.group({
        petOption1: false, petOption2: false, petOption3: false, petOption4: false,
        petOption5: false, petOption6: false, petOption7: false, petOption8: false
      }),
      otherServicesMajor: '',
      otherServicesMinor: ''
    });
  
  onSubmit(): void {
      console.log(this.onSiteServices.value);
  }
  clearChanges() {
    this.onSiteServices.reset();
    //resetting toggle text to no
    this.centralInternet = false;
    this.centralInternetCharge = false;
    this.wifiHotspots = false;
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
      this.wifiHotspots = !this.wifiHotspots;
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