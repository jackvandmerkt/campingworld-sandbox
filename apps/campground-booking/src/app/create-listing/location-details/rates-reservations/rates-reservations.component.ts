import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    selector: 'rates-reservations',
    templateUrl: './rates-reservations.component.html',
    styleUrls: ['./rates-reservations.component.css']
})
export class RatesReservationsComponent implements OnInit{
    ratesReservations!: FormGroup;

    constructor() {

    }

    ngOnInit() {
        this.ratesReservations = new FormGroup({

        });
    }

}