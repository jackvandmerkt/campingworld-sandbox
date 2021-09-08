import { Routes } from "@angular/router";
import { CreateListingComponent } from "./create-listing/create-listing.component";
import { ContactInfoComponent } from "./create-listing/location-info/contact-info/contact-info.component";
import { DirectionsComponent } from "./create-listing/location-info/directions/directions.component";
import { DiscountsAffiliationsComponent } from "./create-listing/location-info/discounts-affiliations/discounts-affiliations.component";
import { GoodSamRecordFormComponent } from "./create-listing/location-info/good-sam-record/good-sam-record.component";
import { OwnerAndB2bInfoComponent } from "./create-listing/location-info/owner-and-b2b-info/owner-and-b2b-info.component";
import { HomeComponent } from "./home/home.component";
import { NewListingsComponent } from "./new-listing/new-listing.component";

export const routes:Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'new-listing', component: NewListingsComponent },
    { path: 'create-listing', component: CreateListingComponent, 
        children: [
            { path: 'good-sam-record', component: GoodSamRecordFormComponent },
            { path: 'contact-info', component: ContactInfoComponent },
            { path: 'discounts-affiliations', component: DiscountsAffiliationsComponent },
            { path: 'owner-b2b-info', component: OwnerAndB2bInfoComponent },
            { path: 'directions', component: DirectionsComponent }
        ] },
    { path: '',   redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: HomeComponent}
];