import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { IAmps, IInteriorRoadConditions, IInteriorRoadTypes, IShadedSites, ISidebySideHookups } from "../../../../shared/listing-counts.model";
import { ListingService } from "../../../../shared/listing.service";

@Component({
    selector: 'interior-roads',
    templateUrl: './interior-roads-site-info.component.html',
    styleUrls: ['./interior-roads-site-info.component.css']
})
export class InteriorRoadsSiteInformationComponent implements OnInit {
    submitted: boolean = false;
    typesFromService!: IInteriorRoadTypes[];
    conditionsFromService!: IInteriorRoadConditions[];
    hookupsFromService!: ISidebySideHookups[];
    shadedFromService!: IShadedSites[];
    ampsFromService!: IAmps[];
    // yes no toggle booleans
    separateSeasonalSection: boolean = false;
    selfContainedUnits: boolean = false;
    fullHookupUnits: boolean = false;
    bigRigSite: boolean = false;
    slideOuts: boolean = false;
    // variables used to switch checkmark image to toggled radio button
    roadConditionRadioValue: string = '';
    sideHookupsRadioValue: string = '';
    shadedSitesRadioValue: string = '';

    constructor(private formBuilder: FormBuilder, private ls: ListingService) {

    }

    ngOnInit() {
        this.ls.getInteriorRoadsConditions().subscribe(response => {
            this.conditionsFromService = response;
        });
        this.ls.getInteriorRoadsType().subscribe(response => {
            this.typesFromService = response;
        });
        this.ls.getAmps().subscribe(response => {
            this.ampsFromService = response;
        });
        this.ls.getSideBySideHookups().subscribe(response => {
            this.hookupsFromService = response;
        });
        this.ls.getShadedSites().subscribe(response => {
            this.shadedFromService = response;
        });
    }

    interiorRoadsSitesInfo = this.formBuilder.group({
        roadConditionRadio: ['', Validators.required],
        interiorRoadType: ['', Validators.required],
        totalSpaces: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        numAvailable: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        numSeasonal: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        numPermanent: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        toggleSeasonal: false,
        numPaved: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        numAllWeather: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        numGravel: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        numGrass: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        numDirt: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        numFullHookups: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        numWater: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        numSewer: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        numElectric: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        numNoHookups: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        amps: ['', Validators.required],
        sideHookupsRadio: ['', Validators.required],
        toggleBigRig: false,
        toggleFullHookup: false,
        toggleSelfContained: false,
        pullThruW: ['', [Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")]],
        pullThruL: ['', [Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")]],
        numOfPullThrus: ['', [Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")]],
        backInW: ['', [Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")]],
        backInL: ['', [Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")]],
        toggleSlideOuts: false,
        shadedSitesRadio: ['', Validators.required]
    });

    onSubmit(): void {
        this.submitted = true;
        if(this.interiorRoadsSitesInfo.valid) {
            console.log(this.interiorRoadsSitesInfo.value);
        } else {
            console.log('not valid');
            return;
        }
    }

    get f() { return this.interiorRoadsSitesInfo.controls; }

    clearChanges() {
        this.interiorRoadsSitesInfo.reset();
        this.submitted = false;
        //resetting toggle text to no
        this.separateSeasonalSection = false;
        this.selfContainedUnits = false;
        this.fullHookupUnits = false;
        this.bigRigSite = false;
        this.slideOuts = false;
        // resetting radio cards
        this.roadConditionRadioValue = '';
        this.sideHookupsRadioValue = '';
        this.shadedSitesRadioValue = ''; 
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
        if(radio === "Good") {
            this.roadConditionRadioValue = "Good";
        }
        if(radio === "Fair") {
            this.roadConditionRadioValue = "Fair";
        }
        if(radio === "Poor") {
            this.roadConditionRadioValue = "Poor";
        }
    }

    sideHookupsRadioChecked(radio: any) {
        if(radio === "None") {
            this.sideHookupsRadioValue = "None";
        }
        if(radio === "Some") {
            this.sideHookupsRadioValue = "Some";
        }
        if(radio === "Most") {
            this.sideHookupsRadioValue = "Most";
        }
    }

    shadedSitesRadioChecked(radio: any) {
        if(radio === "None") {
            this.shadedSitesRadioValue = "None";
        }
        if(radio === "Some") {
            this.shadedSitesRadioValue = "Some";
        }
        if(radio === "Most") {
            this.shadedSitesRadioValue = "Most";
        }
    }

}