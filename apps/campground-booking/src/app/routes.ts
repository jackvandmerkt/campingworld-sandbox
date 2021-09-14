import { Routes } from "@angular/router";
import { CreateListingComponent } from "./create-listing/create-listing.component";
import { ContactInfoComponent } from "./create-listing/location-info/contact-info/contact-info.component";
import { DirectionsComponent } from "./create-listing/location-info/directions/directions.component";
import { DiscountsAffiliationsComponent } from "./create-listing/location-info/discounts-affiliations/discounts-affiliations.component";
import { GoodSamParkComponent } from "./create-listing/location-info/good-sam-park/good-sam-park.component";
import { GoodSamRecordFormComponent } from "./create-listing/location-info/good-sam-record/good-sam-record.component";
import { OwnerAndB2bInfoComponent } from "./create-listing/location-info/owner-and-b2b-info/owner-and-b2b-info.component";
import { AdvertisingCodesComponent } from "./create-listing/location-info/advertising-codes/advertising-codes.component";
import { HomeComponent } from "./home/home.component";
import { NewListingsComponent } from "./new-listing/new-listing.component";
import { PoliciesComponent } from "./create-listing/location-details/policies/policies.component";
import { InteriorRoadsSiteInformationComponent } from "./create-listing/location-details/interior-roads/interior-roads-site-info.component";
import { EcoFriendlyComponent } from "./create-listing/location-details/eco-friendly/eco-friendly.component";
import { RatesReservationsComponent } from "./create-listing/location-details/rates-reservations/rates-reservations.component";
import { RestroomsComponent } from "./create-listing/amenities/restrooms/restrooms.component";
import { OnSiteServicesComponent } from "./create-listing/amenities/on-site-services/on-site-services.component";
import { RecreationComponent } from "./create-listing/location-details/recreation/recreation.component";
import { TentingRentalsComponent } from "./create-listing/rent-buy/tenting-rentals/tenting-rentals.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'new-listing', component: NewListingsComponent },
  {
    path: 'create-listing', component: CreateListingComponent,
    children: [
      { path: 'good-sam-record', component: GoodSamRecordFormComponent },
      { path: 'contact-info', component: ContactInfoComponent },
      { path: 'discounts-affiliations', component: DiscountsAffiliationsComponent },
      { path: 'owner-b2b-info', component: OwnerAndB2bInfoComponent },
      { path: 'directions', component: DirectionsComponent },
      { path: 'advertising-codes', component: AdvertisingCodesComponent },
      { path: 'good-sam-park', component: GoodSamParkComponent },
      { path: 'policies', component: PoliciesComponent },
      { path: 'interior-roads', component: InteriorRoadsSiteInformationComponent },
      { path: 'eco-friendly', component: EcoFriendlyComponent },
      { path: 'rates-reservations', component: RatesReservationsComponent },
      { path: 'restrooms', component: RestroomsComponent },
      { path: 'on-site-services', component: OnSiteServicesComponent },
      { path: 'recreation', component: RecreationComponent },
      { path: 'tenting-rentals', component: TentingRentalsComponent }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];