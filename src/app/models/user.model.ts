export interface User {

    _id?: string
    name: string
    coins: number
    transactions: {
        from:string
        toId: string
        to: string
        at: number
        amount: number
    }[]


}
