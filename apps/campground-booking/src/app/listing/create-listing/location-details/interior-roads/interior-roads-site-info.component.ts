import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ListingNavService } from "apps/campground-booking/src/app/shared/listing-nav.service";
import { IAllRefs } from "../../../../shared/listing.model"; 
import { ListingService } from "../../../../shared/listing.service";

@Component({
    selector: 'interior-roads',
    templateUrl: './interior-roads-site-info.component.html',
    styleUrls: ['./interior-roads-site-info.component.css']
})
export class InteriorRoadsSiteInformationComponent implements OnInit, AfterViewInit {
    submitted: boolean = false;
    allRefsTmp:any;
    allRefsObj!: IAllRefs[];
    typesFromService: any = {};
    conditionsFromService: any = {};
    hookupsFromService: any = {};
    shadedFromService: any = {};
    ampsFromService: any = {};

    fileNum:any = 0;
    postResponse:any;
    interiorRoadsGetObj:any= {};
    interiorRoadsPostObj:any = {};

    @ViewChild('interiorRoadType') private interiorRoadTypeCSS!: ElementRef;
    @ViewChild('ampId') private ampCSS!: ElementRef;

    constructor(private formBuilder: FormBuilder, private ls: ListingService,
        private listingNavService: ListingNavService, private route: ActivatedRoute) {

    }

    interiorRoadsSitesInfo = this.formBuilder.group({
        interiorRoadConditionId: [null, Validators.required],
        interiorRoadTypeId: [null, Validators.required],
        totalSpaces: [null, [Validators.min(1), Validators.pattern("^[0-9]*$")]],
        numberExtendedStaySites: [null, [Validators.min(1), Validators.pattern("^[0-9]*$")]],
        numberAvailable: [null, [Validators.min(1), Validators.pattern("^[0-9]*$")]],
        numberPermanentSites: [null, [Validators.min(1), Validators.pattern("^[0-9]*$")]],
        separateSeasonalSection: false,
        numberPaved: [null, [Validators.min(1), Validators.pattern("^[0-9]*$")]],
        numberAllWeather: [null, [Validators.min(1), Validators.pattern("^[0-9]*$")]],
        numberGravel: [null, [Validators.min(1), Validators.pattern("^[0-9]*$")]],
        numberGrass: [null, [Validators.min(1), Validators.pattern("^[0-9]*$")]],
        numberDirt: [null, [Validators.min(1), Validators.pattern("^[0-9]*$")]],
        numberFullHookups: [null, [Validators.min(1), Validators.pattern("^[0-9]*$")]],
        numberWater: [null, [Validators.min(1), Validators.pattern("^[0-9]*$")]],
        numberSewer: [null, [Validators.min(1), Validators.pattern("^[0-9]*$")]],
        numberElectric: [null, [Validators.min(1), Validators.pattern("^[0-9]*$")]],
        noHookups: [null, [Validators.min(1), Validators.pattern("^[0-9]*$")]],
        ampId: [null],
        sideBySideHookupId: [null, Validators.required],
        bigRigSites: false,
        acceptsFullHookupUnitsOnly: false,
        acceptsSelfContainedUnitsOnly: false,
        pullThruWidth: [null, [Validators.min(1), Validators.pattern("^[0-9]+\.?[0-9]*$")]],
        pullThruLength: [null, [Validators.min(1), Validators.pattern("^[0-9]+\.?[0-9]*$")]],
        numberOfPullThrus: [null, [Validators.min(1), Validators.pattern("^[0-9]+\.?[0-9]*$")]],
        backInWidth: [null, [Validators.min(1), Validators.pattern("^[0-9]+\.?[0-9]*$")]],
        backInLength: [null, [Validators.min(1), Validators.pattern("^[0-9]+\.?[0-9]*$")]],
        slideOuts: false,
        shadeTypeId: [null, Validators.required]
    });

