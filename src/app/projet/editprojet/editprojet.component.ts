import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProjetService} from "../../service/projet/projet.service";
import {CoreService} from "../../service/core/core.service";
import {Projet} from "../../models/projet/projet.model";

@Component({
  selector: 'app-editprojet',
  templateUrl: './editprojet.component.html',
  styleUrls: ['./editprojet.component.css']
})
export class EditprojetComponent implements OnInit {

  projetForm: FormGroup;

  projet: string[] = [
    'Nom', 'Phase', 'Statut', 'Statut Prerequis','Date Debut', 'Date Fin','Domaine'
  ];

  constructor(
      private _fb: FormBuilder,
      private projetService: ProjetService,
      private _dialogRef: MatDialogRef<EditprojetComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Projet

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
  }

  onFormSubmit() {
    if (this.projetForm.valid) {
        this.projetService
            .updateProjet(this.data.idProjet, this.projetForm.value)
            .subscribe({
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
