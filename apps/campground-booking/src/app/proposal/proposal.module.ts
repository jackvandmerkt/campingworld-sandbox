import { NgModule } from "@angular/core";
import { ListingModule } from "../listing/listing.module";
import { CreateProposalComponent } from "./create-proposal/create-proposal.component";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    CreateProposalComponent
  ],
  imports: [
    ListingModule,
    CommonModule,
    BrowserModule
  ],
  schemas: [],
  providers: []
})

export class ProposalModule { }