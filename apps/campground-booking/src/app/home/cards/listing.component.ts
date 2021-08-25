import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'listings',
    templateUrl: './listings.component.html'
})
export class ListingsComponent {
    constructor(private router: Router) {

    }

    redirect() {
        this.router.navigateByUrl('/new-listing')
    }
}