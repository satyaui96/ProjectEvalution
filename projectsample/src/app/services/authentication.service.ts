
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })

export class AuthenticationService {
    constructor(private httpClient: HttpClient) {
    }

    public isAuthenticated(): boolean {
        let isLoggedIn = false;
        const token = sessionStorage.getItem('isLoggedIn');
       
        if(token === "true") {
            isLoggedIn = true;
        }
        return isLoggedIn;
    }

}