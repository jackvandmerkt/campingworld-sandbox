import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'tenting-rentals',
    templateUrl: './tenting-rentals.component.html',
    styleUrls: ['./tenting-rentals.component.css']
})
export class TentingRentalsComponent {
    otherOptions: string[] = [];
    submitted: boolean = false;
    //toggle variables
    tentSites: boolean = false;
    tentingArea: boolean = false;
    rentalSites: boolean = false;
    tentPetsAllowed: boolean = false;
    tentPetsAllowedCost: boolean = false;
    tyPetsAllowed: boolean = false;
    tyPetsAllowedCost: boolean = false;
    rvPetsAllowed: boolean = false;
    rvPetsAllowedCost: boolean = false;
    rvLinensAvail: boolean = false;
    rvLinensAvailCost: boolean = false;
    ccthPetsAllowed: boolean = false;
    ccthPetsAllowedCost: boolean = false;
    ccthLinensAvail: boolean = false;
    ccthLinensAvailCost: boolean = false;
    lrPetsAllowed: boolean = false;
    lrPetsAllowedCost: boolean = false;
    lrLinensAvail: boolean = false;
    lrLinensAvailCost: boolean = false;

    numFieldsArray = ['numTentRentals','numTeepeeYurts','numRVParkModels','numCabinsCottagesTinyHouses',
    'numLodgeRooms','tentSleepUpTo','tentMinStayNumOfDays','tentDailyRateFrom','tentDailyRateTo','tySleepUpTo',
    'tyMinStayNumOfDays','tyDailyRateFrom','tyDailyRateTo','rvSleepUpTo','rvMinStayNumOfDays','rvDailyRateFrom',
    'rvDailyRateTo','ccthSleepUpTo','ccthMinStayNumOfDays','ccthDailyRateFrom','ccthDailyRateTo','lrSleepUpTo',
    'lrMinStayNumOfDays','lrDailyRateFrom','lrDailyRateTo']
    requiredOnlyArray = ['rvBath', 'rvKitchen', 'ccthBath', 'ccthKitchen', 'lrBath', 'lrKitchen']

    constructor(private formBuilder: FormBuilder) {

    }

    // form object
    tentingRentalsForm = this.formBuilder.group({
        toggleTentSites: false,
        toggleTentingArea: false,
        numTentSites: '',
        numTentOnlySites: '',
        otherOptions: this.formBuilder.group({
            otherOption1: false, otherOption2: false, otherOption3: false, otherOption4: false
        }),
        toggleRentalSites: false,
        rentalDescription: '',
        numTentRentals: '',
        numTeepeeYurts: '',
        numRVParkModels: '',
        numCabinsCottagesTinyHouses: '',
        numLodgeRooms: '',
        tentSleepUpTo: '',
        tentMinStayNumOfDays: '',
        tentDailyRateFrom: '',
        tentDailyRateTo: '',
        toggleTentPetsAllowed: false,
        toggleTentPetsAllowedCost: false,
        tySleepUpTo: '',
        tyMinStayNumOfDays: '',
        tyDailyRateFrom: '',
        tyDailyRateTo: '',
        toggleTYPetsAllowed: false,
        toggleTYPetsAllowedCost: false,
        rvSleepUpTo: '',
        rvMinStayNumOfDays: '',
        rvDailyRateFrom: '',
        rvDailyRateTo: '',
        rvBath: '',
        rvKitchen: '',
        toggleRVPetsAllowed: false,
        toggleRVPetsAllowedCost: false,
        toggleRVLinensAvail: false,
        toggleRVLinensAvailCost: false,
        ccthSleepUpTo: '',
        ccthMinStayNumOfDays: '',
        ccthDailyRateFrom: '',
        ccthDailyRateTo: '',
        ccthBath: '',
        ccthKitchen: '',
        toggleCCTHPetsAllowed: false,
        toggleCCTHPetsAllowedCost: false,
        toggleCCTHLinensAvail: false,
        toggleCCTHLinensAvailCost: false,
        lrSleepUpTo: '',
        lrMinStayNumOfDays: '',
        lrDailyRateFrom: '',
        lrDailyRateTo: '',
        lrBath: '',
        lrKitchen: '',
        toggleLRPetsAllowed: false,
        toggleLRPetsAllowedCost: false,
        toggleLRLinensAvail: false,
        toggleLRLinensAvailCost: false
    });

