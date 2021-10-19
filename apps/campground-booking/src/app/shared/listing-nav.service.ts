import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class ListingNavService {
    formStatus = new Subject<any>();
    constructor(){

    }

    public getFormStatus(): Observable<any> {
        return this.formStatus.asObservable();
    }

    public updateFormStatus(value: any): void {
        this.formStatus.next(value);
    }
}