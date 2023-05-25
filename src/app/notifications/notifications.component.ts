import {Component, OnInit} from '@angular/core';
import {CalendarModule} from "angular-calendar";
import {DateAdapter} from "@angular/material/core";
import {adapterFactory} from "angular-calendar/date-adapters/moment";

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css'],

})
export class NotificationsComponent implements OnInit {

    ngOnInit(): void {
    }

}
