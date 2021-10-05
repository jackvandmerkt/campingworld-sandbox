import {Injectable} from '@angular/core'
import {Observable, of} from 'rxjs'
import { IAdvertisingObjections, IAffiliations, IB2BCommSources, IByWeekMonths, ICountries, IDroppedAffiliations, IListingCounts, IListings, IListingTypes, IListStates, IParkTypes, ISectionCodes, ITerritories, IUniqueAccounts, } from '../shared/listing-counts.model';
import {HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { I18nPluralPipe } from '@angular/common';

@Injectable()
export class ListingService {
    constructor(private http: HttpClient){

    }
    getListings(territoryCode:string):Observable<IListingCounts> {
      return this.http.get<IListingCounts>('/api/v1/listings/counts?territoryCode=' + territoryCode)
        .pipe(catchError(this.handleError<IListingCounts>('getListings', )))
    }

    // used in multiple forms
    getTerritories():Observable<ITerritories[]> {
      return this.http.get<ITerritories[]>('/api/v1/refs/territories')
        .pipe(catchError(this.handleError<ITerritories[]>('getTerritories', )))
    } 
    getSectionCodes():Observable<ISectionCodes[]> {
      return this.http.get<ISectionCodes[]>('/api/v1/refs/section-codes')
        .pipe(catchError(this.handleError<ISectionCodes[]>('getSectionCodes', )))
    }
    getParkTypes():Observable<IParkTypes[]> {
      return this.http.get<IParkTypes[]>('/api/v1/refs/park-types')
        .pipe(catchError(this.handleError<IParkTypes[]>('getParkTypes', )))
    }
    getListingTypes():Observable<IListingTypes[]> {
      return this.http.get<IListingTypes[]>('/api/v1/refs/listing-types')
        .pipe(catchError(this.handleError<IListingTypes[]>('getListingTypes', )))
    }
    getListStates():Observable<IListStates[]> {
      return this.http.get<IListStates[]>('/api/v1/refs/list-states')
        .pipe(catchError(this.handleError<IListStates[]>('getListStates', )))
    }

    // Discounts and Affiliations Form
    getAffiliations():Observable<IAffiliations[]> {
      return this.http.get<IAffiliations[]>('/api/v1/refs/affiliations')
        .pipe(catchError(this.handleError<IAffiliations[]>('getAffiliations', )))
    }

    // Ownership & B2B Info Form
    getCountries():Observable<ICountries[]> {
      return this.http.get<ICountries[]>('/api/v1/refs/countries')
        .pipe(catchError(this.handleError<ICountries[]>('getCountries', )))
    }
    getUniqueAccounts():Observable<IUniqueAccounts[]> {
      return this.http.get<IUniqueAccounts[]>('/api/v1/refs/unique-accounts')
        .pipe(catchError(this.handleError<IUniqueAccounts[]>('getUniqueAccounts', )))
    }
    getDroppedAffiliations():Observable<IDroppedAffiliations[]> {
      return this.http.get<IDroppedAffiliations[]>('/api/v1/refs/dropped-affiliations')
        .pipe(catchError(this.handleError<IDroppedAffiliations[]>('getDroppedAffiliations', )))
    }
    getAdvertisingObjections():Observable<IAdvertisingObjections[]> {
      return this.http.get<IAdvertisingObjections[]>('/api/v1/refs/advertising-objections')
        .pipe(catchError(this.handleError<IAdvertisingObjections[]>('getAdvertisingObjections', )))
    }
    getB2BCommSources():Observable<IB2BCommSources[]> {
      return this.http.get<IB2BCommSources[]>('/api/v1/refs/b2b-comm-sources')
        .pipe(catchError(this.handleError<IB2BCommSources[]>('getB2BCommSources', )))
    }
    
    //
    getByWeekMonth():Observable<IByWeekMonths[]> {
      return this.http.get<IByWeekMonths[]>('/api/v1/refs/by-week-months')
        .pipe(catchError(this.handleError<IByWeekMonths[]>('getByWeekMonth', )))
    }


    // POST method for New Listing
    postNewListing(form:any):Observable<IListings[]> {
      return this.http.post<IListings[]>('/api/v1/listings', form)
      .pipe(catchError(this.handleError<IListings[]>('postNewListing', )))
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