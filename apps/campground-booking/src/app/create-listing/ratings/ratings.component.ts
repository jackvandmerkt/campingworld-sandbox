import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: 'ratings',
    templateUrl: './ratings.component.html',
    styleUrls: ['./ratings.component.css']
})

export class RatingsComponent {
    canParkBeRated: boolean = false;
    unHideFacilities: boolean = false;
    unHideRestrooms: boolean = false;
    unHideVisualAppearance: boolean = false;
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
        'tolietsValue': 0,
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

    constructor(private formBuilder: FormBuilder) {

    }

    ratingsForm = this.formBuilder.group({
        toggleCanParkBeRated: false,
        nonRatedCode: '',
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
        tolietsRadio: '',
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

    onSubmit(): void {
        console.log(this.ratingsForm.value);
    }
    clearChanges() {
        this.ratingsForm.reset();
        this.canParkBeRated = false;
        this.unHideFacilities = false;
        this.unHideRestrooms = false;
        this.unHideVisualAppearance = false;
        //resets radio button values
        for(let key of Object.keys(this.facilitiesOptions)) {
            this.facilitiesOptions[key] = 0;
        }
        for(let key of Object.keys(this.restroomsOptions)) {
            this.restroomsOptions[key] = 0;
        }
        for(let key of Object.keys(this.visualAppearanceOptions)) {
            this.visualAppearanceOptions[key] = 0;
        } 
    }

    checkBoxCanParkBeRatedChange(cb:any) {
        this.canParkBeRated = !this.canParkBeRated;
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
    }

    restroomsGroupChecked(radio: string, radioValue: number) {
        for(let key of Object.keys(this.restroomsOptions)) {
            if(key === radio) {
                this.restroomsOptions[key] = radioValue;
            } 
        } 
    }

    visualAppearanceGroupChecked(radio: string, radioValue: number) {
        for(let key of Object.keys(this.visualAppearanceOptions)) {
            if(key === radio) {
                this.visualAppearanceOptions[key] = radioValue;
            } 
        } 
    }
}