import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'published-ratings',
    templateUrl: './published-ratings.component.html',
    styleUrls: ['./published-ratings.component.css']
})

export class PublishedRatingsComponent {
    constructor(private formBuilder: FormBuilder) {

    }

    publishedRatings = this.formBuilder.group({
        lyNonRatedCode: '',
        lyFacilitiesTotal: '',
        lyRestroomsTotal: '',
        lyVisualTotal: '',
        lyRatingChange: '',
        tyNonRatedCode: '',
        tyFacilitiesTotal: '',
        tyRestroomsTotal: '',
        tyVisualTotal: '',
        tyRatingChange: '',
        confirmCheck: false
    });

    onSubmit(): void {
        console.log(this.publishedRatings.value);
    }
    clearChanges() {
        this.publishedRatings.reset();
    }
}