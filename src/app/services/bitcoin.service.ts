import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError,from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Contact, ContactFilter } from '../models/contact.model';


const STORAGE_KEY = 'marketPriceCache'


@Injectable({
    providedIn: 'root'
})
export class BitcoinService {
    constructor(private http: HttpClient) { }
    //mock the server
  

    // private _contacts$ = new BehaviorSubject<Contact[]>([])
    // public contacts$ = this._contacts$.asObservable()

    // private _contactFilter$ = new BehaviorSubject<ContactFilter>({ term: '' });
    // public contactFilter$ = this._contactFilter$.asObservable()


    public getBitcoinRate(coins:number) {
        return this.http.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
            .pipe(
                map(res => res),    
tap(x=> console.log(`x = `, x))
            )
    }
    public getAvgBlockSize() {
return from(
    fetch(
        `https://api.blockchain.info/charts/market-price?timespan=3months&format=json&cors=true`
    ).then((response)=>response.json())
    )

        // return this.http.get(`https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true`)
        //     .pipe(
        //         map(res => res)
        //     )
    }
    public getMarketPrice() {
        return from(
            fetch(
                `https://api.blockchain.info/charts/n-transactions?timespan=3months&format=json&cors=true`
            ).then((response)=>response.json())
            )
        // return this.http.get(`https://api.blockchain.info/charts/transactions-per-second?timespan=2weeks&rollingAverage=8hours&format=json&cors=true`)
        //     .pipe(
        //         map(res => res)
        //     )
    }
}