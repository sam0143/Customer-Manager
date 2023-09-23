export interface CustomerInterface {
    
   
    id: number,
    firstName: string,
    lastName: string,
    gender: string,
    address: string,
    city:string,
    state: {
        abbreviation: string,
        name: string,
    },
    orders: [
        {
            productName: string,
            itemCost: number,
        }
    ],
    latitude:number,
    longitude: number,
}
