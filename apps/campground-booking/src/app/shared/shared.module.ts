import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingService } from './listing.service';
import { OrdersService } from './orders.service';
import { AppComponent } from '../app.component';

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [ListingService, OrdersService]
})
export class SharedModule { }