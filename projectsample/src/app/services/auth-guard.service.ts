import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    userObject = null;
    isLogin: boolean = false;

    constructor(public authenticationService: AuthenticationService, public router: Router) { }

    canActivate(): boolean {

        this.userObject = JSON.parse(sessionStorage.getItem('isLoggedIn'));

        if ((this.userObject === null || this.userObject === "")) {
            this.isLogin = false;
        }
        if (!this.authenticationService.isAuthenticated()) {
            this.router.navigate(['/relogin']);
            return false;
        }
        return true;
    }
}