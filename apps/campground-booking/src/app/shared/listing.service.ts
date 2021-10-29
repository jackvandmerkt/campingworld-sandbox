import {Injectable} from '@angular/core'
import {Observable, of} from 'rxjs'
import { IGoodSamRecordId, IAllRefs, IListingCounts, IListings, ITerritories, IContactInfo, IRestrooms } from '../shared/listing-counts.model';
import {HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { I18nPluralPipe } from '@angular/common';

@Injectable()
export class ListingService {
    constructor(private http: HttpClient){

    }
    // GET methods for home
    getListings(territoryCode:string):Observable<IListingCounts> {
      return this.http.get<IListingCounts>('/api/v1/listings/counts?territoryCode=' + territoryCode)
        .pipe(catchError(this.handleError<IListingCounts>('getListings', )))
    }
    getAllRefs():Observable<IAllRefs[]> {
      return this.http.get<IAllRefs[]>('/api/v1/refs/all')
        .pipe(catchError(this.handleError<IAllRefs[]>('getAllRefs', )))
    }
    getTerritories():Observable<ITerritories[]> {
      return this.http.get<ITerritories[]>('/api/v1/refs/territories')
        .pipe(catchError(this.handleError<ITerritories[]>('getTerritories', )))
    } 
    
    // POST method for New Listing
    postNewListing(form:any):Observable<IListings[]> {
      return this.http.post<IListings[]>('/api/v1/listings/file-number', form)
      .pipe(catchError(this.handleError<IListings[]>('postNewListing', )))
    }

    //Location Info Section - Good Sam Record ID Form
    postGoodSamRecordId(form:IGoodSamRecordId, fileNumber:string):Observable<IGoodSamRecordId>{
      return this.http.put<IGoodSamRecordId>(`/api/v1/listings/${fileNumber}/location-info/good-sam-record-id`, form)
      .pipe(catchError(this.handleError<IGoodSamRecordId>('postGoodSamRecordId', )))
    }
    getGoodSamRecordId(fileNumber:string):Observable<IGoodSamRecordId>{
      return this.http.get<IGoodSamRecordId>(`api/v1/listings/${fileNumber}/location-info/good-sam-record-id`)
      .pipe(catchError(this.handleError<IGoodSamRecordId>('getGoodSamRecordId', )))
    }
  
    
    // Location Info Section - Contact Info Form
    postContactInfo(form:IContactInfo, fileNumber:string):Observable<IContactInfo>{
      return this.http.put<IContactInfo>(`/api/v1/listings/${fileNumber}/location-info/contact-info`, form)
      .pipe(catchError(this.handleError<IContactInfo>('postContactInfo', )))
    }
    getContactInfo(fileNumber:string):Observable<IContactInfo>{
      return this.http.get<IContactInfo>(`api/v1/listings/${fileNumber}/location-info/contact-info`)
      .pipe(catchError(this.handleError<IContactInfo>('getContactInfo', )))
    }

    // Amenities Section - Restrooms Form
    postRestrooms(form:IRestrooms, fileNumber:string):Observable<IRestrooms>{
      return this.http.put<IRestrooms>(`/api/v1/listings/${fileNumber}/amenities/restrooms`, form)
      .pipe(catchError(this.handleError<IRestrooms>('postRestrooms', )))
    }
    getRestrooms(fileNumber:string):Observable<IRestrooms>{
      return this.http.get<IRestrooms>(`api/v1/listings/${fileNumber}/amenities/restrooms`)
      .pipe(catchError(this.handleError<IRestrooms>('getRestrooms', )))
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