    ngOnInit() {
        this.route.snapshot.paramMap.get('fileNumber');
        this.fileNum = this.route.snapshot.paramMap.get('fileNumber');
        this.getFormDropDownData();
        this.interiorRoadsGetObj = this.route.snapshot.data['data'];
        if (this.interiorRoadsGetObj != null) {
            for(let [key, value] of Object.entries(this.interiorRoadsGetObj.siteInfo)) {
                if(value == 'f') {
                    this.interiorRoadsGetObj.siteInfo[key] = false;
                }
                if(value == 't') {
                    this.interiorRoadsGetObj.siteInfo[key] = true;
                }
            }
            this.interiorRoadsSitesInfo.patchValue({
                interiorRoadConditionId: this.interiorRoadsGetObj.interiorRoads.interiorRoadConditionId,
                interiorRoadTypeId: this.interiorRoadsGetObj.interiorRoads.interiorRoadTypeId,
                totalSpaces: this.interiorRoadsGetObj.siteInfo.totalSpaces,
                numberAvailable: this.interiorRoadsGetObj.siteInfo.numberAvailable,
                numberExtendedStaySites: this.interiorRoadsGetObj.siteInfo.numberExtendedStaySites,
                numberPermanentSites: this.interiorRoadsGetObj.siteInfo.numberPermanentSites,
                separateSeasonalSection: this.interiorRoadsGetObj.siteInfo.separateSeasonalSection,
                numberPaved: this.interiorRoadsGetObj.siteInfo.numberPaved,
                numberAllWeather: this.interiorRoadsGetObj.siteInfo.numberAllWeather,
                numberGravel: this.interiorRoadsGetObj.siteInfo.numberGravel,
                numberGrass: this.interiorRoadsGetObj.siteInfo.numberGrass,
                numberDirt: this.interiorRoadsGetObj.siteInfo.numberDirt,
                numberFullHookups: this.interiorRoadsGetObj.siteInfo.numberFullHookups,
                numberWater: this.interiorRoadsGetObj.siteInfo.numberWater,
                numberSewer: this.interiorRoadsGetObj.siteInfo.numberSewer,
                numberElectric: this.interiorRoadsGetObj.siteInfo.numberElectric,
                noHookups: this.interiorRoadsGetObj.siteInfo.noHookups,
                ampId: this.interiorRoadsGetObj.siteInfo.ampId,
                sideBySideHookupId: this.interiorRoadsGetObj.siteInfo.sideBySideHookupId,
                bigRigSites: this.interiorRoadsGetObj.siteInfo.bigRigSites,
                acceptsFullHookupUnitsOnly: this.interiorRoadsGetObj.siteInfo.acceptsFullHookupUnitsOnly,
                acceptsSelfContainedUnitsOnly: this.interiorRoadsGetObj.siteInfo.acceptsSelfContainedUnitsOnly,
                pullThruWidth: this.interiorRoadsGetObj.siteInfo.pullThruWidth,
                pullThruLength: this.interiorRoadsGetObj.siteInfo.pullThruLength,
                numberOfPullThrus: this.interiorRoadsGetObj.siteInfo.numberOfPullThrus,
                backInWidth: this.interiorRoadsGetObj.siteInfo.backInWidth,
                backInLength: this.interiorRoadsGetObj.siteInfo.backInLength,
                slideOuts: this.interiorRoadsGetObj.siteInfo.slideOuts,
                shadeTypeId: this.interiorRoadsGetObj.siteInfo.shadeTypeId
            });
        } 
    }

    ngAfterViewInit() {
        this.setAttributes();
    }
    onSubmit(): void {
        this.submitted = true;
        const formValidators = [
            this.rvSpacesAvailInvalid,
            this.totalSpacesInvalid
        ]
        let invalidValidators = 0
        formValidators.forEach(invalid => { if (invalid == true) invalidValidators++ })
        if (invalidValidators == 0 && this.interiorRoadsSitesInfo.valid) {
            this.mapForm();
            this.sendFormStatus(['interiorRoadsFormStatus', 2]);
        } else {
            this.sendFormStatus(['interiorRoadsFormStatus', 1]);
            return;
        }
}

    get f() { return this.interiorRoadsSitesInfo.controls; }

