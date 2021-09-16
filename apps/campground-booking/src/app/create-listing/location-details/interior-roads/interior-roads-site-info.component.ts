import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'interior-roads',
    templateUrl: './interior-roads-site-info.component.html',
    styleUrls: ['./interior-roads-site-info.component.css']
})
export class InteriorRoadsSiteInformationComponent {
    // yes no toggle booleans
    separateSeasonalSection: boolean = false;
    selfContainedUnits: boolean = false;
    fullHookupUnits: boolean = false;
    bigRigSite: boolean = false;
    slideOuts: boolean = false;
    // boolean variables used to switch checkmark image to toggled radio button
    roadConditionRadioGood: boolean = false;
    roadConditionRadioFair: boolean = false;
    roadConditionRadioPoor: boolean = false;
    sideHookupsRadioMost: boolean = false;
    sideHookupsRadioSome: boolean = false;
    sideHookupsRadioNone: boolean = false;
    shadedSitesRadioMost: boolean = false;
    shadedSitesRadioSome: boolean = false;
    shadedSitesRadioNone: boolean = false;

    constructor(private formBuilder: FormBuilder) {

    }

    interiorRoadsSitesInfo = this.formBuilder.group({
        roadConditionRadio: '',
        interiorRoadType: '',
        totalSpaces: '',
        numAvailable: '',
        numSeasonal: '',
        numPermanent: '',
        toggleSeasonal: false,
        numPaved: '',
        numAllWeather: '',
        numGravel: '',
        numGrass: '',
        numDirt: '',
        numFullHookups: '',
        numWater: '',
        numSewer: '',
        numElectric: '',
        numNoHookups: '',
        amps: '',
        sideHookupsRadio: '',
        toggleBigRig: false,
        toggleFullHookup: false,
        toggleSelfContained: false,
        pullThruW: '',
        pullThruL: '',
        numOfPullThrus: '',
        backInW: '',
        backInL: '',
        toggleSlideOuts: false,
        shadedSitesRadio: ''
    });

    onSubmit(): void {
        console.log(this.interiorRoadsSitesInfo.value);
    }

    checkBoxSeasonalChange(cb:any) {
        this.separateSeasonalSection = !this.separateSeasonalSection;
    }

    checkBoxSelfContainedChange(cb:any) {
        this.selfContainedUnits = !this.selfContainedUnits;
    }

    checkBoxFullHookupChange(cb:any) {
        this.fullHookupUnits = !this.fullHookupUnits;
    }

    checkBoxBigRigChange(cb:any) {
        this.bigRigSite = !this.bigRigSite;
    }

    checkBoxSlideOutsChange(cb:any) {
        this.slideOuts = !this.slideOuts;
    }

    roadConditionRadioChecked(radio: any) {
        if(radio === "good") {
            this.roadConditionRadioGood = true;
            this.roadConditionRadioFair = false;
            this.roadConditionRadioPoor = false;
        }
        if(radio === "fair") {
            this.roadConditionRadioFair = true;
            this.roadConditionRadioGood = false;
            this.roadConditionRadioPoor = false;
        }
        if(radio === "poor") {
            this.roadConditionRadioPoor = true;
            this.roadConditionRadioGood = false;
            this.roadConditionRadioFair = false;
        }
    }

    sideHookupsRadioChecked(radio: any) {
        if(radio === "most") {
            this.sideHookupsRadioMost = true;
            this.sideHookupsRadioSome = false;
            this.sideHookupsRadioNone = false;
        }
        if(radio === "some") {
            this.sideHookupsRadioSome = true;
            this.sideHookupsRadioMost = false;
            this.sideHookupsRadioNone = false;
        }
        if(radio === "none") {
            this.sideHookupsRadioNone = true;
            this.sideHookupsRadioMost = false;
            this.sideHookupsRadioSome = false;
        }
    }

    shadedSitesRadioChecked(radio: any) {
        if(radio === "most") {
            this.shadedSitesRadioMost = true;
            this.shadedSitesRadioSome = false;
            this.shadedSitesRadioNone = false;
        }
        if(radio === "some") {
            this.shadedSitesRadioSome = true;
            this.shadedSitesRadioMost = false;
            this.shadedSitesRadioNone = false;
        }
        if(radio === "none") {
            this.shadedSitesRadioNone = true;
            this.shadedSitesRadioMost = false;
            this.shadedSitesRadioSome = false;
        }
    }

}