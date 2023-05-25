import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Projet} from "../../models/projet/projet.model";
import {DemandeService} from "../../service/demande/demande.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Demande} from "../../models/demande/demande.model";
import {ProjetService} from "../../service/projet/projet.service";
import {DomaineService} from "../../service/domaine/domaine.service";
import {Domaine} from "../../models/domaine/domaine.model";

@Component({
    selector: 'app-add-domaine',
    templateUrl: './add-domaine.component.html',
    styleUrls: ['./add-domaine.component.css']
})
export class AddDomaineComponent implements OnInit {
    domaineForm: FormGroup;
    domaine: string[] = ['nomDomaine', 'mrc', 'vetude', 'vorganisation', 'vmetier'];

    constructor(
        private _fb: FormBuilder,
        private domaineService: DomaineService,
        private _dialogRef: MatDialogRef<AddDomaineComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Domaine
    ) {
        this.domaineForm = this._fb.group({
            nomDomaine: '',
            mrc: '',
            vetude: '',
            vorganisation: '',
            vmetier: ''
        });
    }

    ngOnInit(): void {
        this.domaineForm.patchValue(this.data);
    }

    onFormSubmit() {
        if (this.domaineForm.valid) {
            this.domaineService.createDomaine(this.domaineForm.value).subscribe({
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
