import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

public store(key:string, value:any) {
      localStorage.setItem(key, JSON.stringify(value)) ;
    }

public load(key:string, defaultValue:any = null) {
        var value= localStorage.getItem(key)||defaultValue
        return JSON.parse(value);
      }
}

