import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../service/Authentication/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email: string;
    password: string;
    errorMessage = 'Invalid Credentials';
    successMessage: string;
    invalidLogin = false;
    loginSuccess = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {
    }

    ngOnInit() {

    }

    handleLogin() {
        this.authenticationService.authenticate(this.email, this.password).subscribe((result) => {
            this.invalidLogin = false;
            this.loginSuccess = true;
            this.successMessage = 'Login Successful.';
            sessionStorage.setItem("role",result.role)
            this.router.navigate(['/dashboard']);
        }, () => {
            this.invalidLogin = true;
            this.loginSuccess = false;
        });
    }
}