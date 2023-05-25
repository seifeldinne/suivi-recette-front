import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private baseUrl = 'http://localhost:8080/auth/';
    constructor(private httpClient: HttpClient) {
    }

    authenticate(email, password) {
        return this.httpClient
            .post<any>(`${this.baseUrl}` + 'authenticate', {email, password})
            .pipe(
                map(userData => {
                    sessionStorage.setItem("email", email);
                    let tokenStr = "Bearer " + userData.token;
                    sessionStorage.setItem("token", tokenStr);
                    sessionStorage.setItem("role",userData.role);
                    return userData;
                })
            );
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem("username");
        console.log(!(user === null));
        return !(user === null);
    }

    logOut() {
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("role");
    }
}
