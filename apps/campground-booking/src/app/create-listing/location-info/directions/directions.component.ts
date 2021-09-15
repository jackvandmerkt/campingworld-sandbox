import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'directions',
    templateUrl: '/directions.component.html',
    styleUrls: ['./directions.component.css']
})
export class DirectionsComponent {
    isNascarChecked:boolean = false;

    constructor(private formBuilder: FormBuilder) {

    }

    directionsForm = this.formBuilder.group({
        directions: '',
        directionsFromTown: '',
        toggleNascar: false,
        milesOrKM: '',
        unitOfMeasurement: '',
        nameOfTrack: ''
      });
    
    onSubmit(): void {
        console.log(this.directionsForm.value);
    }

    checkBoxNascarChange(cb:any) {
        this.isNascarChecked = !this.isNascarChecked;
    }
}