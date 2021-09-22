import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { OwnerAndB2bInfoComponent } from './create-listing/location-info/owner-and-b2b-info/owner-and-b2b-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiscountsAffiliationsComponent } from './create-listing/location-info/discounts-affiliations/discounts-affiliations.component';
import { DirectionsComponent } from './create-listing/location-info/directions/directions.component';
import { AdvertisingCodesComponent } from './create-listing/location-info/advertising-codes/advertising-codes.component';
import { GoodSamParkComponent } from './create-listing/location-info/good-sam-park/good-sam-park.component';
import { PoliciesComponent } from './create-listing/location-details/policies/policies.component';
import { InteriorRoadsSiteInformationComponent } from './create-listing/location-details/interior-roads/interior-roads-site-info.component';
import { EcoFriendlyComponent } from './create-listing/location-details/eco-friendly/eco-friendly.component';
import { RatesReservationsComponent } from './create-listing/location-details/rates-reservations/rates-reservations.component';
import { RestroomsComponent } from './create-listing/amenities/restrooms/restrooms.component';
import { OnSiteServicesComponent } from './create-listing/amenities/on-site-services/on-site-services.component';
import { RecreationComponent } from './create-listing/amenities/recreation/recreation.component';
import { TentingRentalsComponent } from './create-listing/rent-buy/tenting-rentals/tenting-rentals.component';
import { WaterRecreationComponent } from './create-listing/amenities/water-recreation/water-recreation.component';
import { LoginComponent } from "./user/login.component";
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './user/auth.service';
import { PublishedRatingsComponent } from './create-listing/ratings/published-ratings/published-ratings.component';
import { RvHomesParkModelsComponent } from './create-listing/rent-buy/rv-homes-park-models/rv-homes-park-models.component';
import { ListingUpdateDetailsComponent } from './create-listing/listing-update-details/listing-update-details.component';
import { RatingsComponent } from './create-listing/ratings/ratings.component';
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
    ContactInfoComponent,
    OwnerAndB2bInfoComponent,
    DiscountsAffiliationsComponent,
    DirectionsComponent,
    AdvertisingCodesComponent,
    GoodSamParkComponent,
    PoliciesComponent,
    InteriorRoadsSiteInformationComponent,
    EcoFriendlyComponent,
    RatesReservationsComponent,
    RestroomsComponent,
    RecreationComponent,
    WaterRecreationComponent,
    OnSiteServicesComponent,
    RecreationComponent,
    TentingRentalsComponent,
    LoginComponent,
    PublishedRatingsComponent,
    RvHomesParkModelsComponent,
    ListingUpdateDetailsComponent,
    RatingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService],
  bootstrap: [AppComponent],

})
export class AppModule { }
