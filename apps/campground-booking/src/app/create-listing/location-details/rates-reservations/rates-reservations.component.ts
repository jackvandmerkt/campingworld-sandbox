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
    creditCardOptions: string[] = [];
    onlineReservationOther: boolean = false;

    constructor() {

    }

    ngOnInit() {
        this.ratesReservations = new FormGroup({

        });
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