import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ListingNavService } from "apps/campground-booking/src/app/shared/listing-nav.service";
import { IAllRefs } from "../../../../shared/listing.model";
import { ListingService } from "../../../../shared/listing.service";

@Component({
    selector: 'restrooms',
    templateUrl: './restrooms.component.html',
    styleUrls: ['./restrooms.component.css']
})
export class RestroomsComponent implements OnInit, AfterViewInit {
    submitted: boolean = false;
    allRefsTmp:any;
    allRefsObj!: IAllRefs[];
    restroomsShowersFromService: any = {};
    pitToiletsToggle: boolean = false;
    restroomsShowersPaidToggle: boolean = false;
    restroomsAndShowers: boolean = false;
    restrooms: boolean = false;
    showers: boolean = false;
    newListingTmp:any;
    newListingObj: any = {};
    postResponse:any;
    fileNum:any;
    currentListing:any= {};

    @ViewChild('restroomShowerId') private restroomShowerCSS!: ElementRef;

    constructor(private formBuilder: FormBuilder, private ls: ListingService, 
        private listingNavService: ListingNavService, private route: ActivatedRoute) {

    }

    restroomForm = this.formBuilder.group({
        pitToilets: false,
        restroomShowerId: [null, Validators.required],
        numberToiletsMen: [null],
        numberToiletsWomen: [null],
        numberToiletsUnisex: [null],
        numberShowersMen: [null],
        numberShowersWomen: [null],
        numberShowersUnisex: [null],
        restroomsShowerPaid: false
      });

    ngOnInit() {
        this.route.snapshot.paramMap.get('fileNumber');
        this.getFormDropDownData();
        this.newListingTmp = window.localStorage.getItem('new-listing');
        this.newListingObj = JSON.parse(this.newListingTmp);
        for(let [key, value] of Object.entries(this.newListingObj)) {
            if(key === 'fileNumber') {
                this.fileNum = value;
            }
        }
        this.currentListing = this.route.snapshot.data['data'];
        if (this.currentListing != null) {
            this.restroomForm.patchValue({
                pitToilets: this.currentListing.pitToilets,
                restroomShowerId: this.currentListing.restroomShowerId,
                numberToiletsMen: this.currentListing.numberToiletsMen,
                numberToiletsWomen: this.currentListing.numberToiletsWomen,
                numberToiletsUnisex: this.currentListing.numberToiletsUnisex,
                numberShowersMen: this.currentListing.numberShowersMen,
                numberShowersWomen: this.currentListing.numberShowersWomen,
                numberShowersUnisex: this.currentListing.numberShowersUnisex,
                restroomsShowerPaid: this.currentListing.restroomsShowerPaid
            }); 
            if(this.currentListing.pitToilets == true){
                this.pitToiletsToggle = true;
            }
            if(this.currentListing.restroomsShowerPaid == true){
                this.restroomsShowersPaidToggle = true;
            }
        } else {
            console.log('current listing is null')
        }
    }
    ngAfterViewInit() {
        this.setAttributes();
    }

    onSubmit(): void {
        this.submitted = true;
        if(this.restroomForm.valid) {
            this.postForm();
            this.sendFormStatus(['restroomsFormStatus', 2]);
        } else {
            console.log('not valid');
            this.sendFormStatus(['restroomsFormStatus', 1]);
            return;
        }
    }
    get f() { return this.restroomForm.controls; }
    clearChanges() {
        this.submitted = false;
        this.submitted = false;
        if (this.currentListing != null) {
            this.restroomForm.patchValue({
                pitToilets: this.currentListing.pitToilets,
                restroomShowerId: this.currentListing.restroomShowerId,
                numberToiletsMen: this.currentListing.numberToiletsMen,
                numberToiletsWomen: this.currentListing.numberToiletsWomen,
                numberToiletsUnisex: this.currentListing.numberToiletsUnisex,
                numberShowersMen: this.currentListing.numberShowersMen,
                numberShowersWomen: this.currentListing.numberShowersWomen,
                numberShowersUnisex: this.currentListing.numberShowersUnisex,
                restroomsShowerPaid: this.currentListing.restroomsShowerPaid
            }); 
            if(!this.currentListing.pitToilets){
                this.pitToiletsToggle = false;
            } else{
                this.pitToiletsToggle = true;
            }
            if(!this.currentListing.restroomsShowerPaid){
                this.restroomsShowersPaidToggle = false;
            } else{
                this.restroomsShowersPaidToggle = true;
            }
        } else {
            this.restroomForm.reset({
                pitToilets: null, restroomShowerId: null, numberToiletsMen: null, numberToiletsWomen: null, numberToiletsUnisex: null,
                numberShowersMen: null, numberShowersWomen: null, numberShowersUnisex: null, restroomsShowerPaid: null
            });
            this.pitToiletsToggle = false;
            this.restroomsShowersPaidToggle = false;
            this.restroomsAndShowers = false;
            this.restrooms = false;      
            this.showers = false;  
            this.setAttributes();
        }
    }
    getFormDropDownData() {
        this.allRefsTmp = window.localStorage.getItem('all-refs');
        this.allRefsObj = JSON.parse(this.allRefsTmp);
        console.log(this.allRefsObj)
        for(let [key, value] of Object.entries(this.allRefsObj)) {
            if(key === 'restroomShowers') {
                this.restroomsShowersFromService = value;
            }
        }
    }
    setAttributes(){
        if (this.currentListing != null) {
            for(let [key, value] of Object.entries(this.currentListing)) {
                if(key === 'restroomShowerId') {
                    this.restroomShowerCSS.nativeElement.setAttribute('value', value) 
                }
            }
        } else {
            this.restroomShowerCSS.nativeElement.setAttribute('value', null)
        }  
    }
    sendFormStatus(value: any) {
        this.listingNavService.updateFormStatus(value)
    }
    postForm() {
        this.ls.postRestrooms(this.restroomForm.value, this.fileNum).subscribe(response => {
          if(response){
            this.postResponse = response;
            console.log(this.postResponse);
          }
        })
    }
    checkBoxPitToiletsChange(cb:any) {
        this.pitToiletsToggle = !this.pitToiletsToggle;
    }
    checkBoxPaidChange(cb:any) {
        this.restroomsShowersPaidToggle = !this.restroomsShowersPaidToggle;
    }

