import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'interior-roads',
    templateUrl: './interior-roads-site-info.component.html',
    styleUrls: ['./interior-roads-site-info.component.css']
})
export class InteriorRoadsSiteInformationComponent {
    interiorRoadsSitesInfo!: FormGroup;
    separateSeasonalSection: boolean = false;
    selfContainedUnits: boolean = false;
    fullHookupUnits: boolean = false;
    bigRigSite: boolean = false;
    slideOuts: boolean = false;
    roadConditionRadioGood: boolean = false;
    roadConditionRadioFair: boolean = false;
    roadConditionRadioPoor: boolean = false;
    sideHookupsRadioMost: boolean = false;
    sideHookupsRadioSome: boolean = false;
    sideHookupsRadioNone: boolean = false;
    shadedSitesRadioMost: boolean = false;
    shadedSitesRadioSome: boolean = false;
    shadedSitesRadioNone: boolean = false;
    constructor() {

    }

    ngOnInit() {
        this.interiorRoadsSitesInfo = new FormGroup({
            roadConditionRadio: new FormControl(''),
            interiorRoadType: new FormControl(''),
            totalSpaces: new FormControl(''),
            numAvailable: new FormControl(''),
            numSeasonal: new FormControl(''),
            numPermanet: new FormControl(''),
            toggleSeasonal: new FormControl(''),
            numPaved: new FormControl(''),
            numAllWeather: new FormControl(''),
            numGravel: new FormControl(''),
            numGrass: new FormControl(''),
            numDirt: new FormControl(''),
            numFullHookups: new FormControl(''),
            numWater: new FormControl(''),
            numSewer: new FormControl(''),
            numElectric: new FormControl(''),
            numNoHookups: new FormControl(''),
            sideHookupsRadio: new FormControl(''),
            toggleBigRig: new FormControl(''),
            toggleFullHookup: new FormControl(''),
            toggleSelfContained: new FormControl(''),
            pullThruW: new FormControl(''),
            pullThruL: new FormControl(''),
            numOfPullThrus: new FormControl(''),
            backInW: new FormControl(''),
            backInL: new FormControl(''),
            toggleSlideOuts: new FormControl(''),
            shadedSitesRadio: new FormControl('')
        });
    };

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