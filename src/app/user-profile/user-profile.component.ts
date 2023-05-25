import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    role: string;
    description: string;

    constructor() {
    }

    /*
    * admin:
    profile
    demande de déploiement
    feedback
    gestion des projets
    gestion des domaines
    calendrier

    recette:
    profile
    demande de déploiement
    feedback
    gestion des projets
    calendrier

    Orga:
    profile
    demande de déploiement
    feedback
    calendrier
    * */
    ngOnInit() {
        if (sessionStorage.getItem("role") == "RECETTE") {
            this.role = "Agent de departement Recette";
            this.description = "vous pouvez consulter les pages suivant </br>" +
                "  -  demande de déploiement\n" +
                "  -  feedback\n" +
                "  -  gestion des projets\n" +
                "  -  calendrier";
        } else if (sessionStorage.getItem("role") == "ORGA") {
            this.role = "Agent de departement Organisation";
            this.description = "vous pouvez consulter les pages suivant </br>" +
                "";
        } else {
            this.role = "Administrateur";
            this.description = "vous pouvez consulter les pages suivant </br>" +
                "";
        }

    }

}
