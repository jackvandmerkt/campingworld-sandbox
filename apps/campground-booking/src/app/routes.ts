import { Routes } from "@angular/router";
import { CombinedCardComponent } from "./home/combined-cards.component";
import { NewListingsComponent } from "./new-listing/new-listing.component";

export const routes:Routes = [
    { path: 'home', component: CombinedCardComponent},
    { path: 'new-listing', component: NewListingsComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: CombinedCardComponent}
];