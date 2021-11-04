import { Component,ElementRef, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { Validators, FormBuilder } from '@angular/forms';
import { IAllRefs, IDiscountsAndAffiliations } from "../../../../shared/listing.model";
import { ListingService } from "../../../../shared/listing.service";
import { ListingNavService } from "../../../../shared/listing-nav.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'discounts-affiliations',
    templateUrl: './discounts-affiliations.component.html',
    styleUrls: ['./discounts-affiliations.component.css']
})
export class DiscountsAffiliationsComponent implements OnInit,AfterViewInit{
    allRefsTmp:any;
    allRefsObj!: IAllRefs[];
    affiliationsFromService: any = {};
    listStatesFromService: any = {};
    stateProvAssociationsFromService: any = {};
    // affiliationsFromService!: IAffiliations[];

    submitted: boolean = false;
    discountsAndAffiliationsPostObj:any = {}
    fileNum:any = 0;
    postResponse:any;
    currentDiscountsAffiliations:any ={}

    goodNeighborParkNumber: null;
    @ViewChild('affiliationId') private affiliationIdCSS!: ElementRef;
    @ViewChild('stateProvAssociationId') private stateProvAssociationIdCSS!: ElementRef;
    constructor(private formBuilder: FormBuilder, private ls: ListingService,
        private listingNavService: ListingNavService,  private route: ActivatedRoute) {

    }

    discountsAffiliations = this.formBuilder.group({
        aaaDiscount: false,
        militaryDiscount: false,
        affiliationId: ['', Validators.required],
        membersOfArvc: false,
        stateProvAssociationId: [null, Validators.required],
        goodNeighborPark: false,
        goodNeighborParkNumber: [{value: null, disabled: true}],
        coastToCoastPark: false,
        coastToCoastMembershipNumber: [null, [Validators.required, Validators.pattern("^[0-9]*$")]]
      });

    ngOnInit() {
        this.fileNum = this.route.snapshot.paramMap.get('fileNumber');
        this.currentDiscountsAffiliations = this.route.snapshot.data['data'];
        this.getFormDropDownData();
        if(this.currentDiscountsAffiliations != null){
            for(let [key, value] of Object.entries(this.currentDiscountsAffiliations)) {
                if(value == 'f') {
                    this.currentDiscountsAffiliations[key] = false;
                }
                if(value == 't') {
                    this.currentDiscountsAffiliations[key] = true;
                }
            }
        }
        this.discountsAffiliations.patchValue({
            aaaDiscount: this.currentDiscountsAffiliations.aaaDiscount,
            militaryDiscount: this.currentDiscountsAffiliations.militaryDiscount,
            affiliationId:this.currentDiscountsAffiliations.affiliationId,
            membersOfArvc: this.currentDiscountsAffiliations.membersOfArvc,
            stateProvAssociationId: this.currentDiscountsAffiliations.stateProvAssociationId,
            goodNeighborPark:this.currentDiscountsAffiliations.goodNeighborPark,
            goodNeighborParkNumber: this.currentDiscountsAffiliations.goodNeighborParkNumber,
            coastToCoastPark: this.currentDiscountsAffiliations.coastToCoastPark,
            coastToCoastMembershipNumber:this.currentDiscountsAffiliations.coastToCoastMembershipNumber,
        });
    }
    ngAfterViewInit() {
        this.setAttributes();
    }
    
    onSubmit(): void {
        this.submitted = true;
        if(this.discountsAffiliations.valid) {
            console.log(this.discountsAffiliations.value);
            this.postForm();
            this.sendFormStatus(['discountsAffiliationFormStatus', 2]);
        } else {
            console.log('not valid');
            this.sendFormStatus(['discountsAffiliationFormStatus', 1]);
            return;
        }
    }
    get f() { return this.discountsAffiliations.controls; }
    
    clearChanges() {
        this.submitted = false;
        if(this.currentDiscountsAffiliations != null){
           this.discountsAffiliations.patchValue({
            aaaDiscount: this.currentDiscountsAffiliations.aaaDiscount,
            militaryDiscount: this.currentDiscountsAffiliations.militaryDiscount,
            affiliationId:this.currentDiscountsAffiliations.affiliationId,
            membersOfArvc: this.currentDiscountsAffiliations.membersOfArvc,
            stateProvAssociationId: this.currentDiscountsAffiliations.stateProvAssociationId,
            goodNeighborPark:this.currentDiscountsAffiliations.goodNeighborPark,
            goodNeighborParkNumber: this.currentDiscountsAffiliations.goodNeighborParkNumber,
            coastToCoastPark: this.currentDiscountsAffiliations.coastToCoastPark,
            coastToCoastMembershipNumber:this.currentDiscountsAffiliations.coastToCoastMembershipNumber,
        });
        this.setAttributes(); 
        }


    }

    getFormDropDownData() {
        this.allRefsTmp = window.localStorage.getItem('all-refs');
        this.allRefsObj = JSON.parse(this.allRefsTmp);
        console.log(this.allRefsObj)
        for(let [key, value] of Object.entries(this.allRefsObj)) {
            if(key === 'affiliations') {
                this.affiliationsFromService = value;
            }
            if(key === 'listStates') {
                this.listStatesFromService = value;
            }
            if(key === 'stateProvAssociations'){
                this.stateProvAssociationsFromService = value;
            }
        }
    }
    setAttributes(){
        if(this.currentDiscountsAffiliations != null){
            for(let [key,value] of Object.entries(this.currentDiscountsAffiliations)){
                if(key === 'affiliationId') {
                    this.affiliationIdCSS.nativeElement.setAttribute('value', value) 
                }
                if(key === 'stateProvAssociationId') {
                    this.stateProvAssociationIdCSS.nativeElement.setAttribute('value', value)
                }
            }
        } else {
            this.affiliationIdCSS.nativeElement.setAttribute('value', null)
            this.stateProvAssociationIdCSS.nativeElement.setAttribute('value', null)
        }  
    }
    sendFormStatus(value: any) {
        this.listingNavService.updateFormStatus(value)
    }
    postForm() {
        this.discountsAndAffiliationsPostObj = this.discountsAffiliations.value;
        for(let [key, value] of Object.entries(this.discountsAndAffiliationsPostObj)) {
            if(value === false) {
                this.discountsAndAffiliationsPostObj[key] = 'f';
            }
            if(value === true) {
                this.discountsAndAffiliationsPostObj[key] = 't';
            }
        }
        console.log(this.discountsAndAffiliationsPostObj)
        this.ls.postDiscountsAndAffiliations(this.discountsAndAffiliationsPostObj, this.fileNum).subscribe(response => {
          if(response){
            this.postResponse = response;
          }
        })
      }

}