import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'restrooms',
    templateUrl: './restrooms.component.html',
    styleUrls: ['./restrooms.component.css']
})
export class RestroomsComponent implements OnInit{
    restrooms!: FormGroup;
    pitTolietsOnly: boolean = false;
    restroomsShowersPaid: boolean = false;
    restroomsAndShowers: boolean = false;

    constructor() {

    }

    ngOnInit() {
        this.restrooms = new FormGroup({

        });
    }

    checkBoxPitTolietsChange(cb:any) {
        this.pitTolietsOnly = !this.pitTolietsOnly;
    }
    checkBoxPaidChange(cb:any) {
        this.restroomsShowersPaid = !this.restroomsShowersPaid;
    }

    onChange(event:any): void {
        const newVal = event.target.value;
        if(newVal == "1") {
            this.restroomsAndShowers = true;
        } else {
            this.restroomsAndShowers = false;
        }
    }

}