import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import {ReportComponent} from "./report/report.component"

export const appRoutes: Routes = [
  { path: 'report', component: ReportComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'create-listing',
    loadChildren: () =>
      import('./listing/listing.routes').then(m => m.listingRoutes)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];