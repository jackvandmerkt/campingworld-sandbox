export interface IGoodSamRecord {
    locationListingName: string,
    sectionCodeId: number,
    listingTypeId: number,
    parkTypeId: number,
    duplicateListingText: string,
    primaryFileNumber: number,
    listCity: string,
    listStateId: number,
    territoryId: number,
    salesPresentationRequired: boolean,
    noOverniteGuests: boolean,
    deleteListing: boolean,
    deleteCodeId: number
}
export interface IContactInfo {
    mailingAddress: {
        street1: string,
        street2: string,
        city: string,
        listStateId: number,
        zip: string,
        countryId: number
      },
      physicalAndMailingAddressSame: boolean,
      physicalAddress: {
        street1: string,
        street2: string,
        city: string,
        listStateId: number,
        zip: string,
        countryId: number
      },
      latitude: number,
      longitude: number,
      elevation: number,
      email: string,
      telephone: string,
      repressedTelephone: string,
      webAddress: string,
      onlineWeb: string,
      skipUtm: boolean,
      facebook: string,
      twitter: string,
      pinterest: string,
      instagram: string,
      parkTypeId: number
}