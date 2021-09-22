/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {Component, Input} from '@angular/core'


@Component({
    selector:'listing-statuses',
    templateUrl:'./listing-statuses.component.html'
})
export class ListingStatusesComponent{
    @Input() listingStatuses: any
}