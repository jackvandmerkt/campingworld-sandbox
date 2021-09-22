import {Injectable} from '@angular/core'
import {Observable, of} from 'rxjs'
import {HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TerritoriesService {
    constructor(private http: HttpClient){

    }
    getTerritories() {
        return this.http.get<any>('/api/v1/territories')
    }
}