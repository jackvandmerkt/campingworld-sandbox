import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListingsComponent } from './home/cards/listing.component';
import { OrdersComponent } from './home/cards/orders.component';
import { CombinedCardComponent } from './home/combined-cards.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavComponent,
    OrdersComponent,
    ListingsComponent,
    CombinedCardComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
