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
//location info
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
  salesPresentationRequired:string,
  noOvernightGuests:string,
  deleteListing:string,
  reasonForDelete?:string
}
export interface IContactInfo
 {
  mailingAddress:{
    street1:string,
    city:string,
    listStateId:number,
    countryId:number
    zip:number
  },
  physicalAndMailingAddressSame:string,
  physicalAddress:{
    street1:string,
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
export interface IDiscountsAndAffiliations {
  aaaDiscount: string,
  militaryDiscount: string,
  affiliationId: number,
  membersOfArvc: string,
  stateProvAssociationId: number,
  goodNeighborPark: string,
  goodNeighborParkNumber: number,
  coastToCoastPark: string,
  coastToCoastMembershipNumber: string,
}

// Location Details Section
export interface IInteriorRoads {
  interiorRoads: {
    interiorRoadConditionId: number,
    interiorRoadTypeId: number
  },
  siteInfo: {
    totalSpaces: number,
    numberAvailable: number,
    numberExtendedStaySites: number,
    numberPermanentSites: number,
    separateSeasonalSection: string,
    numberPaved: number,
    numberAllWeather: number,
    numberGravel: number,
    numberGrass: number,
    numberDirt: number,
    numberFullHookups: number,
    numberWater: number,
    numberSewer: number,
    numberElectric: number,
    noHookups: number,
    ampId: number,
    sideBySideHookupId: number,
    bigRigSites: string,
    acceptsFullHookupUnitsOnly: string,
    acceptsSelfContainedUnitsOnly: string,
    pullThruWidth: number,
    pullThruLength: number,
    numberOfPullThrus: number,
    backInWidth: number,
    backInLength: number,
    slideOuts: string,
    shadeTypeId: number
  }
}
export interface IPolicies {
  maxStayLessThanThirty: string,
  numberOfDaysMaxStay: number,
  openAllYear: string,
  areThereLimitedFacilities: string,
  lfsLtdFacSummer: string,
  lfwLtdFacWinter: string,
  ageRestrictions: string,
  familyCamping: string,
  allowsTentCampers: string,
  doesNotAllowClassAMotorhomes: string,
  doesNotAllowClassBMotorhomes: string,
  doesNotAllowClassCMotorhomes: string,
  rvAgeRestrictions: number,
  petsOk: string,
  petRestrictions: string,
  size: string,
  quantity: string,
  breed: string,
  petPaid: string
}
export interface IRatesReservations {
  ratesFromCents: number,
  ratesToCents: number,
  tentRatesFromCents: number,
  tentRatesToCents: number,
  seasonalRatesFromCents: number,
  seasonalRatesToCents: number,
  byWeekMonthId: number,
  monthFromId: number,
  monthToId: number,
  creditCardsAccepted: string,
  debitCard: string,
  discover: string,
  visa: string,
  mastercard: string,
  americanExpress: string,
  reservations: string,
  usesOnlineReservationSystem: string,
  onlineReservationSystemId: number,
  otherOnlineReservationSystem: string
}

export interface IEcoFriendly {
  green: string,
  nonToxicCleaningProducts: string,
  naturalPestControl: string,
  minimizedStyrofoamAndPlastic: string,
  droughtTolerantIndigenousPlants: string,
  recyclingCansForRvers: string,
  compactFlourescentLights: string,
  insulatedWaterHeaters: string,
  loweredPoolTemperatures: string,
  installedPhotocells: string,
  fuelEfficientVehicles: string,
  encouragingUseOfBikesTrikes: string,
  tanklessWaterHeaters: string,
  composting: string
}

// Amenities Section Interfaces
export interface IRestrooms {
  pitToilets: boolean, restroomShowerId: number, numberToiletsMen: number, 
  numberToiletsWomen: number, numberToiletsUnisex: number, numberShowersMen: number, 
  numberShowersWomen: number,  numberShowersUnisex: number, restroomsShowerPaid: boolean
}
export interface IOnSiteServices {
  dumpingStationGs1: boolean, mobileSewerService: boolean, laundry: boolean, partialHandicapAccess: boolean,
  controlAccessGate: boolean, emergencyPhone: boolean, centralInternetHU: boolean, centralInternetHUPaid: boolean,
  wifiHotspot: boolean, wifiHotspotPaid: boolean, wifiHotspotCount: number, wifiWirelessInternet: boolean,
  wifiWirelessPaid: boolean, wifiWirelessMobile: boolean, wifiWirelessStreaming: boolean, wifiWirelessSupport: boolean,
  wifiOvernightSites: boolean, wifiOvernightSitesPaid: boolean, atmMachine: boolean, boatStorage: boolean,
  bbqAtSite: boolean, cableMajor: boolean, cableMinor: boolean, offerCarRentals: boolean, churchServices: boolean,
  cocktailLounge: boolean, complimentaryBreakfast: boolean, dvdRentals: boolean, evChargingStation: boolean,
  evChargingStationPlanned: boolean, entertainment: boolean, faxCopyService: boolean, firewood: boolean, fireRings: boolean,
  fishingGuides: boolean, fishingLicenses: boolean, fishingSupplies: boolean, golfCarts: boolean, groceries: boolean,
  guestServices: boolean, horseCorral: boolean, ice: boolean, libraryBookExchange: boolean, lpBottlesOnly: boolean,
  meteredLpGas: boolean, mailDelivery: boolean, newspaper: boolean, onsiteRvService: boolean, patiosYes: boolean,
  personalEscortToSite: boolean, outdoorGear: boolean, restaurant: boolean, rvSuppliesGs1: boolean, secureRvStorage: boolean,
  selfServRvWash: boolean, staffedRvWash: boolean, shuttleService: boolean, snackBar: boolean, spaServices: boolean, tableAtSite: boolean,
  tourShowTickets: boolean, trashPickupAtSite: boolean, dogPark: boolean, dogWalkingServices: boolean, dogWashingStation: boolean,
  enclosedDogRun: boolean, petBoarding: boolean, petGrooming: boolean, petSitting: boolean, petSuppliesInStore: boolean,
  otherServicesMinor: string, otherServicesMajor: string
}

export interface IRecreation {
  archeryRange: boolean, badminton: boolean, basketball: boolean, bikeRentals: boolean, billiardRoom: boolean,
  poolRoom1Table: boolean, bocceBall: boolean, bouncePillow: boolean, childrensActivities: boolean, enclosedGameRoom: boolean,
  enclosedRecreationHall: boolean, exerciseRoom: boolean, frisbeeGolf: boolean, golf: boolean, horsebackRiding: boolean,
  horseshoes: boolean, ladderBall: boolean, lawnBowling: boolean,lawnChess: boolean, miniGolfNonPro: boolean, miniGolfPro: boolean,
  natureTrails: boolean, outdoorGames: boolean, pavilion: boolean, pedalCarts: boolean, pickleBall: boolean, plannedActivities: boolean,
  playground: boolean, puttingGreen: boolean, sauna: boolean, shuffleboard: boolean, oneShuffleboard: boolean, softball: boolean,
  tennis: boolean, touristAttractions: boolean, volleyball: boolean, casinoOnSite: boolean, archeryRangeNearby: boolean,
  atvRidingNearby: boolean, casinoNearby: boolean, hikingNearby: boolean, mountainBikingNearby: boolean, roadBikingTrailsNearby: boolean,
  rockClimbingNearby: boolean, snowSportsNearby: boolean,huntingNearby: boolean, cleaningFacilities: boolean, meatStorageFacilities: boolean,
  huntingLicenses: boolean, huntingGuideServices: boolean, huntingSeasonYearRound: boolean, otherRecMajor: string,
  otherRecMinor: string, eventsCalendarUrl: string, plannedFamilyActivitiesId: number
}
export interface IWaterRecreation {
  swimPool: boolean, heatedPool: boolean, poolPaid: boolean, whirlPool: boolean, wadingPool: boolean,
  splashPad: boolean, waterSlide: boolean, waterUmbrella: boolean, bodyOfWater: string, ocean: boolean,
  gulf: boolean, river: boolean, stream: boolean, lake: boolean, pond: boolean, fishing: boolean,
  kayaking: boolean, swimming: boolean, watersports: boolean, boatMarina: boolean, boatDock: boolean,
  boatRamp: boolean, hpLimit: string, electMotorsOnly: boolean, noMotors: boolean, boatRentals: boolean,
  paddleBoats: boolean, boatingNearby: boolean, fishingNearby: boolean, houseboatingNearby: boolean,
  kayakingNearby: boolean, marinaNearby: boolean, watersportsNearby: boolean, raftingNearby: boolean
}