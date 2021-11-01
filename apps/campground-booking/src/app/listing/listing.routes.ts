import { Routes } from "@angular/router";
import { AdSummaryComponent } from "./ad-summary/ad-summary.component";
import { CreateProposalComponent } from "./create-proposal/create-proposal.component";
import { AllListingsComponent } from "./all-listing/all-listing.component";
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
import {ContactInfoResolver} from "./create-listing/location-info/contact-info/contact-info.resolver.service"
import { DirectionsComponent } from "./create-listing/location-info/directions/directions.component";
import { DiscountsAffiliationsComponent } from "./create-listing/location-info/discounts-affiliations/discounts-affiliations.component";
import { GoodSamParkComponent } from "./create-listing/location-info/good-sam-park/good-sam-park.component";
import { GoodSamRecordFormComponent } from "./create-listing/location-info/good-sam-record/good-sam-record.component";
import { GoodSamRecordResolver } from "./create-listing/location-info/good-sam-record/good-sam-record.resolver.service";
import { OwnerAndB2bInfoComponent } from "./create-listing/location-info/owner-and-b2b-info/owner-and-b2b-info.component";
import { PublishedRatingsComponent } from "./create-listing/ratings/published-ratings/published-ratings.component";
import { RatingsComponent } from "./create-listing/ratings/ratings.component";
import { RvHomesParkModelsComponent } from "./create-listing/rent-buy/rv-homes-park-models/rv-homes-park-models.component";
import { TentingRentalsComponent } from "./create-listing/rent-buy/tenting-rentals/tenting-rentals.component";
import { NewListingsComponent } from "./new-listing-info/new-listing.component";
import { RestroomsResolver } from "./create-listing/amenities/restrooms/restrooms.resolver.service";
import { OnSiteServicesResolver } from "./create-listing/amenities/on-site-services/on-site-services.resolver.service";

export const listingRoutes: Routes = [
  { path: 'new-listing', component: NewListingsComponent },
  { path: 'all-listing', component: AllListingsComponent },
  { path: 'ad-summary', component: AdSummaryComponent },
  { path: 'create-proposal', component: CreateProposalComponent },
  {
    path: 'listing', component: CreateListingComponent,
    children: [
      { path: 'good-sam-record/:fileNumber', component: GoodSamRecordFormComponent, 
        resolve: {data:GoodSamRecordResolver} },
      { path: 'contact-info/:fileNumber', component: ContactInfoComponent,
        resolve: {data:ContactInfoResolver} },
      { path: 'discounts-affiliations', component: DiscountsAffiliationsComponent },
      { path: 'owner-b2b-info', component: OwnerAndB2bInfoComponent },
      { path: 'directions', component: DirectionsComponent },
      { path: 'advertising-codes', component: AdvertisingCodesComponent },
      { path: 'good-sam-park', component: GoodSamParkComponent },
      { path: 'policies', component: PoliciesComponent },
      { path: 'interior-roads', component: InteriorRoadsSiteInformationComponent },
      { path: 'eco-friendly', component: EcoFriendlyComponent },
      { path: 'rates-reservations', component: RatesReservationsComponent },
      { path: 'restrooms/:fileNumber', component: RestroomsComponent,
        resolve: {data:RestroomsResolver} },
      { path: 'on-site-services/:fileNumber', component: OnSiteServicesComponent,
        resolve: {data:OnSiteServicesResolver} },
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