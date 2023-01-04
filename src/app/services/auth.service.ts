import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private storageService:StorageService) { }

    checkLoggedIn() {
        return this.storageService.load('loggedInUser')
        // return of(false)
    }
}
