export interface IOrdersCounts {
    territoryCode:string
    total:number
    contractStatuses: [
        {
          code: string,
          description: string,
          count: number,
          percentage: number
        }
      ],
      productStatuses: [
        {
          code: string,
          description: string,
          currentYearCount: number,
          currentYearPercentage: number,
          previousYearCount: number,
          previousYearPercentage: number,
        }
      ]
}
