import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { IAllRefs } from "../../../../shared/listing-counts.model";
import { ListingService } from "../../../../shared/listing.service";

@Component({
    selector: 'directions',
    templateUrl: '/directions.component.html',
    styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {
    allRefsTmp:any;
    allRefsObj!: IAllRefs[];
    directionalArrowsFromService: any = {};
    isNascarChecked:boolean = false;
    submitted: boolean = false;
    constructor(private formBuilder: FormBuilder, private ls: ListingService) {

    }

    directionsForm = this.formBuilder.group({
        directions: ['', Validators.required],
        directionsFromTown: ['', Validators.required],
        toggleNascar: false,
        milesOrKM: [''],
        unitOfMeasurement: [''],
        nameOfTrack: ['']
      });

    ngOnInit() {
        this.getFormDropDownData();
    }
    
    onSubmit(): void {
        this.submitted = true;
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

    getFormDropDownData() {
        this.allRefsTmp = window.localStorage.getItem('all-refs');
        this.allRefsObj = JSON.parse(this.allRefsTmp);
        console.log(this.allRefsObj)
        for(let [key, value] of Object.entries(this.allRefsObj)) {
            if(key === 'directionalArrows') {
                this.directionalArrowsFromService = value;
            }
        }
    }
    checkBoxNascarChange(cb:any) {
        this.isNascarChecked = !this.isNascarChecked;
        if (this.isNascarChecked === true) {
            this.directionsForm.get('milesOrKM')?.setValidators([Validators.required, Validators.pattern("^[0-9]+\.?[0-9]*$")])
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