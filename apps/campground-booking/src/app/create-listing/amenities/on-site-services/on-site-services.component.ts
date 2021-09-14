import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    selector: 'on-site-services',
    templateUrl: './on-site-services.component.html',
    styleUrls: ['./on-site-services.component.css']
})
export class OnSiteServicesComponent implements OnInit {
    onSiteServices!: FormGroup;
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

    constructor() {

    }

    ngOnInit() {
        this.onSiteServices = new FormGroup({

        });
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