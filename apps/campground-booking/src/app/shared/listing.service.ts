import {Injectable} from '@angular/core'
import {Observable, of} from 'rxjs'
import { IAdvertisingObjections, IAffiliations, IAmps, IB2BCommSources, IBaths, IByWeekMonths, ICountries, IDirectionalArrows, IDroppedAffiliations, IInteriorRoadConditions, IInteriorRoadTypes, IKitchens, IListingCounts, IListings, IListingTypes, IListStates, INonRatedCodes, IOnlineReservationSystems, IParkTypes, IRestroomsShowers, ISectionCodes, IShadedSites, ISidebySideHookups, ITerritories, IUniqueAccounts, } from '../shared/listing-counts.model';
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
    getNonRatedCodes():Observable<INonRatedCodes[]> {
      return this.http.get<INonRatedCodes[]>('/api/v1/refs/non-rated-codes')
        .pipe(catchError(this.handleError<INonRatedCodes[]>('getNonRatedCodes', )))
    }

    // Discounts and Affiliations Form
    getAffiliations():Observable<IAffiliations[]> {
      return this.http.get<IAffiliations[]>('/api/v1/refs/affiliations')
        .pipe(catchError(this.handleError<IAffiliations[]>('getAffiliations', )))
    }

    // Directions Form
    getDirectionalArrows():Observable<IDirectionalArrows[]> {
      return this.http.get<IDirectionalArrows[]>('/api/v1/refs/directional-arrows')
        .pipe(catchError(this.handleError<IDirectionalArrows[]>('getDirectionalArrows', )))
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
    
    //Rates & Reservations Form
    getByWeekMonth():Observable<IByWeekMonths[]> {
      return this.http.get<IByWeekMonths[]>('/api/v1/refs/by-week-months')
        .pipe(catchError(this.handleError<IByWeekMonths[]>('getByWeekMonth', )))
    }
    getOnlineReservationSystems():Observable<IOnlineReservationSystems[]> {
      return this.http.get<IOnlineReservationSystems[]>('/api/v1/refs/online-reservation-systems')
        .pipe(catchError(this.handleError<IOnlineReservationSystems[]>('getOnlineReservationSystems', )))
    }

    // Restrooms Form
    getRestroomsShowers():Observable<IRestroomsShowers[]> {
      return this.http.get<IRestroomsShowers[]>('/api/v1/refs/restroom-showers')
        .pipe(catchError(this.handleError<IRestroomsShowers[]>('getRestroomsShowers', )))
    }

    // Tenting & Rentals
    getBaths():Observable<IBaths[]> {
      return this.http.get<IBaths[]>('/api/v1/refs/baths')
        .pipe(catchError(this.handleError<IBaths[]>('getBaths', )))
    }
    getKitchens():Observable<IKitchens[]> {
      return this.http.get<IKitchens[]>('/api/v1/refs/kitchens')
        .pipe(catchError(this.handleError<IKitchens[]>('getKitchens', )))
    }

    // Interior Roads Form
    getInteriorRoadsType():Observable<IInteriorRoadTypes[]> {
      return this.http.get<IInteriorRoadTypes[]>('/api/v1/refs/interior-road-types')
        .pipe(catchError(this.handleError<IInteriorRoadTypes[]>('getInteriorRoadsType', )))
    }
    getAmps():Observable<IAmps[]> {
      return this.http.get<IAmps[]>('/api/v1/refs/amps')
        .pipe(catchError(this.handleError<IAmps[]>('getAmps', )))
    }
    getInteriorRoadsConditions():Observable<IInteriorRoadConditions[]> {
      return this.http.get<IInteriorRoadConditions[]>('/api/v1/refs/interior-road-conditions')
        .pipe(catchError(this.handleError<IInteriorRoadConditions[]>('getInteriorRoadsConditions', )))
    }
    getSideBySideHookups():Observable<ISidebySideHookups[]> {
      return this.http.get<ISidebySideHookups[]>('/api/v1/refs/side-by-side-hookups')
        .pipe(catchError(this.handleError<ISidebySideHookups[]>('getSideBySideHookups', )))
    }
    getShadedSites():Observable<IShadedSites[]> {
      return this.http.get<IShadedSites[]>('/api/v1/refs/shade-types')
        .pipe(catchError(this.handleError<IShadedSites[]>('getShadedSites', )))
    }


    // POST method for New Listing
    postNewListing(form:any):Observable<IListings[]> {
      return this.http.post<IListings[]>('/api/v1/listings/file-number', form)
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