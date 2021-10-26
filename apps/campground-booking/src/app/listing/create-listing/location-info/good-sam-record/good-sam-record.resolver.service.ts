import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ListingService } from "apps/campground-booking/src/app/shared/listing.service";
import { map } from "rxjs/operators";

@Injectable()
export class GoodSamRecordResolver implements Resolve<any> {
    constructor(private ls: ListingService) {}

    resolve() {
        return this.ls.getGoodSamRecordId('202222543').pipe(map(data => data))
    }
}