import {Component, OnInit} from '@angular/core';
import {ESLint} from 'eslint';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ADMIN: RouteInfo[] = [
    {path: '/user-profile', title: 'Profile', icon: 'person', class: ''},
    {path: '/icons', title: 'Demande de Deploiement', icon: 'bubble_chart', class: ''},
    {path: '/maps', title: 'Feedback', icon: 'location_on', class: ''},
    {path: '/table-list', title: 'Gestion des Projets', icon: 'content_paste', class: ''},
    {path: '/typography', title: 'Gestion des Domaines', icon: 'library_books', class: ''},
    {path: '/notifications', title: 'Calendrier', icon: 'notifications', class: ''},

];
export const RECETTE: RouteInfo[] = [
    {path: '/user-profile', title: 'Profile', icon: 'person', class: ''},
    {path: '/icons', title: 'Demande de Deploiement', icon: 'bubble_chart', class: ''},
    {path: '/maps', title: 'Feedback', icon: 'location_on', class: ''},
    {path: '/table-list', title: 'Gestion des Projets', icon: 'content_paste', class: ''},
    {path: '/notifications', title: 'Calendrier', icon: 'notifications', class: ''},

];

export const ORGA: RouteInfo[] = [
    {path: '/user-profile', title: 'Profile', icon: 'person', class: ''},
    {path: '/icons', title: 'Demande de Deploiement', icon: 'bubble_chart', class: ''},
    {path: '/maps', title: 'Feedback', icon: 'location_on', class: ''},
    {path: '/user-profile', title: 'Profile', icon: 'person', class: ''},
    {path: '/notifications', title: 'Calendrier', icon: 'notifications', class: ''},
];


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor() {
    }

    ngOnInit() {


        if (sessionStorage.getItem("role") == "RECETTE") {
            this.menuItems = RECETTE.filter(menuItem => menuItem);
        } else if (sessionStorage.getItem("role") == "ORGA") {
            this.menuItems = ORGA.filter(menuItem => menuItem);
        } else this.menuItems = ADMIN.filter(menuItem => menuItem);
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
