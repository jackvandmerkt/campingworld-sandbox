import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { IAllRefs } from "../../../shared/listing.model";
import { ListingNavService } from "../../../shared/listing-nav.service";
import { ListingService } from "../../../shared/listing.service";

@Component({
    selector: 'ratings',
    templateUrl: './ratings.component.html',
    styleUrls: ['./ratings.component.css']
})

export class RatingsComponent implements OnInit{
    submitted: boolean = false;
    allRefsTmp:any;
    allRefsObj!: IAllRefs[];
    nonRatedCodesFromService: any = {};
    canParkBeRated: boolean = false;
    unHideFacilities: boolean = false;
    unHideRestrooms: boolean = false;
    unHideVisualAppearance: boolean = false;
    //used to loop through and set validations if park can be rated
    radiosArray = ['interiorRoadsRadio', 'registrationRadio', 'sitesRadio', 'hookupsRadio', 'recreationRadio', 'swimmingRadio',
    'securityRadio', 'laundryRadio','servicesRadio','internetAccessRadio','toiletsRadio','showersRadio','floorsRadio',
    'wallsRadio','scmRadio','interiorConstructionRadio','supplyOdorFreeRadio','amtOfFacilitiesRadio','extAppearanceRadio',
    'intAppearanceRadio','signageRadio','entranceAreaRadio','parkGroundsRadio','siteAppearanceRadio','litterDebrisRadio',
    'extBuildingMaintRadio','trashDisposalRadio','noiseRadio','parkSettingRadio','siteLayoutRadio']

    facilitiesOptions: {[index: string]:any} = {
        'interiorRoadsValue': 0,
        'registrationValue': 0,
        'sitesValue': 0,
        'hookupsValue': 0, 
        'recreationValue': 0,
        'swimmingValue': 0,
        'securityValue': 0,
        'laundryValue': 0,
        'servicesValue': 0,
        'internetAccessValue': 0
    };
    restroomsOptions: {[index: string]:any} = {
        'toiletsValue': 0,
        'showersValue': 0,
        'floorsValue': 0, 
        'wallsValue': 0, 
        'scmValue': 0,
        'interiorConstructionValue': 0,
        'supplyOdorFreeValue': 0,
        'amtOfFacilitiesValue': 0,
        'extAppearanceValue': 0,
        'intAppearanceValue': 0
    };
    visualAppearanceOptions: {[index: string]:any} = {
        'signageValue': 0,
        'entranceAreaValue': 0,
        'parkGroundsValue': 0, 
        'siteAppearanceValue': 0, 
        'litterDebrisValue':0,
        'extBuildingMaintValue': 0,
        'trashDisposalValue': 0,
        'noiseValue': 0,
        'parkSettingValue': 0,
        'siteLayoutValue': 0
    };
    facilitiesTotal:number =  0;
    restroomsTotal: number = 0;
    visualAppearanceTotal: number = 0;

    constructor(private formBuilder: FormBuilder, private ls: ListingService, 
        private listingNavService: ListingNavService) {

    }

    ngOnInit() {
        this.getFormDropDownData();
    }

    ratingsForm = this.formBuilder.group({
        toggleCanParkBeRated: false,
        nonRatedCode: ['', Validators.required],
        interiorRoadsRadio: '',
        registrationRadio: '',
        sitesRadio: '',
        hookupsRadio: '',
        recreationRadio: '',
        swimmingRadio: '',
        securityRadio: '',
        laundryRadio: '',
        servicesRadio: '',
        internetAccessRadio: '',
        toiletsRadio: '',
        showersRadio: '',
        floorsRadio: '',
        wallsRadio: '',
        scmRadio: '',
        interiorConstructionRadio: '',
        supplyOdorFreeRadio: '',
        amtOfFacilitiesRadio: '',
        extAppearanceRadio: '',
        intAppearanceRadio: '',
        uninspected: false,
        signageRadio: '',
        entranceAreaRadio: '',
        parkGroundsRadio: '',
        siteAppearanceRadio: '',
        litterDebrisRadio: '',
        extBuildingMaintRadio: '',
        trashDisposalRadio: '',
        noiseRadio: '',
        parkSettingRadio: '',
        siteLayoutRadio: ''
    });

    sendFormStatus(value: any) {
        this.listingNavService.updateFormStatus(value)
    }

