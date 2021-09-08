import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'directions',
    templateUrl: '/directions.component.html',
    styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {
    directions!: FormGroup;
    isNascarChecked:boolean = false;

    constructor() {

    }

    ngOnInit() {
        this.directions = new FormGroup({
            directionsFromTown: new FormControl(''),
            toggleNascar: new FormControl('')       
        });
    };

    checkBoxNascarChange(cb:any) {
        this.isNascarChecked = !this.isNascarChecked;
    }
}