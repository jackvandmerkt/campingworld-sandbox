import { Component } from "@angular/core";
import {AuthService} from './auth.service'
import {Router} from '@angular/router'

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{
    email!: string;
    password!: string;
    constructor(private authService:AuthService, private router:Router){
        
    }
    loginUser(formValues: { email: string; password: string; }){
      this.authService.loginUser(formValues.email,
        formValues.password)
        .subscribe(resp => {
            if(!resp){
                console.log('no response');
            }else{
                this.router.navigate(['home'])
            }
        })
      
    }

}