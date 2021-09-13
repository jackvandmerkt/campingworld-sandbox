import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    selector: 'rates-reservations',
    templateUrl: './rates-reservations.component.html',
    styleUrls: ['./rates-reservations.component.css']
})
export class RatesReservationsComponent implements OnInit{
    ratesReservations!: FormGroup;
    creditCardsAccepted: boolean = false;
    reservationsAccepted: boolean = false;
    onlineReservation: boolean = false;
    // credit cards checkbox booleans
    debitSelected: boolean = false;
    discoverSelected: boolean = false;
    visaSelected: boolean = false;
    mastercardSelected: boolean = false;
    amexSelected: boolean = false;
    // used for input box to only appear if user selects other in online reservation system dropdown
    onlineReservationOther: boolean = false;

    constructor() {

    }

    ngOnInit() {
        this.ratesReservations = new FormGroup({

        });
    }

    checkBoxCreditCardsAcceptChange(cb:any) {
        this.creditCardsAccepted = !this.creditCardsAccepted;
    }
    checkBoxReservationsAcceptChange(cb:any) {
        this.reservationsAccepted = !this.reservationsAccepted;
    }
    checkBoxOnlineReservationChange(cb:any) {
        this.onlineReservation = !this.onlineReservation;
    }

    creditCardChecked(radio: any) {
        if(radio === "debit") {
            this.debitSelected = !this.debitSelected;
        }
        if(radio === "discover") {
            this.discoverSelected = !this.discoverSelected;
        }
        if(radio === "visa") {
            this.visaSelected = !this.visaSelected;
        }
        if(radio === "mastercard") {
            this.mastercardSelected = !this.mastercardSelected;
        }
        if(radio === "amex") {
            this.amexSelected = !this.amexSelected;
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