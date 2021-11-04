import {Injectable} from '@angular/core'
import {Observable, of} from 'rxjs'
import { IGoodSamRecordId, IAllRefs, IListingCounts, IListings, ITerritories, IContactInfo, IRestrooms, IOnSiteServices, IWaterRecreation, IRecreation, IDiscountsAndAffiliations, IInteriorRoads } from './listing.model';
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

    //Location Info Section - Discounts and Affiliations
    postDiscountsAndAffiliations(form:IDiscountsAndAffiliations, fileNumber:string):Observable<IDiscountsAndAffiliations>{
      return this.http.put<IDiscountsAndAffiliations>(`/api/v1/listings/${fileNumber}/location-info/discounts-and-affiliations`, form)
      .pipe(catchError(this.handleError<IDiscountsAndAffiliations>('postDiscountsAndAffiliationsInfo', )))
    }
    getDiscountsAndAffiliations(fileNumber:string):Observable<IDiscountsAndAffiliations>{
      return this.http.get<IDiscountsAndAffiliations>(`api/v1/listings/${fileNumber}/location-info/discounts-and-affiliations`)
      .pipe(catchError(this.handleError<IDiscountsAndAffiliations>('getDiscountsAndAffiliations', )))
    }



    //Location Details Section - Interior Roads and Site Info
    postInteriorRoads(form:IInteriorRoads, fileNumber:string):Observable<IInteriorRoads>{
      return this.http.put<IInteriorRoads>(`/api/v1/listings/${fileNumber}/location-details/interior-roads-and-site-info`, form)
      .pipe(catchError(this.handleError<IInteriorRoads>('postInteriorRoads', )))
    }
    getInteriorRoads(fileNumber:string):Observable<IInteriorRoads>{
      return this.http.get<IInteriorRoads>(`api/v1/listings/${fileNumber}/location-details/interior-roads-and-site-info`)
      .pipe(catchError(this.handleError<IInteriorRoads>('getInteriorRoads', )))
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

    // Amenities Section - On Site Services Form
    postOnSiteServices(form:IOnSiteServices, fileNumber:string):Observable<IOnSiteServices>{
      return this.http.put<IOnSiteServices>(`/api/v1/listings/${fileNumber}/amenities/on-site-services`, form)
      .pipe(catchError(this.handleError<IOnSiteServices>('postOnSiteServices', )))
    }
    getOnSiteServices(fileNumber:string):Observable<IOnSiteServices>{
      return this.http.get<IOnSiteServices>(`api/v1/listings/${fileNumber}/amenities/on-site-services`)
      .pipe(catchError(this.handleError<IOnSiteServices>('getOnSiteServices', )))
    }

    // Amenities Section - Recreation Form
    postRecreation(form:IRecreation, fileNumber:string):Observable<IRecreation>{
      return this.http.put<IRecreation>(`/api/v1/listings/${fileNumber}/amenities/recreation`, form)
      .pipe(catchError(this.handleError<IRecreation>('postRecreation', )))
    }
    getRecreation(fileNumber:string):Observable<IRecreation>{
      return this.http.get<IRecreation>(`api/v1/listings/${fileNumber}/amenities/recreation`)
      .pipe(catchError(this.handleError<IRecreation>('getRecreation', )))
    }

    // Amenities Section - Water Recreation Form
    postWaterRecreation(form:IWaterRecreation, fileNumber:string):Observable<IWaterRecreation>{
      return this.http.put<IWaterRecreation>(`/api/v1/listings/${fileNumber}/amenities/water-recreation`, form)
      .pipe(catchError(this.handleError<IWaterRecreation>('postWaterRecreation', )))
    }
    getWaterRecreation(fileNumber:string):Observable<IWaterRecreation>{
      return this.http.get<IWaterRecreation>(`api/v1/listings/${fileNumber}/amenities/water-recreation`)
      .pipe(catchError(this.handleError<IWaterRecreation>('getWaterRecreation', )))
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