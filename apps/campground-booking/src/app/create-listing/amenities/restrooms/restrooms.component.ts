import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'restrooms',
    templateUrl: './restrooms.component.html',
    styleUrls: ['./restrooms.component.css']
})
export class RestroomsComponent {
    pitTolietsOnly: boolean = false;
    restroomsShowersPaid: boolean = false;
    restroomsAndShowers: boolean = false;

    constructor(private formBuilder: FormBuilder) {

    }

    // form object
    restroomForm = this.formBuilder.group({
        togglePitToliets: false,
        restroomsShowersSelect: '',
        numTolietsMen: '',
        numTolietsWomen: '',
        numToiletsUni: '',
        numShowersMen: '',
        numShowersWomen: '',
        numShowersUni: '',
        togglePaid: false
      });

      onSubmit(): void {
        console.log(this.restroomForm.value);
    }

    checkBoxPitTolietsChange(cb:any) {
        this.pitTolietsOnly = !this.pitTolietsOnly;
    }
    checkBoxPaidChange(cb:any) {
        this.restroomsShowersPaid = !this.restroomsShowersPaid;
    }

    onChange(event:any): void {
        const newVal = event.target.value;
        if(newVal == "1") {
            this.restroomsAndShowers = true;
        } else {
            this.restroomsAndShowers = false;
        }
    }

}