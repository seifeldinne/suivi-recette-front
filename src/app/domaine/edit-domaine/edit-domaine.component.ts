import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProjetService} from "../../service/projet/projet.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Projet} from "../../models/projet/projet.model";
import {DomaineService} from "../../service/domaine/domaine.service";
import {Domaine} from "../../models/domaine/domaine.model";

@Component({
  selector: 'app-edit-domaine',
  templateUrl: './edit-domaine.component.html',
  styleUrls: ['./edit-domaine.component.css']
})
export class EditDomaineComponent implements OnInit {

  domaineForm: FormGroup;

  domaine: string[] = ['nomDomaine', 'mrc', 'vetude', 'vorganisation', 'vmetier'];

  constructor(
      private _fb: FormBuilder,
      private domaineService: DomaineService,
      private _dialogRef: MatDialogRef<EditDomaineComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Domaine

  ) {
    this.domaineForm = this._fb.group({
      nomDomaine: '',
      mrc: '',
      vetude: '',
      vorganisation: '',
      vmetier: '',
    });
  }

  ngOnInit(): void {
    this.domaineForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.domaineForm.valid) {
      if (this.data) {
        var domaine = new Domaine();
        domaine.idDomaine(1);

        this.domaineService
            .updateDomaine(this.data.idDomaine, this.domaineForm.value)
            .subscribe({
              next: (val: any) => {
                this._dialogRef.close(true);
              },
              error: (err: any) => {
                console.error(err);
              },
            });
      } else {
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
}


