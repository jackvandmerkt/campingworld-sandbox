import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'directions',
    templateUrl: '/directions.component.html',
    styleUrls: ['./directions.component.css']
})
export class DirectionsComponent {
    isNascarChecked:boolean = false;
    submitted: boolean = false;
    constructor(private formBuilder: FormBuilder) {

    }

    directionsForm = this.formBuilder.group({
        directions: ['', Validators.required],
        directionsFromTown: ['', Validators.required],
        toggleNascar: false,
        milesOrKM: [''],
        unitOfMeasurement: [''],
        nameOfTrack: ['']
      });
    
      onSubmit(): void {
        this.submitted = true;
        console.log(this.directionsForm.value.toggleNascar)
        if(this.directionsForm.valid) {
            console.log(this.directionsForm.value);
        } else {
            console.log('not valid');
            return;
        }
    }
    
    get f() { return this.directionsForm.controls; }

    clearChanges() {
        this.directionsForm.reset();
        this.submitted = false;
        //resetting toggle text to no
        this.isNascarChecked = false;
    }

    checkBoxNascarChange(cb:any) {
        this.isNascarChecked = !this.isNascarChecked;
        if (this.isNascarChecked === true) {
            this.directionsForm.get('milesOrKM')?.setValidators([Validators.required, Validators.pattern("^[0-9]*$")])
            this.directionsForm.get('unitOfMeasurement')?.setValidators([Validators.required])
            this.directionsForm.get('nameOfTrack')?.setValidators([Validators.required])
            this.directionsForm.get('milesOrKM')?.updateValueAndValidity()
            this.directionsForm.get('unitOfMeasurement')?.updateValueAndValidity()
            this.directionsForm.get('nameOfTrack')?.updateValueAndValidity()
        } else {
            this.directionsForm.get('milesOrKM')?.clearValidators()
            this.directionsForm.get('unitOfMeasurement')?.clearValidators()
            this.directionsForm.get('nameOfTrack')?.clearValidators()
            this.directionsForm.get('milesOrKM')?.updateValueAndValidity()
            this.directionsForm.get('unitOfMeasurement')?.updateValueAndValidity()
            this.directionsForm.get('nameOfTrack')?.updateValueAndValidity()
        }
    }
}