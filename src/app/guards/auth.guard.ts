import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable,of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService,private router: Router,) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
           if (!this.authService.checkLoggedIn()) {
      // redirect to some view explaining what happened
      this.router.navigateByUrl('/signup');
      return of(false);
    } else {
      return of(true);
    } 
        // return this.authService.checkLoggedIn();
    }

}
