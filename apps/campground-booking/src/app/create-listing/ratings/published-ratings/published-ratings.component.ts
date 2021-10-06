import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'published-ratings',
    templateUrl: './published-ratings.component.html',
    styleUrls: ['./published-ratings.component.css']
})

export class PublishedRatingsComponent {
    submitted: boolean = false;
    constructor(private formBuilder: FormBuilder) {

    }

    publishedRatings = this.formBuilder.group({
        lyNonRatedCode: ['', Validators.required],
        lyFacilitiesTotal: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        lyRestroomsTotal: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        lyVisualTotal: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        lyRatingChange: ['', Validators.required],
        tyNonRatedCode: ['', Validators.required],
        tyFacilitiesTotal: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        tyRestroomsTotal: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        tyVisualTotal: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        tyRatingChange: ['', Validators.required],
        confirmCheck: false
    });

    onSubmit(): void {
        this.submitted = true;
        if(this.publishedRatings.valid) {
            console.log(this.publishedRatings.value);
        } else {
            console.log('not valid');
            return;
        }
    }
    
    get f() { return this.publishedRatings.controls; }

    clearChanges() {
        this.publishedRatings.reset();
        this.submitted = false;
    }
}