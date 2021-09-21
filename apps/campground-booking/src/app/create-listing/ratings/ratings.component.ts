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


    interiorRoadsValue: number = 0;
    registrationValue: number = 0;
    sitesRadioValue: number = 0;
    hookupsRadioValue: number = 0;
    recreationRadioValue: number = 0;
    swimmingRadioValue: number = 0;
    securityRadioValue: number = 0;
    laundryRadioValue: number = 0;
    servicesRadioValue: number = 0;
    internetAccessRadioValue: number = 0;
    facilitiesTotal: number = 0;


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

    interiorRoadsChecked(radio: number) {
        if(radio === 0) { 
            this.interiorRoadsValue = 0; 
        }
        if(radio === .5) { 
            this.interiorRoadsValue = .5; 
        }
        if(radio === 1) { 
            this.interiorRoadsValue = 1; 
        }
    }
    registrationChecked(radio: number) {
        if(radio === 0) { 
            this.registrationValue = 0; 
        }
        if(radio === .5) { 
            this.registrationValue = .5; 
        }
        if(radio === 1) { 
            this.registrationValue = 1; 
        }  
    }
}