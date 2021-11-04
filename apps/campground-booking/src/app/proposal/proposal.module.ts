import { NgModule } from "@angular/core";
import { ListingModule } from "../listing/listing.module";
import { CreateProposalComponent } from "./create-proposal/create-proposal.component";

@NgModule({
    declarations: [  
        CreateProposalComponent      
      ],
      imports: [
          ListingModule
      ],
      schemas: [],
      providers: []
})

export class ProposalModule { }