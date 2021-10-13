import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IRestroomsShowers } from "../../../shared/listing-counts.model";
import { ListingService } from "../../../shared/listing.service";

@Component({
    selector: 'restrooms',
    templateUrl: './restrooms.component.html',
    styleUrls: ['./restrooms.component.css']
})
export class RestroomsComponent implements OnInit {
    submitted: boolean = false;
    restroomsShowersFromService!: IRestroomsShowers[];
    pitToiletsOnly: boolean = false;
    restroomsShowersPaid: boolean = false;
    restroomsAndShowers: boolean = false;
    restrooms: boolean = false;
    showers: boolean = false;

    constructor(private formBuilder: FormBuilder, private ls: ListingService) {

    }

    ngOnInit() {
        this.ls.getRestroomsShowers().subscribe(response => {
            this.restroomsShowersFromService = response;
        });
    }

    // form object
    restroomForm = this.formBuilder.group({
        togglePitToilets: false,
        restroomsShowersSelect: ['', Validators.required],
        numToiletsMen: [''],
        numToiletsWomen: [''],
        numToiletsUni: [''],
        numShowersMen: [''],
        numShowersWomen: [''],
        numShowersUni: [''],
        togglePaid: false
      });

      onSubmit(): void {
        this.submitted = true;
        if(this.restroomForm.valid) {
            console.log(this.restroomForm.value);
        } else {
            console.log('not valid');
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

    checkBoxPitToiletsChange(cb:any) {
        this.pitToiletsOnly = !this.pitToiletsOnly;
    }
    checkBoxPaidChange(cb:any) {
        this.restroomsShowersPaid = !this.restroomsShowersPaid;
    }

    onChange(event:any): void {
        const newVal = event.target.value;
        if(newVal === "restroomsAndShowers") {
            // setting boolean variables used in template
            this.restroomsAndShowers = true;
            this.restrooms = false;
            this.showers = false;

            // setting validations
            this.restroomForm.get('numToiletsMen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numToiletsWomen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numToiletsUni')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numShowersMen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numShowersWomen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numShowersUni')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);

            // updating validations
            this.restroomForm.get('numToiletsMen')?.updateValueAndValidity();
            this.restroomForm.get('numToiletsWomen')?.updateValueAndValidity();
            this.restroomForm.get('numToiletsUni')?.updateValueAndValidity();
            this.restroomForm.get('numShowersMen')?.updateValueAndValidity();
            this.restroomForm.get('numShowersWomen')?.updateValueAndValidity();
            this.restroomForm.get('numShowersUni')?.updateValueAndValidity();
        }
        else if(newVal === "restrooms") {
            // setting boolean variables used in template
            this.restroomsAndShowers = false;
            this.restrooms = true;
            this.showers = false;

            // setting validations
            this.restroomForm.get('numToiletsMen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numToiletsWomen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numToiletsUni')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            
            // clearing other validations
            this.restroomForm.get('numShowersMen')?.clearValidators();
            this.restroomForm.get('numShowersWomen')?.clearValidators();
            this.restroomForm.get('numShowersUni')?.clearValidators();

            // updating validations
            this.restroomForm.get('numToiletsMen')?.updateValueAndValidity();
            this.restroomForm.get('numToiletsWomen')?.updateValueAndValidity();
            this.restroomForm.get('numToiletsUni')?.updateValueAndValidity();
            this.restroomForm.get('numShowersMen')?.updateValueAndValidity();
            this.restroomForm.get('numShowersWomen')?.updateValueAndValidity();
            this.restroomForm.get('numShowersUni')?.updateValueAndValidity();
        }
        else if(newVal === "showers") {
            // setting boolean variables used in template
            this.restroomsAndShowers = false;
            this.restrooms = false;
            this.showers = true;

            // setting validations
            this.restroomForm.get('numShowersMen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numShowersWomen')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            this.restroomForm.get('numShowersUni')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")]);
            
            // clearing other validations
            this.restroomForm.get('numToiletsMen')?.clearValidators();
            this.restroomForm.get('numToiletsWomen')?.clearValidators();
            this.restroomForm.get('numToiletsUni')?.clearValidators();

            // updating validations
            this.restroomForm.get('numToiletsMen')?.updateValueAndValidity();
            this.restroomForm.get('numToiletsWomen')?.updateValueAndValidity();
            this.restroomForm.get('numToiletsUni')?.updateValueAndValidity();
            this.restroomForm.get('numShowersMen')?.updateValueAndValidity();
            this.restroomForm.get('numShowersWomen')?.updateValueAndValidity();
            this.restroomForm.get('numShowersUni')?.updateValueAndValidity();
        }
        else if(newVal === "") {
            // setting boolean variables used in template
            this.restroomsAndShowers = false;
            this.restrooms = false;
            this.showers = false;

            // clearing other validations
            this.restroomForm.get('numToiletsMen')?.clearValidators();
            this.restroomForm.get('numToiletsWomen')?.clearValidators();
            this.restroomForm.get('numToiletsUni')?.clearValidators();
            this.restroomForm.get('numShowersMen')?.clearValidators();
            this.restroomForm.get('numShowersWomen')?.clearValidators();
            this.restroomForm.get('numShowersUni')?.clearValidators();

            // updating validations
            this.restroomForm.get('numToiletsMen')?.updateValueAndValidity();
            this.restroomForm.get('numToiletsWomen')?.updateValueAndValidity();
            this.restroomForm.get('numToiletsUni')?.updateValueAndValidity();
            this.restroomForm.get('numShowersMen')?.updateValueAndValidity();
            this.restroomForm.get('numShowersWomen')?.updateValueAndValidity();
            this.restroomForm.get('numShowersUni')?.updateValueAndValidity();
        }
    }

}