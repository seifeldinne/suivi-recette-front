import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {BasicAuthHttpInterceptorService} from "./service/Interceptor/basicAuthHttpInterceptor.service";
import {LoginComponent} from './login/login/login.component';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule,
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        LoginComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS, useClass: BasicAuthHttpInterceptorService, multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}