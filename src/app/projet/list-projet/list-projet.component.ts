import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {Projet} from "../../models/projet/projet.model";
import {MatTableDataSource} from "@angular/material/table";
import {ProjetService} from "../../service/projet/projet.service";
import {MatDialog} from "@angular/material/dialog";
import {EditprojetComponent} from "../editprojet/editprojet.component";
import {AddProjetComponent} from "../add-projet/add-projet.component";

@Component({
    selector: 'app-table-list',
    templateUrl: './list-projet.component.html',
    styleUrls: ['./list-projet.component.css']
})
export class ListProjetComponent implements OnInit {
    projets: Projet[];

    displayedColumns: string[] = ['Nom', 'Phase', 'Statut', 'Statut Prerequis','Date Debut', 'Date Fin','Domaine','action' ];

    dataSource = new MatTableDataSource<Projet>();
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private projetService: ProjetService ,  private editProjetDialog: MatDialog) {
    }

    ngOnInit() {
        this.getListOfProjet();
    }
    getListOfProjet(){
        this.dataSource.paginator = this.paginator;
        this.projetService.getProjetList().subscribe(data => {
            this.dataSource.data = data;
        })
    }


    deleteProjet(id: number) {
        this.projetService.deleteProjet(id).subscribe({
            next: (res) => {
            //    this._coreService.openSnackBar('Projet Suprrimé !', 'done');
                this.getListOfProjet();
            },
            error: console.log,
        });
    }

    openEditForm(data: Projet) {
    const dialogRef = this.editProjetDialog.open(EditprojetComponent, {
            data,
        });

        dialogRef.afterClosed().subscribe({
            next: (val) => {
                if (val) {
                    this.getListOfProjet();
                }
            },
        });
    }

    addProjet() {
        const dialogRef = this.editProjetDialog.open(AddProjetComponent, {});
        dialogRef.afterClosed().subscribe({
            next: (val) => {
                if (val) {
                    this.getListOfProjet();
                }
            },
        });
    }
}