    clearChanges() {
        this.submitted = false;
        if (this.interiorRoadsGetObj != null) {
          this.interiorRoadsSitesInfo.patchValue({
            interiorRoadConditionId: this.interiorRoadsGetObj.interiorRoads.interiorRoadConditionId,
            interiorRoadTypeId: this.interiorRoadsGetObj.interiorRoads.interiorRoadTypeId,
            totalSpaces: this.interiorRoadsGetObj.siteInfo.totalSpaces,
            numberAvailable: this.interiorRoadsGetObj.siteInfo.numberAvailable,
            numberExtendedStaySites: this.interiorRoadsGetObj.siteInfo.numberExtendedStaySites,
            numberPermanentSites: this.interiorRoadsGetObj.siteInfo.numberPermanentSites,
            separateSeasonalSection: this.interiorRoadsGetObj.siteInfo.separateSeasonalSection,
            numberPaved: this.interiorRoadsGetObj.siteInfo.numberPaved,
            numberAllWeather: this.interiorRoadsGetObj.siteInfo.numberAllWeather,
            numberGravel: this.interiorRoadsGetObj.siteInfo.numberGravel,
            numberGrass: this.interiorRoadsGetObj.siteInfo.numberGrass,
            numberDirt: this.interiorRoadsGetObj.siteInfo.numberDirt,
            numberFullHookups: this.interiorRoadsGetObj.siteInfo.numberFullHookups,
            numberWater: this.interiorRoadsGetObj.siteInfo.numberWater,
            numberSewer: this.interiorRoadsGetObj.siteInfo.numberSewer,
            numberElectric: this.interiorRoadsGetObj.siteInfo.numberElectric,
            noHookups: this.interiorRoadsGetObj.siteInfo.noHookups,
            ampId: this.interiorRoadsGetObj.siteInfo.ampId,
            sideBySideHookupId: this.interiorRoadsGetObj.siteInfo.sideBySideHookupId,
            bigRigSites: this.interiorRoadsGetObj.siteInfo.bigRigSites,
            acceptsFullHookupUnitsOnly: this.interiorRoadsGetObj.siteInfo.acceptsFullHookupUnitsOnly,
            acceptsSelfContainedUnitsOnly: this.interiorRoadsGetObj.siteInfo.acceptsSelfContainedUnitsOnly,
            pullThruWidth: this.interiorRoadsGetObj.siteInfo.pullThruWidth,
            pullThruLength: this.interiorRoadsGetObj.siteInfo.pullThruLength,
            numberOfPullThrus: this.interiorRoadsGetObj.siteInfo.numberOfPullThrus,
            backInWidth: this.interiorRoadsGetObj.siteInfo.backInWidth,
            backInLength: this.interiorRoadsGetObj.siteInfo.backInLength,
            slideOuts: this.interiorRoadsGetObj.siteInfo.slideOuts,
            shadeTypeId: this.interiorRoadsGetObj.siteInfo.shadeTypeId
          }); 
          this.setAttributes();
        } else {
            this.interiorRoadsSitesInfo.reset({
                interiorRoadConditionId: null,
                interiorRoadTypeId: null,
                totalSpaces: null,
                numberAvailable: null,
                numberExtendedStaySites: null,
                numberPermanentSites: null,
                separateSeasonalSection: false,
                numberPaved: null,
                numberAllWeather: null,
                numberGravel: null,
                numberGrass: null,
                numberDirt: null,
                numberFullHookups: null,
                numberWater: null,
                numberSewer: null,
                numberElectric: null,
                noHookups: null,
                ampId: null,
                sideBySideHookupId: null,
                bigRigSites: false,
                acceptsFullHookupUnitsOnly: false,
                acceptsSelfContainedUnitsOnly: false,
                pullThruWidth: null,
                pullThruLength: null,
                numberOfPullThrus: null,
                backInWidth: null,
                backInLength: null,
                slideOuts: null,
                shadeTypeId: null,
            });
            this.setAttributes();
      }
    }

    getFormDropDownData() {
        this.allRefsTmp = window.localStorage.getItem('all-refs');
        this.allRefsObj = JSON.parse(this.allRefsTmp);
        for(let [key, value] of Object.entries(this.allRefsObj)) {
            if(key === 'interiorRoadTypes') {
                this.typesFromService = value;
            }
            if(key === 'interiorRoadConditions') {
                this.conditionsFromService = value;
            }
            if(key === 'sideBySideHookups') {
                this.hookupsFromService = value;
            }
            if(key === 'shadeTypes') {
                this.shadedFromService = value;
            }
            if(key === 'amps') {
                this.ampsFromService = value;
            }
        }
    }

    setAttributes(){
        if (this.interiorRoadsGetObj != null) {
            for(let [key, value] of Object.entries(this.interiorRoadsGetObj.interiorRoads)) {
                if(key === 'interiorRoadTypeId') {
                    this.interiorRoadTypeCSS.nativeElement.setAttribute('value', value) 
                }
            }
            for(let [key, value] of Object.entries(this.interiorRoadsGetObj.siteInfo)) {
                if(key === 'ampId') {
                    this.ampCSS.nativeElement.setAttribute('value', value) 
                }
            }
        } else {
            this.interiorRoadTypeCSS.nativeElement.setAttribute('value', null)
            this.ampCSS.nativeElement.setAttribute('value', null)
        }  
    }
    sendFormStatus(value: any) {
        this.listingNavService.updateFormStatus(value)
    }
    postForm() {
        this.ls.postInteriorRoads(this.interiorRoadsPostObj, this.fileNum).subscribe(response => {
            if(response){
            this.postResponse = response;
            }
        })
    }

