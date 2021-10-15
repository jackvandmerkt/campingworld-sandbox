import { Routes } from "@angular/router";
import { OnSiteServicesComponent } from "./create-listing/amenities/on-site-services/on-site-services.component";
import { RecreationComponent } from "./create-listing/amenities/recreation/recreation.component";
import { RestroomsComponent } from "./create-listing/amenities/restrooms/restrooms.component";
import { WaterRecreationComponent } from "./create-listing/amenities/water-recreation/water-recreation.component";
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
import { NewListingsComponent } from "./new-listing-info/new-listing.component";

export const listingRoutes: Routes = [
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
      { path: 'water-recreation', component: WaterRecreationComponent },
      { path: 'tenting-rentals', component: TentingRentalsComponent },
      { path: 'ratings', component: RatingsComponent },
      { path: 'published-ratings', component: PublishedRatingsComponent },
      { path: 'rv-homes-park-models', component: RvHomesParkModelsComponent },
      { path: 'listing-update-details', component: ListingUpdateDetailsComponent }
    ]
  }
];