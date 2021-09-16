import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'published-ratings',
    templateUrl: './published-ratings.component.html',
    styleUrls: ['./published-ratings.component.css']
})

export class PublishedRatingsComponent implements OnInit {
    publishedRatings!: FormGroup
    constructor() {

    }

    ngOnInit() {
        this.publishedRatings = new FormGroup({

        });
    }
}