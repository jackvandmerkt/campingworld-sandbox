import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: 'listing-update-details',
    templateUrl: './listing-update-details.component.html',
    styleUrls: ['./listing-update-details.component.css']
})
export class ListingUpdateDetailsComponent {
    phoneInterview: boolean = false;
    constructor(private formBuilder: FormBuilder) {

    }

    listingUpdateDetailsForm = this.formBuilder.group({
        personInterviewed: '',
        togglePhoneInterview: false,
        wiFiConectivity: '',
        cellularConectivity: '',
        cellService: ''
    });

    onSubmit(): void {
        console.log(this.listingUpdateDetailsForm.value);
    }

    checkBoxPhoneInterviewChange(cb: any) {
        this.phoneInterview = !this.phoneInterview;
    }
}