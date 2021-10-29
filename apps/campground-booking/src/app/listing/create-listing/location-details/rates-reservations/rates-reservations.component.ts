import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { IAllRefs } from "../../../../shared/listing.model";
import { ListingService } from "../../../../shared/listing.service";

@Component({
    selector: 'rates-reservations',
    templateUrl: './rates-reservations.component.html',
    styleUrls: ['./rates-reservations.component.css']
})
export class RatesReservationsComponent implements OnInit{
    submitted: boolean = false;
    allRefsTmp:any;
    allRefsObj!: IAllRefs[];
    byWeekMonthFromService: any = {};
    onlineReservationSystemsFromService: any = {};
    creditCardsAccepted: boolean = false;
    reservationsAccepted: boolean = false;
    onlineReservation: boolean = false;
    onlineReservationOther: boolean = false;
    creditCardOptions: string[] = [];

    // public start: string = new Date().toLocaleDateString();
    public start: Date = new Date();
    public end: Date = new Date();

    constructor(private formBuilder: FormBuilder, private ls: ListingService) {

    }

    ngOnInit() {
        this.getFormDropDownData();
    }

    ratesReservationsForm = this.formBuilder.group({
        overnightRatesFrom: ['', [Validators.required, Validators.pattern("^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*\.[0-9]{2}$")]],
        overnightRatesTo: ['', [Validators.required, Validators.pattern("^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*\.[0-9]{2}$")]],
        tentRatesFrom: ['', [Validators.required, Validators.pattern("^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*\.[0-9]{2}$")]],
        tentRatesTo: ['', [Validators.required, Validators.pattern("^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*\.[0-9]{2}$")]],
        seasonalRatesFrom: ['', [Validators.required, Validators.pattern("^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*\.[0-9]{2}$")]],
        seasonalRatesTo: ['', [Validators.required, Validators.pattern("^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*\.[0-9]{2}$")]],
        byWeekMonth: ['', Validators.required],
        rateStartDate: ['', Validators.required],
        rateEndDate: ['', Validators.required],
        togglecreditCards: false,
        creditCardOptions: this.formBuilder.group({
            creditCardOption1: false, creditCardOption2: false, creditCardOption3: false, creditCardOption4: false,
            creditCardOption5: false
        }),
        toggleReservations: false,
        toggleOnlineReservation: false,
        onlineReservationSystem: [''],
        onlineReservationSystemOther: ['']
    });

    onSubmit(): void {
        this.submitted = true;
        if(this.ratesReservationsForm.valid) {
            console.log(this.ratesReservationsForm.value);
        } else {
            console.log('not valid');
            return;
        }
    }
    
    get f() { return this.ratesReservationsForm.controls; }

    clearChanges() {
        this.ratesReservationsForm.reset();
        this.submitted = false;
        //resetting toggle text to no
        this.creditCardsAccepted = false;
        this.reservationsAccepted = false;
        this.onlineReservation = false;
        this.onlineReservationOther = false;
        //resetting select all that apply radio cards
        this.creditCardOptions = [];
    }
    getFormDropDownData() {
        this.allRefsTmp = window.localStorage.getItem('all-refs');
        this.allRefsObj = JSON.parse(this.allRefsTmp);
        console.log(this.allRefsObj)
        for(let [key, value] of Object.entries(this.allRefsObj)) {
            if(key === 'byWeekMonths') {
                this.byWeekMonthFromService = value;
            }
            if(key === 'onlineReservationSystems') {
                this.onlineReservationSystemsFromService = value;
            }
        }
    }

    checkBoxCreditCardsAcceptChange(cb:any) {
        this.creditCardsAccepted = !this.creditCardsAccepted;
        this.creditCardOptions = [];
    }
    checkBoxReservationsAcceptChange(cb:any) {
        this.reservationsAccepted = !this.reservationsAccepted;
    }
    checkBoxOnlineReservationChange(cb:any) {
        this.onlineReservation = !this.onlineReservation;
        if (this.onlineReservation === true) {
            this.ratesReservationsForm.get('onlineReservationSystem')?.setValidators([Validators.required])
            this.ratesReservationsForm.get('onlineReservationSystem')?.updateValueAndValidity()
        } else {
            this.ratesReservationsForm.get('onlineReservationSystem')?.clearValidators()
            this.ratesReservationsForm.get('onlineReservationSystem')?.updateValueAndValidity()
        }
    }

    creditCardChecked(radio: any) {
        if (!this.creditCardOptions.includes(radio)) {
            this.creditCardOptions.push(radio)
          } else {
            this.creditCardOptions = this.creditCardOptions.filter(option => option !== radio)
          }
    }

    onChange(event:any): void {
        const newVal = event.target.value;
        console.log(newVal)
        if(newVal == 7) {
            this.onlineReservationOther = true;
            this.ratesReservationsForm.get('onlineReservationSystemOther')?.setValidators([Validators.required])
            this.ratesReservationsForm.get('onlineReservationSystemOther')?.updateValueAndValidity()
        } else {
            this.onlineReservationOther = false;
            this.ratesReservationsForm.get('onlineReservationSystemOther')?.clearValidators()
            this.ratesReservationsForm.get('onlineReservationSystemOther')?.updateValueAndValidity()
        }
    }
}