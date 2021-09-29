import { Component,OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IOrdersCounts, } from '../../shared/orders-counts.model';
import {OrdersService} from '../../shared/orders.service';

@Component({
    selector: 'orders',
    templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
    ordersCounts!:IOrdersCounts;
    territoryCode = 'ALL';
    constructor(private router: Router, private ordersService:OrdersService) {
    }
    redirect() {
        this.router.navigateByUrl('/new-listing')
    }
    ngOnInit(){
        this.ordersService.getOrdersCounts(this.territoryCode).subscribe((response: IOrdersCounts) => {
            this.ordersCounts = response;
            console.log(this.ordersCounts)
       })
    }
}