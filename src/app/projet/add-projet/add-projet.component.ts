import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProjetService} from "../../service/projet/projet.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Projet} from "../../models/projet/projet.model";
import {Domaine} from "../../models/domaine/domaine.model";
import {DomaineService} from "../../service/domaine/domaine.service";

@Component({
    selector: 'app-add-projet',
    templateUrl: './add-projet.component.html',
    styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {

    projetForm: FormGroup;

    projet: string[] = [
        'Nom', 'Phase', 'Statut', 'Statut Prerequis', 'Date Debut', 'Date Fin', 'Domaine'
    ];
    domaineList: Domaine[];
    domaines;
    domaine: any;

    constructor(
        private _fb: FormBuilder,
        private projetService: ProjetService,
        private _dialogRef: MatDialogRef<AddProjetComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Projet ,
        private domaineService: DomaineService
    ) {
        this.projetForm = this._fb.group({
            nomProjet: '',
            phaseProjet: '',
            statutProjet: '',
            statutPrerequis: '',
            dateDebut: '',
            dateFin: '',
            domaine: '',
        });
    }

    ngOnInit(): void {
        this.projetForm.patchValue(this.data);
        this.domaineService.getDomaineList().subscribe(data => {
            this.domaineList = data;
        })
    }

    onFormSubmit() {
        if (this.projetForm.valid) {
            this.projetService.createProjet(this.projetForm.value).subscribe({
                next: (val: any) => {
                    this._dialogRef.close(true);
                },
                error: (err: any) => {
                    console.error(err);
                },
            });
        }
    }


}
