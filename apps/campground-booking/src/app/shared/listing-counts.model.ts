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
export interface IListings{
    locationListingName: string,
    listingId: number,
    fileNumber: number,
    bookYear: string
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
      ],
      plannedFamilyActivities: [
        {
            id: number,
            value: string
        }
      ]
}
export interface IGoodSamRecordId {
  locationListingName:string,
  fileNumber:number,
  listingId:number,
  sectionCodeId:number,
  repCode:number,
  listingTypeId:number,
  parkTypeId:number,
  duplicateListingText?:string,
  primaryFileNumber?:string,
  listCity:string,
  listStateId:string,
  territoryId:string,
  salesPresentationRequired:boolean,
  noOvernightGuests:boolean,
  deleteListing:boolean,
  reasonForDelete?:string
}
export interface IContactInfo
 {
  mailingAddress:{
    street1:string,
    street2:string,
    city:string,
    listStateId:number,
    countryId:number
    zip:number
  },
  physicalAndMailingAddressSame:boolean,
  physicalAddress:{
    street1:string,
    street2:string,
    city:string,
    listStateId:number,
    countryId:number
    zip:number
  },
  latitude:number,
  longitude:number,
  elevation:number,
  email:string,
  telephone:string,
  repressedTelephone:string,
  webAddress:string,
  onlineWeb:string,
  skipUtm:boolean,
  facebook:string,
  twitter:string,
  pinterest:string,
  instagram:string,
  parkTypeId:number
};

export interface IRestrooms {
  pitToilets: boolean,
  restroomShowerId: number,
  numberToiletsMen: number,
  numberToiletsWomen: number,
  numberToiletsUnisex: number,
  numberShowersMen: number,
  numberShowersWomen: number,
  numberShowersUnisex: number,
  restroomsShowerPaid: boolean
}
