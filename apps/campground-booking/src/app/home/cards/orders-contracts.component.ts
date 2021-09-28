/* eslint-disable @typescript-eslint/no-explicit-any */
import {Component, Input} from '@angular/core'


@Component({
    selector:'orders-contracts',
    templateUrl:'./orders-contracts.component.html'
})
export class OrdersContractsComponent{
    @Input() ordersContracts: any
}