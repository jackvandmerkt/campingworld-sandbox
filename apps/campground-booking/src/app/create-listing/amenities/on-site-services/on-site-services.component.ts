import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    selector: 'on-site-services',
    templateUrl: './on-site-services.component.html',
    styleUrls: ['./on-site-services.component.css']
})
export class OnSiteServicesComponent implements OnInit {
    onSiteServices!: FormGroup;
    basicFacilitiesOptions: string[] = [];
    securityOptions: string[] = [];
    otherServicesOptions: string[] = [];
    centralInternet: boolean = false;
    wifiHotspots: boolean = false;
    wifi: boolean = false;
    overnightCentralInternet: boolean = false;
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

    checkBoxCentralInternetChange(cb:any) {
        this.centralInternet = !this.centralInternet;
    }
    checkBoxWiFiHotspotsChange(cb:any) {
        this.wifiHotspots = !this.wifiHotspots;
    }
    checkBoxWiFiChange(cb:any) {
        this.wifi = !this.wifi;
    }
    checkBoxOvernightCentralInternetChange(cb:any) {
        this.overnightCentralInternet = !this.overnightCentralInternet;
    }
}