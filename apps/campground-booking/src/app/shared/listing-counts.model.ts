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
    locationListingName: string,
    listingId: number,
    fileNumber: number,
    bookYear: string
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

export interface IInteriorRoadTypes{
    id: string,
    value: string
}

export interface IAmps{
    id: string,
    value: string
}

export interface IInteriorRoadConditions{
    id: string,
    value: string
}

export interface ISidebySideHookups{
    id: string,
    value: string
}

export interface IShadedSites{
    id: string,
    value: string
}

export interface IOnlineReservationSystems{
    id: string,
    value: string
}

export interface IRestroomsShowers{
    id: string,
    value: string
}

export interface IAllRefs {
    inventoryItemStatuses: [
        {
            inventoryItemStatusCode: string,
            inventoryItemStatusDescription: string,
            displayName: string
        }
      ],
    listingStatuses: [
        {
            inventoryItemStatusCode: string,
            inventoryItemStatusDescription: string,
            displayName: string
        }
      ],
      listingTypes: [
        {
            id: number,
            value: string
        }
      ],
      months: [
        {
            id: number,
            value: string,
            abbrev: string
        }
      ],
      byWeekMonths: [
        {
            id: number,
            value: string
        }
      ],
      orderStatuses: [
        {
            id: number,
            orderStatusCode: string,
            orderStatusDescription: string,
            displayName: string
        }
      ],
      parkTypes: [
        {
            id: number,
            value: string
        }
      ],
      repCodes: [
        {
            id: number,
            code: string,
            value: string
        }
      ],
      sectionCodes: [
        {
            id: number,
            value: string,
            code: string
        }
      ],
      shadeTypes: [
        {
            id: number,
            value: string
        }
      ],
      territories: [
        {
            id: number,
            code: string,
            description: string,
            listStateId: number,
            hidden: string,
            countryId: string
        }
      ],
      listStates: [
        {
            id: number,
            value: string,
            code: string,
            name: string
        }
      ],
      affiliations: [
        {
            id: number,
            code: string,
            value: string
        }
      ],
      uniqueAccounts: [
        {
            id: number,
            code: string,
            value: string,
            eightyTwentySplit: string,
            active: string,
            house: string,
            territoryId: number
        }
      ],
      countries: [
        {
            id: number,
            value: string
        }
      ],
      b2bCommSources: [
        {
            id: number,
            value: string
        }
      ],
      advertisingObjections: [
        {
            id: number,
            value: string
        }
      ],
      droppedAffiliationReasons: [
        {
            id: number,
            value: string
        }
      ],
      nonRatedCodes: [
        {
            id: number,
            code: string,
            value: string
        }
      ],
      directionalArrows: [
        {
            id: number,
            code: string,
            value: string
        }
      ],
      baths: [
        {
            id: number,
            value: string
        }
      ],
      kitchens: [
        {
            id: number,
            value: string
        }
      ],
      interiorRoadConditions: [
        {
            id: number,
            value: string
        }
      ],
      interiorRoadTypes: [
        {
            id: number,
            value: string
        }
      ],
      sideBySideHookups: [
        {
            id: number,
            value: string
        }
      ],
      amps: [
        {
            id: number,
            value: string
        }
      ],
      onlineReservationSystems: [
        {
            id: number,
            value: string
        }
      ],
      restroomShowers: [
        {
            id: number,
            value: string
        }
      ],
      deletes: [
        {
            id: number,
            value: string
        }
      ]
}