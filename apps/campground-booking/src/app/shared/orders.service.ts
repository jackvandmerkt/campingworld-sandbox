import {Injectable} from '@angular/core'
import {Observable, of} from 'rxjs'
import { IOrdersCounts, } from '../shared/orders-counts.model';
import {HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class OrdersService {
    constructor(private http: HttpClient){

    }
    getOrdersCounts(territoryCode:string):Observable<IOrdersCounts> {
      return this.http.get<IOrdersCounts>('/api/v1/orders/counts?territoryCode=' + territoryCode)
        .pipe(catchError(this.handleError<IOrdersCounts>('getOrdersCounts', )))
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