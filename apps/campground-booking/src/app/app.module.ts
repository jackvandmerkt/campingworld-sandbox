import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListingsComponent } from './home/cards/listing.component';
import { OrdersComponent } from './home/cards/orders.component';
import { CombinedCardComponent } from './home/combined-cards.component';
import { NavComponent } from './nav/nav.component';
import { NewListingsComponent } from './new-listing/new-listing.component';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent, 
    NavComponent,
    OrdersComponent,
    ListingsComponent,
    CombinedCardComponent,
    NewListingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
