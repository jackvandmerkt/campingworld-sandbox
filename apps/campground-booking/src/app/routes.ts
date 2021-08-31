import { Routes } from "@angular/router";
import { CreateListingComponent } from "./create-listing/create-listing.component";
import { HomeComponent } from "./home/home.component";
import { NewListingsComponent } from "./new-listing/new-listing.component";

export const routes:Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'new-listing', component: NewListingsComponent },
    { path: 'create-listing', component: CreateListingComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: HomeComponent}
];