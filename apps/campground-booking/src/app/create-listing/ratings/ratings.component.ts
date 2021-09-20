import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: 'ratings',
    templateUrl: './ratings.component.html',
    styleUrls: ['./ratings.component.css']
})

export class RatingsComponent {
    canParkBeRated: boolean = false;
    unHideFacilities: boolean = false;

    constructor(private formBuilder: FormBuilder) {

    }

    ratingsForm = this.formBuilder.group({
        toggleCanParkBeRated: false,
        nonRatedCode: ''
    });

    onSubmit(): void {
        console.log(this.ratingsForm.value);
    }

    checkBoxCanParkBeRatedChange(cb:any) {
        this.canParkBeRated = !this.canParkBeRated;
    }

    facilitiesToggle() {
        this.unHideFacilities = !this.unHideFacilities;
    }
}