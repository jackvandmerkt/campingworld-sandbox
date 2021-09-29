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
        directions: '',
        directionsFromTown: '',
        toggleNascar: false,
        milesOrKM: [''],
        unitOfMeasurement: [''],
        nameOfTrack: ['']
      });

    // toggleNascarControl = this.directionsForm.get('toggleNascar');
    // milesOrKMControl = this.directionsForm.get('milesOrKM');
    // unitOfMeasurementControl = this.directionsForm.get('unitOfMeasurement');
    // nameOfTrackControl = this.directionsForm.get('nameOfTrack');
      
    //   subscription = this.toggleNascarControl?.valueChanges.subscribe(value => {
    //     if (value === true) {
    //         this.milesOrKMControl?.addValidators([Validators.required]);
    //         this.unitOfMeasurementControl?.addValidators([Validators.required]);
    //         this.nameOfTrackControl?.addValidators([Validators.required]);
    //     }
    //     else {
    //         this.milesOrKMControl?.setValue('lul');
    //         this.milesOrKMControl?.setValidators(null);
    //         this.unitOfMeasurementControl?.setValue('');
    //         this.unitOfMeasurementControl?.setValidators(null);
    //         this.nameOfTrackControl?.setValue('');
    //         this.nameOfTrackControl?.setValidators(null);
    //     }
      
    //     this.directionsForm.updateValueAndValidity();
      
    //   });
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
    }
}