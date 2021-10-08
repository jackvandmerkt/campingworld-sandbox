export interface IListingCounts {
    territoryCode:string
    total:string
    statuses:IStatus
}
export interface IStatus{
    code:string,
    description:string,
    count:string,
    percentage:number
}

export interface ITerritories{
    id: number,
    code: string,
    description: string,
    listStateId: number,
    goalRevenue: number,
    goalGsp: number,
    hidden: string,
    countryId: string
}

export interface IListStates{
    id: number,
    value: string,
    code: string,
    name: string
}

export interface IListingTypes{
    id: number,
    value: string
}

export interface IParkTypes{
    id: number,
    value: string
}

export interface ISectionCodes{
    id: number,
    value: string,
    code: string
}

export interface IAffiliations{
    id: number,
    code: string,
    value: string
}

export interface IUniqueAccounts{
    id: number,
    code: string,
    value: string,
    eightyTwentySplit: string,
    active: string,
    house: string,
    territoryId: number
}

export interface ICountries{
    id: number,
    value: string
}

export interface IB2BCommSources{
    id: number,
    value: string
}

export interface IAdvertisingObjections{
    id: number,
    value: string
}

export interface IDroppedAffiliations{
    id: number,
    value: string
}

export interface IByWeekMonths{
    id: number,
    value: string
}

export interface IMonths{
    id: number,
    value: string,
    abbrev: string
}

export interface IListings{
    sectionCodeId: number,
    parkTypeId: string,
    repName: string,
    locationListingsName: string
}
export interface INonRatedCodes{
    id: number,
    value: string
}

export interface IDirectionalArrows{
    id: string,
    code: string,
    value: string
}

export interface IBaths{
    id: string,
    value: string
}

export interface IKitchens{
    id: string,
    value: string
}