    mapForm(){
        const interiorRoads = {
            interiorRoadConditionId : this.interiorRoadsSitesInfo.value.interiorRoadConditionId,
            interiorRoadTypeId : this.interiorRoadsSitesInfo.value.interiorRoadTypeId,
        }
        this.interiorRoadsPostObj.interiorRoads = interiorRoads;
        const siteInfo = {
            totalSpaces: this.interiorRoadsSitesInfo.value.totalSpaces,
            numberAvailable: this.interiorRoadsSitesInfo.value.numberAvailable,
            numberExtendedStaySites: this.interiorRoadsSitesInfo.value.numberExtendedStaySites,
            numberPermanentSites: this.interiorRoadsSitesInfo.value.numberPermanentSites,
            separateSeasonalSection: this.interiorRoadsSitesInfo.value.separateSeasonalSection,
            numberPaved: this.interiorRoadsSitesInfo.value.numberPaved,
            numberAllWeather: this.interiorRoadsSitesInfo.value.numberAllWeather,
            numberGravel: this.interiorRoadsSitesInfo.value.numberGravel,
            numberGrass: this.interiorRoadsSitesInfo.value.numberGrass,
            numberDirt: this.interiorRoadsSitesInfo.value.numberDirt,
            numberFullHookups: this.interiorRoadsSitesInfo.value.numberFullHookups,
            numberWater: this.interiorRoadsSitesInfo.value.numberWater,
            numberSewer: this.interiorRoadsSitesInfo.value.numberSewer,
            numberElectric: this.interiorRoadsSitesInfo.value.numberElectric,
            noHookups: this.interiorRoadsSitesInfo.value.noHookups,
            ampId: this.interiorRoadsSitesInfo.value.ampId,
            sideBySideHookupId: this.interiorRoadsSitesInfo.value.sideBySideHookupId,
            bigRigSites: this.interiorRoadsSitesInfo.value.bigRigSites,
            acceptsFullHookupUnitsOnly: this.interiorRoadsSitesInfo.value.acceptsFullHookupUnitsOnly,
            acceptsSelfContainedUnitsOnly: this.interiorRoadsSitesInfo.value.acceptsSelfContainedUnitsOnly,
            pullThruWidth: this.interiorRoadsSitesInfo.value.pullThruWidth,
            pullThruLength: this.interiorRoadsSitesInfo.value.pullThruLength,
            numberOfPullThrus: this.interiorRoadsSitesInfo.value.numberOfPullThrus,
            backInWidth: this.interiorRoadsSitesInfo.value.backInWidth,
            backInLength: this.interiorRoadsSitesInfo.value.backInLength,
            slideOuts: this.interiorRoadsSitesInfo.value.slideOuts,
            shadeTypeId: this.interiorRoadsSitesInfo.value.shadeTypeId
        }
        this.interiorRoadsPostObj.siteInfo = siteInfo;
        for(let [key, value] of Object.entries(this.interiorRoadsPostObj.siteInfo)) {
            if(value === false) {
                this.interiorRoadsPostObj.siteInfo[key] = 'f';
            }
            if(value === true) {
                this.interiorRoadsPostObj.siteInfo[key] = 't';

            }
        }
        this.postForm();
      }

    // Start Custom Validatiors
    get rvSpacesAvailInvalid() {
        let sum = this.interiorRoadsSitesInfo.value.numberPaved + this.interiorRoadsSitesInfo.value.numberAllWeather + 
                this.interiorRoadsSitesInfo.value.numberGrass + this.interiorRoadsSitesInfo.value.numberGravel + 
                this.interiorRoadsSitesInfo.value.numberDirt;
        if (this.interiorRoadsSitesInfo.value.numberAvailable !== sum) {
          return true
        } else { return false }
      }

      get totalSpacesInvalid() {
        let sum = this.interiorRoadsSitesInfo.value.numberAvailable + this.interiorRoadsSitesInfo.value.numberPermanentSites + 
                this.interiorRoadsSitesInfo.value.numberExtendedStaySites;
        if (this.interiorRoadsSitesInfo.value.totalSpaces !== sum) {
          return true
        } else { return false }
      }

      get numberOfPullThrusInvalid() {
        let sum = this.interiorRoadsSitesInfo.value.numberAvailable + this.interiorRoadsSitesInfo.value.numberPermanentSites + 
                this.interiorRoadsSitesInfo.value.numberExtendedStaySites;
        if (this.interiorRoadsSitesInfo.value.totalSpaces !== sum) {
          return true
        } else { return false }
      }


    // End Custom Validators
}