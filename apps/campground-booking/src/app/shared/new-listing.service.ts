import {Injectable} from '@angular/core'
import {Observable, of} from 'rxjs'
import {HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class NewListingService {
    constructor(private http: HttpClient){

    }
    getSectionCode() {
        return this.http.get<any>('')
    }
}