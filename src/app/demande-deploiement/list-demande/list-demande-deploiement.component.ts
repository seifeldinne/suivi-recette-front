import {Component, OnInit, ViewChild} from '@angular/core';
import {Domaine} from "../../models/domaine/domaine.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {EditDomaineComponent} from "../../domaine/edit-domaine/edit-domaine.component";
import {AddDomaineComponent} from "../../domaine/add-domaine/add-domaine.component";
import {Demande} from "../../models/demande/demande.model";
import {DemandeService} from "../../service/demande/demande.service";
import {AddDemandeComponent} from "../add-demande/add-demande.component";

@Component({
    selector: 'app-icons',
    templateUrl: './list-demande-deploiement.component.html',
    styleUrls: ['./list-demande-deploiement.component.css']
})
export class ListDemandeDeploiementComponent implements OnInit {
    demande: Demande[];
    displayedColumns: string[] = ['dateDemande', 'projet', 'mails', 'observations', 'action'];
    dataSource = new MatTableDataSource<Demande>();
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private demandeService: DemandeService, private domaineDialog: MatDialog) {
    }

    ngOnInit() {
        this.getListOfDemandes();
    }

    getListOfDemandes() {

        this.dataSource.paginator = this.paginator;
        this.demandeService.getDemandetList().subscribe(data => {
            this.dataSource.data = data;
            console.log(data);
        })
    }


    deleteDemande(id: number) {
        this.demandeService.deleteDemande(id).subscribe({
            next: (res) => {
                this.getListOfDemandes();
            },
            error: console.log,
        });
    }

    openEditForm(data: Domaine) {
        const dialogRef = this.domaineDialog.open(EditDomaineComponent, {
            data,
        });

        dialogRef.afterClosed().subscribe({
            next: (val) => {
                if (val) {
                    this.getListOfDemandes();
                }
            },
        });
    }

    addDemande() {
        const dialogRef = this.domaineDialog.open(AddDemandeComponent, {});
        dialogRef.afterClosed().subscribe({
            next: (val) => {
                if (val) {
                    this.getListOfDemandes();
                }
            },
        });
    }
}