    // OnChange for Restrooms/showers dropdown
    onChange(event:any): void {
        const newVal = event.target.value;
        console.log(newVal)
        if(newVal == "3: 3") {
            // setting boolean variables used in template
            this.restroomsAndShowers = true;
            this.restrooms = false;
            this.showers = false;

            // setting validations
            this.restroomForm.get('numberToiletsMen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numberToiletsWomen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numberToiletsUnisex')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numberShowersMen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numberShowersWomen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numberShowersUnisex')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);

            // updating validations
            this.restroomForm.get('numberToiletsMen')?.updateValueAndValidity();
            this.restroomForm.get('numberToiletsWomen')?.updateValueAndValidity();
            this.restroomForm.get('numberToiletsUnisex')?.updateValueAndValidity();
            this.restroomForm.get('numberShowersMen')?.updateValueAndValidity();
            this.restroomForm.get('numberShowersWomen')?.updateValueAndValidity();
            this.restroomForm.get('numberShowersUnisex')?.updateValueAndValidity();
        }
        else if(newVal == "2: 2") {
            // setting boolean variables used in template
            this.restroomsAndShowers = false;
            this.restrooms = true;
            this.showers = false;

            // setting validations
            this.restroomForm.get('numberToiletsMen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numberToiletsWomen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numberToiletsUnisex')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            
            // clearing other validations and resetting controls
            this.restroomForm.get('numberShowersMen')?.clearValidators();
            this.restroomForm.get('numberShowersWomen')?.clearValidators();
            this.restroomForm.get('numberShowersUnisex')?.clearValidators();
            this.restroomForm.controls['numberShowersMen'].reset()
            this.restroomForm.controls['numberShowersWomen'].reset()
            this.restroomForm.controls['numberShowersUnisex'].reset()

            // updating validations
            this.restroomForm.get('numberToiletsMen')?.updateValueAndValidity();
            this.restroomForm.get('numberToiletsWomen')?.updateValueAndValidity();
            this.restroomForm.get('numberToiletsUnisex')?.updateValueAndValidity();
            this.restroomForm.get('numberShowersMen')?.updateValueAndValidity();
            this.restroomForm.get('numberShowersWomen')?.updateValueAndValidity();
            this.restroomForm.get('numberShowersUnisex')?.updateValueAndValidity();
        }
        else if(newVal == "1: 1") {
            // setting boolean variables used in template
            this.restroomsAndShowers = false;
            this.restrooms = false;
            this.showers = true;

            // setting validations
            this.restroomForm.get('numberShowersMen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numberShowersWomen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numberShowersUnisex')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            
            // clearing other validations and resetting controls
            this.restroomForm.get('numberToiletsMen')?.clearValidators();
            this.restroomForm.get('numberToiletsWomen')?.clearValidators();
            this.restroomForm.get('numberToiletsUnisex')?.clearValidators();
            this.restroomForm.controls['numberToiletsMen'].reset()
            this.restroomForm.controls['numberToiletsWomen'].reset()
            this.restroomForm.controls['numberToiletsUnisex'].reset()

            // updating validations
            this.restroomForm.get('numberToiletsMen')?.updateValueAndValidity();
            this.restroomForm.get('numberToiletsWomen')?.updateValueAndValidity();
            this.restroomForm.get('numberToiletsUnisex')?.updateValueAndValidity();
            this.restroomForm.get('numberShowersMen')?.updateValueAndValidity();
            this.restroomForm.get('numberShowersWomen')?.updateValueAndValidity();
            this.restroomForm.get('numberShowersUnisex')?.updateValueAndValidity();
        }
        else if(newVal == "" || newVal == "4: 4") {
            // setting boolean variables used in template
            this.restroomsAndShowers = false;
            this.restrooms = false;
            this.showers = false;

            // clearing other validations and resetting controls
            this.restroomForm.get('numberToiletsMen')?.clearValidators();
            this.restroomForm.get('numberToiletsWomen')?.clearValidators();
            this.restroomForm.get('numberToiletsUnisex')?.clearValidators();
            this.restroomForm.get('numberShowersMen')?.clearValidators();
            this.restroomForm.get('numberShowersWomen')?.clearValidators();
            this.restroomForm.get('numberShowersUnisex')?.clearValidators();
            this.restroomForm.controls['numberToiletsMen'].reset()
            this.restroomForm.controls['numberToiletsWomen'].reset()
            this.restroomForm.controls['numberToiletsUnisex'].reset()
            this.restroomForm.controls['numberShowersMen'].reset()
            this.restroomForm.controls['numberShowersWomen'].reset()
            this.restroomForm.controls['numberShowersUnisex'].reset()

            // updating validations
            this.restroomForm.get('numberToiletsMen')?.updateValueAndValidity();
            this.restroomForm.get('numberToiletsWomen')?.updateValueAndValidity();
            this.restroomForm.get('numberToiletsUnisex')?.updateValueAndValidity();
            this.restroomForm.get('numberShowersMen')?.updateValueAndValidity();
            this.restroomForm.get('numberShowersWomen')?.updateValueAndValidity();
            this.restroomForm.get('numberShowersUnisex')?.updateValueAndValidity();
        }
    }
}