    onSubmit(): void {
        this.submitted = true;
        if(this.tentingRentalsForm.valid) {
            console.log(this.tentingRentalsForm.value);
        } else {
            console.log('not valid');
            return;
        }
    }
    
    get f() { return this.tentingRentalsForm.controls; }


    clearChanges() {
        this.tentingRentalsForm.reset();
        this.submitted = false;
        //resetting toggle text to no
        this.tentSites = false;
        this.tentingArea = false;
        this.rentalSites = false;
        this.tentPetsAllowed = false;
        this.tentPetsAllowedCost = false;
        this.tyPetsAllowed = false;
        this.tyPetsAllowedCost = false;
        this.rvPetsAllowed = false;
        this.rvPetsAllowedCost = false;
        this.rvLinensAvail = false;
        this.rvLinensAvailCost = false;
        this.ccthPetsAllowed = false;
        this.ccthPetsAllowedCost = false;
        this.ccthLinensAvail = false;
        this.ccthLinensAvailCost = false;
        this.lrPetsAllowed = false;
        this.lrPetsAllowedCost = false;
        this.lrLinensAvail = false;
        this.lrLinensAvailCost = false;
        this.otherOptions = [];

        // clearing conditional validation on form reset
        this.tentingRentalsForm.get('numTentSites')?.clearValidators();
        this.tentingRentalsForm.get('numTentOnlySites')?.clearValidators();
        this.tentingRentalsForm.get('rentalDescription')?.clearValidators();
        this.tentingRentalsForm.get('numTentSites')?.updateValueAndValidity();
        this.tentingRentalsForm.get('numTentOnlySites')?.updateValueAndValidity();
        this.tentingRentalsForm.get('rentalDescription')?.updateValueAndValidity();
        this.numFieldsArray.forEach((field: string) => {
            this.tentingRentalsForm.get(field)?.clearValidators();
            this.tentingRentalsForm.get(field)?.updateValueAndValidity();
        });
        this.requiredOnlyArray.forEach((field: string) => {
            this.tentingRentalsForm.get(field)?.clearValidators();
            this.tentingRentalsForm.get(field)?.updateValueAndValidity();
        });

    }

    // Other Multi check radios
    otherChecked(radio: any) {
        if (!this.otherOptions.includes(radio)) {
            this.otherOptions.push(radio)
          } else {
            this.otherOptions = this.otherOptions.filter(option => option !== radio)
          }
    }
    // Tent sites? toggle
    checkBoxTentSitesChange(cb:any) {
        this.tentSites = !this.tentSites;
        if(this.tentSites === true){
            this.tentingRentalsForm.get('numTentSites')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.tentingRentalsForm.get('numTentOnlySites')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.tentingRentalsForm.get('numTentSites')?.updateValueAndValidity();
            this.tentingRentalsForm.get('numTentOnlySites')?.updateValueAndValidity();
            
        } if(this.tentSites === false) {
            this.tentingRentalsForm.get('numTentSites')?.clearValidators();
            this.tentingRentalsForm.get('numTentOnlySites')?.clearValidators();
            this.tentingRentalsForm.get('numTentSites')?.updateValueAndValidity();
            this.tentingRentalsForm.get('numTentOnlySites')?.updateValueAndValidity();
        }
    }
    // Dedicated tenting area toggle
    checkBoxTentingAreaChange(cb:any) {
        this.tentingArea = !this.tentingArea;
    }

