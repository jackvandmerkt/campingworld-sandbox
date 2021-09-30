import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'rates-reservations',
    templateUrl: './rates-reservations.component.html',
    styleUrls: ['./rates-reservations.component.css']
})
export class RatesReservationsComponent {
    creditCardsAccepted: boolean = false;
    reservationsAccepted: boolean = false;
    onlineReservation: boolean = false;
    onlineReservationOther: boolean = false;
    creditCardOptions: string[] = [];

    // public start: string = new Date().toLocaleDateString();
    public start: Date = new Date();
    public end: Date = new Date();

    constructor(private formBuilder: FormBuilder) {

    }

    ratesReservationsForm = this.formBuilder.group({
        overnightRatesFrom: ['', [Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")]],
        overnightRatesTo: ['', [Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")]],
        tentRatesFrom: ['', [Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")]],
        tentRatesTo: ['', [Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")]],
        seasonalRatesFrom: ['', [Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")]],
        seasonalRatesTo: ['', [Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")]],
        byWeekMonth: '',
        rateStartDate: '',
        rateEndDate: '',
        togglecreditCards: false,
        creditCardOptions: this.formBuilder.group({
            creditCardOption1: false, creditCardOption2: false, creditCardOption3: false, creditCardOption4: false,
            creditCardOption5: false
        }),
        toggleReservations: false,
        toggleOnlineReservation: false,
        onlineReservationSystem: '',
        onlineReservationSystemOther: ''
    });

    onSubmit(): void {
        console.log(this.ratesReservationsForm.value);
    }
    clearChanges() {
        this.ratesReservationsForm.reset();
        //resetting toggle text to no
        this.creditCardsAccepted = false;
        this.reservationsAccepted = false;
        this.onlineReservation = false;
        this.onlineReservationOther = false;
        //resetting select all that apply radio cards
        this.creditCardOptions = [];
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
        if(newVal === "other") {
            this.onlineReservationOther = true;
        } else {
            this.onlineReservationOther = false;
        }
    }
}