
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { Contact } from '../models/contact.model';
import { StorageService } from './storage.service'

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private StorageService: StorageService) { }
    
    private STORAGE_KEY: string = 'loggedInUser'
    private _userDb: User = this.StorageService.load(this.STORAGE_KEY)||{
        name: "Ochoa Hyde",
        coins: 100,
        transactions: []
    }

    private _user$ = new BehaviorSubject<User>(this._userDb)
    public user$ = this._user$.asObservable()


    public getUser() {
        this._user$.next(this._userDb)
    }
    public signup(name: string): User {
        const user = {
            _id: getRandomId(),
            name,
            coins: 17000,
            transactions: []
        }
        this.StorageService.store(this.STORAGE_KEY, user)
        this._userDb=this.StorageService.load(this.STORAGE_KEY)
        this._user$.next({...this._userDb})
        return user
    }
    public addMove(contact:Contact, amount:number){
        // console.log(`contact = `, contact)
        // console.log(`amount = `, amount)
     const loggedInUser=this.StorageService.load(this.STORAGE_KEY)
     loggedInUser.transactions.unshift({
        _id:getRandomId(),
        from:this._userDb.name,
        toId: contact._id,
        to: contact.name,
        at: Date.now(), 
        amount,
       })
       loggedInUser.coins-=amount
       this.StorageService.store(this.STORAGE_KEY,loggedInUser)
       this._user$.next({...loggedInUser})
       return loggedInUser
     }
}

function getRandomId(length = 8): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            characters.length));
    }
    return result;
}