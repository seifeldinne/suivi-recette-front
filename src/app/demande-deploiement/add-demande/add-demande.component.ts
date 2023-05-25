import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Domaine} from "../../models/domaine/domaine.model";
import {ProjetService} from "../../service/projet/projet.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Projet} from "../../models/projet/projet.model";
import {DomaineService} from "../../service/domaine/domaine.service";
import {DemandeService} from "../../service/demande/demande.service";
import {Demande} from "../../models/demande/demande.model";

@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.css']
})
export class AddDemandeComponent implements OnInit {
  demandeForm: FormGroup;
  demande: string[] = ['dateDemande', 'projet', 'mails', 'observations'];
  projetList: Projet[];
  projet: any;
  constructor(
      private _fb: FormBuilder,
      private demandeService: DemandeService,
      private _dialogRef: MatDialogRef<AddDemandeComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Demande ,
      private projetService: ProjetService
  ) {
    this.demandeForm = this._fb.group({
      dateDemande: '',
      projet: '',
      mails: '',
      observations: '',
    });
  }

  ngOnInit(): void {
    this.demandeForm.patchValue(this.data);
    this.projetService.getProjetList().subscribe(data => {
      this.projetList = data;
    })
  }

  onFormSubmit() {
    if (this.demandeForm.valid) {
      this.demandeService.createDemande(this.demandeForm.value).subscribe({
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
