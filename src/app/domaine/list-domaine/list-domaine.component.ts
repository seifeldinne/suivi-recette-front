import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {Domaine} from "../../models/domaine/domaine.model";
import {DomaineService} from "../../service/domaine/domaine.service";
import {AddDomaineComponent} from "../add-domaine/add-domaine.component";
import {EditDomaineComponent} from "../edit-domaine/edit-domaine.component";

@Component({
    selector: 'app-typography',
    templateUrl: './list-domaine.component.html',
    styleUrls: ['./list-domaine.component.css']
})
export class ListDomaineComponent implements OnInit {
    domaine: Domaine[];
    displayedColumns: string[] = ['nomDomaine', 'mrc', 'vetude', 'vorganisation', 'vmetier', 'action'];

    dataSource = new MatTableDataSource<Domaine>();
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private domaineService: DomaineService, private domaineDialog: MatDialog) {
    }

    ngOnInit() {
        this.getListOfDomaines();
    }

    getListOfDomaines() {
        this.dataSource.paginator = this.paginator;
        this.domaineService.getDomaineList().subscribe(data => {
            this.dataSource.data = data;
            console.log(data);
        })
    }


    deleteDomaine(id: number) {
        this.domaineService.deleteDomaine(id).subscribe({
            next: (res) => {
                this.getListOfDomaines();
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
                    this.getListOfDomaines();
                }
            },
        });
    }

    addDomaine() {
        const dialogRef = this.domaineDialog.open(AddDomaineComponent, {});
        dialogRef.afterClosed().subscribe({
            next: (val) => {
                if (val) {
                    this.getListOfDomaines();
                }
            },
        });
    }
}
