import { Component, Input, Output, OnChanges, OnInit, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { IOrdersCounts, } from '../../shared/orders-counts.model';
import { OrdersService } from '../../shared/orders.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html'
})

export class OrdersComponent implements OnInit, OnChanges {
  ordersCounts!: IOrdersCounts;
  @Input() territoryCode = '';
  @Output() loading = new EventEmitter<boolean>();
  loaded = false

  constructor(private router: Router, private ordersService: OrdersService) {
  }

  redirect() {
    this.router.navigateByUrl('/new-listing')
  }

  ngOnInit() {
    this.ordersService.getOrdersCounts('All').subscribe((response: IOrdersCounts) => {
      this.ordersCounts = response;
      this.loading.emit(false);
      this.loaded = true
    });
  }

  ngOnChanges() {
    this.ordersService.getOrdersCounts(this.territoryCode).subscribe((response: IOrdersCounts) => {
      this.ordersCounts = response;
      this.loading.emit(false);
      this.loaded = true
    })
  }
}