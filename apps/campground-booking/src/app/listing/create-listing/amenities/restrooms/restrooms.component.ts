import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ListingNavService } from "apps/campground-booking/src/app/shared/listing-nav.service";
import { IAllRefs } from "../../../../shared/listing-counts.model";
import { ListingService } from "../../../../shared/listing.service";

@Component({
    selector: 'restrooms',
    templateUrl: './restrooms.component.html',
    styleUrls: ['./restrooms.component.css']
})
export class RestroomsComponent implements OnInit {
    submitted: boolean = false;
    allRefsTmp:any;
    allRefsObj!: IAllRefs[];
    restroomsShowersFromService: any = {};
    pitToiletsOnly: boolean = false;
    restroomsShowersPaid: boolean = false;
    restroomsAndShowers: boolean = false;
    restrooms: boolean = false;
    showers: boolean = false;

    constructor(private formBuilder: FormBuilder, private ls: ListingService, 
        private listingNavService: ListingNavService) {

    }

    restroomForm = this.formBuilder.group({
        pitToilets: false,
        restroomShowerId: ['', Validators.required],
        numberToiletsMen: [''],
        numberToiletsWomen: [''],
        numberToiletsUnisex: [''],
        numberShowersMen: [''],
        numberShowersWomen: [''],
        numberShowersUnisex: [''],
        restroomsShowerPaid: false
      });

    ngOnInit() {
        this.getFormDropDownData();
    }

    onSubmit(): void {
        this.submitted = true;
        if(this.restroomForm.valid) {
            console.log(this.restroomForm.value);
            this.sendFormStatus(['restroomsFormStatus', 2]);
        } else {
            console.log('not valid');
            this.sendFormStatus(['restroomsFormStatus', 1]);
            return;
        }
    }
    
    get f() { return this.restroomForm.controls; }

    clearChanges() {
        this.restroomForm.reset();
        this.submitted = false;
        //resetting toggle text to no
        this.pitToiletsOnly = false;
        this.restroomsShowersPaid = false;
        this.restroomsAndShowers = false;
        this.restrooms = false;      
        this.showers = false;  
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
    sendFormStatus(value: any) {
        this.listingNavService.updateFormStatus(value)
    }

    checkBoxPitToiletsChange(cb:any) {
        this.pitToiletsOnly = !this.pitToiletsOnly;
    }
    checkBoxPaidChange(cb:any) {
        this.restroomsShowersPaid = !this.restroomsShowersPaid;
    }

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