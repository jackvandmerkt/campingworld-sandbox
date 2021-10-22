import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { INonRatedCodes } from "../../../../shared/listing-counts.model";
import { ListingService } from "../../../../shared/listing.service";

@Component({
    selector: 'published-ratings',
    templateUrl: './published-ratings.component.html',
    styleUrls: ['./published-ratings.component.css']
})

export class PublishedRatingsComponent implements OnInit {
    submitted: boolean = false;
    allRefsTmp:any;
    allRefsObj: any = {};
    nonRatedCodesFromService: any = {};
    constructor(private formBuilder: FormBuilder, private ls: ListingService) {

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

    ngOnInit() {
        this.getFormDropDownData();
    }

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

    getFormDropDownData() {
        this.allRefsTmp = window.localStorage.getItem('all-refs');
        this.allRefsObj = JSON.parse(this.allRefsTmp);
        console.log(this.allRefsObj)
        for(let [key, value] of Object.entries(this.allRefsObj)) {
            if(key === 'nonRatedCodes') {
                this.nonRatedCodesFromService = value;
            }
        }
    }
}