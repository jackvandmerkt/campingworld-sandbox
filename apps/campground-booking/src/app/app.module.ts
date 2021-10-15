import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListingModule } from './listing/listing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListingsComponent } from './home/cards/listing.component';
import { OrdersComponent } from './home/cards/orders.component';
import { HomeComponent } from './home/home.component';
import { ProposalsComponent } from './home/proposals/proposals.component';
import { RecentlyViewedComponent } from './home/recently-viewed/recently-viewed.component';
import { NavComponent } from './nav/nav.component';
import { appRoutes } from './routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from "./user/login.component";
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './user/auth.service';
import { ListingService } from './shared/listing.service';
import { OrdersService } from './shared/orders.service';
import {OrdersContractsComponent} from './home/cards/orders-contracts.component'
import {OrdersProductsDetails} from './home/cards/orders-products-details.component'
import { ListingStatusesComponent } from './home/cards/listing-statuses.component';
import { OrderByPipe } from './shared/order-by.pipe';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { ReportComponent } from './report/report.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OrdersComponent,
    ListingsComponent,
    HomeComponent,
    RecentlyViewedComponent,
    ProposalsComponent,
    LoginComponent,
    ListingStatusesComponent,
    OrderByPipe,
    OrdersContractsComponent,
    OrdersProductsDetails,
    ReportComponent
    
  ],
  imports: [
    BrowserModule,
    ListingModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PowerBIEmbedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService],
  bootstrap: [AppComponent],

})
export class AppModule { }
