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