import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { ListingService } from "apps/campground-booking/src/app/shared/listing.service";
import { map } from "rxjs/operators";

@Injectable()
export class RecreationResolver implements Resolve<any> {
    constructor(private ls: ListingService, ) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.ls.getRecreation(route.params['fileNumber']).pipe(map(data => data))
    }
}