/* eslint-disable @typescript-eslint/no-explicit-any */
import {Component, Input} from '@angular/core'


@Component({
    selector:'orders-products-details',
    templateUrl:'./orders-products-details.component.html'
})
export class OrdersProductsDetails{
    @Input() ordersProducts: any
}