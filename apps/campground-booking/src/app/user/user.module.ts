import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { AuthService } from './auth.service';
import { userRoutes } from './user.routes';
import {StoreModule} from '@ngrx/store';
import {userReducer} from './state/user.reducer'


@NgModule({
    declarations:[
        LoginComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(userRoutes),
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forFeature('users', {userReducer})
        
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [AuthService],
})
export class UserModule { }