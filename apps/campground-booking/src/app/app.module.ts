import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NeedSupportComponent } from './create-listing/create-listing-cards/need-support.component';
import { ProTipsComponent } from './create-listing/create-listing-cards/protips.component';
import { CreateListingHeaderComponent } from './create-listing/create-listing-header/create-listing-header.component';
import { CreateListingNavComponent } from './create-listing/create-listing-nav/create-listing-nav.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { GoodSamRecordFormComponent } from './create-listing/location-info/good-sam-record/good-sam-record.component';
import { ListingsComponent } from './home/cards/listing.component';
import { OrdersComponent } from './home/cards/orders.component';
import { HomeComponent } from './home/home.component';
import { ProposalsComponent } from './home/proposals/proposals.component';
import { RecentlyViewedComponent } from './home/recently-viewed/recently-viewed.component';
import { NavComponent } from './nav/nav.component';
import { NewListingsComponent } from './new-listing/new-listing.component';
import { routes } from './routes';
import { ContactInfoComponent } from './create-listing/location-info/contact-info/contact-info.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OrdersComponent,
    ListingsComponent,
    HomeComponent,
    NewListingsComponent,
    CreateListingNavComponent,
    RecentlyViewedComponent,
    ProposalsComponent,
    CreateListingComponent,
    GoodSamRecordFormComponent,
    NeedSupportComponent,
    ProTipsComponent,
    CreateListingHeaderComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
