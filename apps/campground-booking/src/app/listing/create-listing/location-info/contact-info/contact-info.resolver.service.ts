import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ListingService } from "apps/campground-booking/src/app/shared/listing.service";
import { map } from "rxjs/operators";

@Injectable()
export class ContactInfoResolver implements Resolve<any> {
    constructor(private ls: ListingService, ) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.ls.getContactInfo(route.params['fileNumber']).pipe(map(data => data))
    }
}