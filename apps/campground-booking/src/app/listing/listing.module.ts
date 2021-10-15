import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { DatePickerModule, DateRangePickerModule } from "@syncfusion/ej2-angular-calendars";
import { AppComponent } from "../app.component";
import { ListingService } from "../shared/listing.service";
import { OnSiteServicesComponent } from "./create-listing/amenities/on-site-services/on-site-services.component";
import { RecreationComponent } from "./create-listing/amenities/recreation/recreation.component";
import { RestroomsComponent } from "./create-listing/amenities/restrooms/restrooms.component";
import { WaterRecreationComponent } from "./create-listing/amenities/water-recreation/water-recreation.component";
import { NeedSupportComponent } from "./create-listing/create-listing-cards/need-support.component";
import { ProTipsComponent } from "./create-listing/create-listing-cards/protips.component";
import { CreateListingHeaderComponent } from "./create-listing/create-listing-header/create-listing-header.component";
import { CreateListingNavComponent } from "./create-listing/create-listing-nav/create-listing-nav.component";
import { CreateListingComponent } from "./create-listing/create-listing.component";
import { ListingUpdateDetailsComponent } from "./create-listing/listing-update-details/listing-update-details.component";
import { EcoFriendlyComponent } from "./create-listing/location-details/eco-friendly/eco-friendly.component";
import { InteriorRoadsSiteInformationComponent } from "./create-listing/location-details/interior-roads/interior-roads-site-info.component";
import { PoliciesComponent } from "./create-listing/location-details/policies/policies.component";
import { RatesReservationsComponent } from "./create-listing/location-details/rates-reservations/rates-reservations.component";
import { AdvertisingCodesComponent } from "./create-listing/location-info/advertising-codes/advertising-codes.component";
import { ContactInfoComponent } from "./create-listing/location-info/contact-info/contact-info.component";
import { DirectionsComponent } from "./create-listing/location-info/directions/directions.component";
import { DiscountsAffiliationsComponent } from "./create-listing/location-info/discounts-affiliations/discounts-affiliations.component";
import { GoodSamParkComponent } from "./create-listing/location-info/good-sam-park/good-sam-park.component";
import { GoodSamRecordFormComponent } from "./create-listing/location-info/good-sam-record/good-sam-record.component";
import { OwnerAndB2bInfoComponent } from "./create-listing/location-info/owner-and-b2b-info/owner-and-b2b-info.component";
import { PublishedRatingsComponent } from "./create-listing/ratings/published-ratings/published-ratings.component";
import { RatingsComponent } from "./create-listing/ratings/ratings.component";
import { RvHomesParkModelsComponent } from "./create-listing/rent-buy/rv-homes-park-models/rv-homes-park-models.component";
import { TentingRentalsComponent } from "./create-listing/rent-buy/tenting-rentals/tenting-rentals.component";
import { listingRoutes } from "./listing.routes";
import { NewListingsComponent } from "./new-listing-info/new-listing.component";

@NgModule({
    declarations: [
    NewListingsComponent,
    CreateListingNavComponent,
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
    TentingRentalsComponent,
    PublishedRatingsComponent,
    RvHomesParkModelsComponent,
    ListingUpdateDetailsComponent,
    RatingsComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forChild(listingRoutes),
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      DateRangePickerModule,
      DatePickerModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [ListingService],
    bootstrap: [AppComponent],
  
  })
  export class ListingModule { }
  