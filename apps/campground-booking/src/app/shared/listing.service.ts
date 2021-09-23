import {Injectable} from '@angular/core'
import {Observable, of} from 'rxjs'
import { IListingCounts, } from '../shared/listing-counts.model';
import {HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ListingService {
    constructor(private http: HttpClient){

    }
    getListings(territoryCode:string):Observable<IListingCounts> {
      return this.http.get<IListingCounts>('/api/v1/listings/counts?territoryCode=' + territoryCode)
        .pipe(catchError(this.handleError<IListingCounts>('getListings', )))
    }

    getTerritories() {
      return this.http.get<any>('/api/v1/territories')
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private handleError<T>(operation = 'operation', result?:T){
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (error:any):Observable<T> => {
          console.error(error);
          return of(result as T);
        }
      }
    }