    onSubmit(): void {
        this.submitted = true;
        if(this.ratingsForm.valid) {
            console.log(this.ratingsForm.value);
            this.sendFormStatus(['ratingsFormStatus', 2]);
        } else {
            console.log('not valid');
            this.sendFormStatus(['ratingsFormStatus', 1]);
            return;
        }
    }
    
    get f() { return this.ratingsForm.controls; }

    clearChanges() {
        this.ratingsForm.reset();
        this.submitted = false;
        this.canParkBeRated = false;
        this.unHideFacilities = false;
        this.unHideRestrooms = false;
        this.unHideVisualAppearance = false;
        this.sendFormStatus(['ratingsFormStatus', 0]);
        //resets radio button values
        for(let key of Object.keys(this.facilitiesOptions)) {
            this.facilitiesOptions[key] = "";
        }
        for(let key of Object.keys(this.restroomsOptions)) {
            this.restroomsOptions[key] = "";
        }
        for(let key of Object.keys(this.visualAppearanceOptions)) {
            this.visualAppearanceOptions[key] = "";
        }
        
        this.radiosArray.forEach((field: string) => {
            this.ratingsForm.get(field)?.clearValidators();
            this.ratingsForm.get(field)?.updateValueAndValidity();
        });
    }

    getFormDropDownData() {
        this.allRefsTmp = window.localStorage.getItem('all-refs');
        this.allRefsObj = JSON.parse(this.allRefsTmp);
        console.log(this.allRefsObj)
        for(let [key, value] of Object.entries(this.allRefsObj)) {
            if(key === 'nonRatedCodes') {
                this.nonRatedCodesFromService = value;
            }
        }
    }
    checkBoxCanParkBeRatedChange(cb:any) {
        this.canParkBeRated = !this.canParkBeRated;
        if (this.canParkBeRated === true) {
            this.ratingsForm.get('nonRatedCode')?.clearValidators()
            this.ratingsForm.get('nonRatedCode')?.updateValueAndValidity()
            // setting required validation on all radios if the park CAN be rated
            this.radiosArray.forEach((field: string) => {
                this.ratingsForm.get(field)?.setValidators([Validators.required]);
                this.ratingsForm.get(field)?.updateValueAndValidity();
            });
        } else {
            this.ratingsForm.get('nonRatedCode')?.setValidators([Validators.required])
            this.ratingsForm.get('nonRatedCode')?.updateValueAndValidity()
            // clearing required validation on all radios if the park CANNOT be rated
            this.radiosArray.forEach((field: string) => {
                this.ratingsForm.get(field)?.clearValidators();
                this.ratingsForm.get(field)?.updateValueAndValidity();
            });
            for(let key of Object.keys(this.facilitiesOptions)) {
                this.facilitiesOptions[key] = '';
            }
            this.ratingsForm.reset();

        }
    }

    facilitiesToggle() {
        this.unHideFacilities = !this.unHideFacilities;
    }
    restroomsToggle() {
        this.unHideRestrooms = !this.unHideRestrooms;
    }
    visualAppearanceToggle() {
        this.unHideVisualAppearance = !this.unHideVisualAppearance;
    }

    // Functions for Radio button images and section totals
    facilitiesGroupChecked(radio: string, radioValue: number) {
        for(let key of Object.keys(this.facilitiesOptions)) {
            if(key === radio) {
                this.facilitiesOptions[key] = radioValue;
            } 
        }
        let sum = 0;
        for (let key in this.facilitiesOptions) {
            sum += this.facilitiesOptions[key];
        }
        this.facilitiesTotal = sum
    }

    restroomsGroupChecked(radio: string, radioValue: number) {
        for(let key of Object.keys(this.restroomsOptions)) {
            if(key === radio) {
                this.restroomsOptions[key] = radioValue;
            } 
        }
        let sum = 0;
        for (let key in this.restroomsOptions) {
            sum += this.restroomsOptions[key];
        }
        this.restroomsTotal = sum
    }

    visualAppearanceGroupChecked(radio: string, radioValue: number) {
        for(let key of Object.keys(this.visualAppearanceOptions)) {
            if(key === radio) {
                this.visualAppearanceOptions[key] = radioValue;
            } 
        } 
        let sum = 0;
        for (let key in this.visualAppearanceOptions) {
            sum += this.visualAppearanceOptions[key];
        }
        this.visualAppearanceTotal = sum
    }
}