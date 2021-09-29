import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'tenting-rentals',
    templateUrl: './tenting-rentals.component.html',
    styleUrls: ['./tenting-rentals.component.css']
})
export class TentingRentalsComponent {
    otherOptions: string[] = [];
    submitted: boolean = true;
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
            this.tentingRentalsForm.get('numTentSites')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('numTentOnlySites')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            //update validators
            this.tentingRentalsForm.get('numTentSites')?.updateValueAndValidity()
            this.tentingRentalsForm.get('numTentOnlySites')?.updateValueAndValidity()
            
        } else {
            this.tentingRentalsForm.get('numTentSites')?.clearValidators()
            this.tentingRentalsForm.get('numTentOnlySites')?.clearValidators()
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
            this.tentingRentalsForm.get('rentalDescription')?.setValidators([Validators.required])
            this.tentingRentalsForm.get('numTentRentals')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('numTeepeeYurts')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('numRVParkModels')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('numCabinsCottagesTinyHouses')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('numLodgeRooms')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('tentSleepUpTo')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('tentMinStayNumOfDays')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('tentDailyRateFrom')?.setValidators([Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")])
            this.tentingRentalsForm.get('tentDailyRateTo')?.setValidators([Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")])
            this.tentingRentalsForm.get('tySleepUpTo')?.setValidators([Validators.required])
            this.tentingRentalsForm.get('tyMinStayNumOfDays')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('tyDailyRateFrom')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('tyDailyRateTo')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('rvSleepUpTo')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('rvMinStayNumOfDays')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('rvDailyRateFrom')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('rvDailyRateTo')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('rvBath')?.setValidators([Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")])
            this.tentingRentalsForm.get('rvKitchen')?.setValidators([Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")])
            this.tentingRentalsForm.get('ccthSleepUpTo')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('ccthMinStayNumOfDays')?.setValidators([Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")])
            this.tentingRentalsForm.get('ccthDailyRateFrom')?.setValidators([Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")])
            this.tentingRentalsForm.get('ccthDailyRateTo')?.setValidators([Validators.required])
            this.tentingRentalsForm.get('ccthBath')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('ccthKitchen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('lrSleepUpTo')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('lrMinStayNumOfDays')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('lrDailyRateFrom')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('lrDailyRateTo')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.tentingRentalsForm.get('lrBath')?.setValidators([Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")])
            this.tentingRentalsForm.get('lrKitchen')?.setValidators([Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")])

            //update validators
            this.tentingRentalsForm.get('rentalDescription')?.updateValueAndValidity()
            this.tentingRentalsForm.get('numTentRentals')?.updateValueAndValidity()
            this.tentingRentalsForm.get('numTeepeeYurts')?.updateValueAndValidity()
            this.tentingRentalsForm.get('numRVParkModels')?.updateValueAndValidity()
            this.tentingRentalsForm.get('numCabinsCottagesTinyHouses')?.updateValueAndValidity()
            this.tentingRentalsForm.get('numLodgeRooms')?.updateValueAndValidity()
            this.tentingRentalsForm.get('tentSleepUpTo')?.updateValueAndValidity()
            this.tentingRentalsForm.get('tentMinStayNumOfDays')?.updateValueAndValidity()
            this.tentingRentalsForm.get('tentDailyRateFrom')?.updateValueAndValidity()
            this.tentingRentalsForm.get('tentDailyRateTo')?.updateValueAndValidity()
            this.tentingRentalsForm.get('tySleepUpTo')?.updateValueAndValidity()
            this.tentingRentalsForm.get('tyMinStayNumOfDays')?.updateValueAndValidity()
            this.tentingRentalsForm.get('tyDailyRateFrom')?.updateValueAndValidity()
            this.tentingRentalsForm.get('tyDailyRateTo')?.updateValueAndValidity()
            this.tentingRentalsForm.get('rvSleepUpTo')?.updateValueAndValidity()
            this.tentingRentalsForm.get('rvMinStayNumOfDays')?.updateValueAndValidity()
            this.tentingRentalsForm.get('rvDailyRateFrom')?.updateValueAndValidity()
            this.tentingRentalsForm.get('rvDailyRateTo')?.updateValueAndValidity()
            this.tentingRentalsForm.get('rvBath')?.updateValueAndValidity()
            this.tentingRentalsForm.get('rvKitchen')?.updateValueAndValidity()
            this.tentingRentalsForm.get('ccthSleepUpTo')?.updateValueAndValidity()
            this.tentingRentalsForm.get('ccthMinStayNumOfDays')?.updateValueAndValidity()
            this.tentingRentalsForm.get('ccthDailyRateFrom')?.updateValueAndValidity()
            this.tentingRentalsForm.get('ccthDailyRateTo')?.updateValueAndValidity()
            this.tentingRentalsForm.get('ccthBath')?.updateValueAndValidity()
            this.tentingRentalsForm.get('ccthKitchen')?.updateValueAndValidity()
            this.tentingRentalsForm.get('lrSleepUpTo')?.updateValueAndValidity()
            this.tentingRentalsForm.get('lrMinStayNumOfDays')?.updateValueAndValidity()
            this.tentingRentalsForm.get('lrDailyRateFrom')?.updateValueAndValidity()
            this.tentingRentalsForm.get('lrDailyRateTo')?.updateValueAndValidity()
            this.tentingRentalsForm.get('lrBath')?.updateValueAndValidity()
            this.tentingRentalsForm.get('lrKitchen')?.updateValueAndValidity()
            
        } else {
            this.tentingRentalsForm.get('rentalDescription')?.clearValidators()
            this.tentingRentalsForm.get('numTentRentals')?.clearValidators()
            this.tentingRentalsForm.get('numTeepeeYurts')?.clearValidators()
            this.tentingRentalsForm.get('numRVParkModels')?.clearValidators()
            this.tentingRentalsForm.get('numCabinsCottagesTinyHouses')?.clearValidators()
            this.tentingRentalsForm.get('numLodgeRooms')?.clearValidators()
            this.tentingRentalsForm.get('tentSleepUpTo')?.clearValidators()
            this.tentingRentalsForm.get('tentMinStayNumOfDays')?.clearValidators()
            this.tentingRentalsForm.get('tentDailyRateFrom')?.clearValidators()
            this.tentingRentalsForm.get('tentDailyRateTo')?.clearValidators()
            this.tentingRentalsForm.get('tySleepUpTo')?.clearValidators()
            this.tentingRentalsForm.get('tyMinStayNumOfDays')?.clearValidators()
            this.tentingRentalsForm.get('tyDailyRateFrom')?.clearValidators()
            this.tentingRentalsForm.get('tyDailyRateTo')?.clearValidators()
            this.tentingRentalsForm.get('rvSleepUpTo')?.clearValidators()
            this.tentingRentalsForm.get('rvMinStayNumOfDays')?.clearValidators()
            this.tentingRentalsForm.get('rvDailyRateFrom')?.clearValidators()
            this.tentingRentalsForm.get('rvDailyRateTo')?.clearValidators()
            this.tentingRentalsForm.get('rvBath')?.clearValidators()
            this.tentingRentalsForm.get('rvKitchen')?.clearValidators()
            this.tentingRentalsForm.get('ccthSleepUpTo')?.clearValidators()
            this.tentingRentalsForm.get('ccthMinStayNumOfDays')?.clearValidators()
            this.tentingRentalsForm.get('ccthDailyRateFrom')?.clearValidators()
            this.tentingRentalsForm.get('ccthDailyRateTo')?.clearValidators()
            this.tentingRentalsForm.get('ccthBath')?.clearValidators()
            this.tentingRentalsForm.get('ccthKitchen')?.clearValidators()
            this.tentingRentalsForm.get('lrSleepUpTo')?.clearValidators()
            this.tentingRentalsForm.get('lrMinStayNumOfDays')?.clearValidators()
            this.tentingRentalsForm.get('lrDailyRateFrom')?.clearValidators()
            this.tentingRentalsForm.get('lrDailyRateTo')?.clearValidators()
            this.tentingRentalsForm.get('lrBath')?.clearValidators()
            this.tentingRentalsForm.get('lrKitchen')?.clearValidators()
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