    // Rentals? toggle
    checkBoxRentalsSitesChange(cb:any) {
        this.rentalSites = !this.rentalSites;
        if(this.rentalSites === true){
            this.tentingRentalsForm.get('rentalDescription')?.setValidators([Validators.required]);
            this.tentingRentalsForm.get('rentalDescription')?.updateValueAndValidity();
            // setting required and number validation on all inputs if "Are there rental sites?" toggle is yes
            this.numFieldsArray.forEach((field: string) => {
                this.tentingRentalsForm.get(field)?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
                this.tentingRentalsForm.get(field)?.updateValueAndValidity();
            });
            // setting required only validation on all inputs if "Are there rental sites?" toggle is yes
            this.requiredOnlyArray.forEach((field: string) => {
                this.tentingRentalsForm.get(field)?.setValidators([Validators.required]);
                this.tentingRentalsForm.get(field)?.updateValueAndValidity();
            });
            
        } if(this.rentalSites === false) {
            this.tentingRentalsForm.get('rentalDescription')?.clearValidators();
            this.tentingRentalsForm.get('rentalDescription')?.updateValueAndValidity();
            // clearing required and number validation on all inputs if "Are there rental sites?" toggle is no
            this.numFieldsArray.forEach((field: string) => {
                this.tentingRentalsForm.get(field)?.clearValidators();
                this.tentingRentalsForm.get(field)?.updateValueAndValidity();
            });
            // clearing required only validation on all inputs if "Are there rental sites?" toggle is no
            this.requiredOnlyArray.forEach((field: string) => {
                this.tentingRentalsForm.get(field)?.clearValidators();
                this.tentingRentalsForm.get(field)?.updateValueAndValidity();
            });
        }
    }

    // Tent Rentals toggles
    checkBoxTentPetsAllowedChange(cb:any) {
        this.tentPetsAllowed = !this.tentPetsAllowed;
    }
    checkBoxTentPetsAllowedCostChange(cb:any) {
        this.tentPetsAllowedCost = !this.tentPetsAllowedCost;
    }

    // Teepee Yurts Rentals toggles
    checkBoxTYPetsAllowedChange(cb:any) {
        this.tyPetsAllowed = !this.tyPetsAllowed;
    }
    checkBoxTYPetsAllowedCostChange(cb:any) {
        this.tyPetsAllowedCost = !this.tyPetsAllowedCost;
    }

    // RV Park Model Rentals toggles
    checkBoxRVPetsAllowedChange(cb:any) {
        this.rvPetsAllowed = !this.rvPetsAllowed;
    }
    checkBoxRVPetsAllowedCostChange(cb:any) {
        this.rvPetsAllowedCost = !this.rvPetsAllowedCost;
    }
    checkBoxRVLinensAvailChange(cb:any) {
        this.rvLinensAvail = !this.rvLinensAvail;
    }
    checkBoxRVLinensAvailCostChange(cb:any) {
        this.rvLinensAvailCost = !this.rvLinensAvailCost;
    }

    // Cabin, Cottage, Tiny House Rentals toggles
    checkBoxCCTHPetsAllowedChange(cb:any) {
        this.ccthPetsAllowed = !this.ccthPetsAllowed;
    }
    checkBoxCCTHPetsAllowedCostChange(cb:any) {
        this.ccthPetsAllowedCost = !this.ccthPetsAllowedCost;
    }
    checkBoxCCTHLinensAvailChange(cb:any) {
        this.ccthLinensAvail = !this.ccthLinensAvail;
    }
    checkBoxCCTHLinensAvailCostChange(cb:any) {
        this.ccthLinensAvailCost = !this.ccthLinensAvailCost;
    }

    // Lodge Rentals toggles
    checkBoxLRPetsAllowedChange(cb:any) {
        this.lrPetsAllowed = !this.lrPetsAllowed;
    }
    checkBoxLRPetsAllowedCostChange(cb:any) {
        this.lrPetsAllowedCost = !this.lrPetsAllowedCost;
    }
    checkBoxLRLinensAvailChange(cb:any) {
        this.lrLinensAvail = !this.lrLinensAvail;
    }
    checkBoxLRLinensAvailCostChange(cb:any) {
        this.lrLinensAvailCost = !this.lrLinensAvailCost;
    }
}