import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IUser} from './user.model';
import { tap} from 'rxjs/operators';


@Injectable()
export class AuthService{
    currentUser!: IUser;
    constructor(private http: HttpClient){}
    loginUser(email:string, password:string){
        const loginInfo = {email: email, password:password};
        const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
        return this.http.post('/api/v1/auth/login', loginInfo, options)
                .pipe(tap(data => {
                    this.currentUser = <IUser>data;
                    console.log(this.currentUser)
            }))
    }
}