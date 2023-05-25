import {Domaine} from "../domaine/domaine.model";

export class Projet {

    idProjet?: any;
    nomProjet?: string;
    phaseProjet?: string;
    statutProjet?: string;
    statutPrerequis?: string;
    dateDebut?: string;
    dateFin?: string;
    domaine?: Domaine;
    isDeleting: boolean=false;
}
