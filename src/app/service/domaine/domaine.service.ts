import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Domaine} from "../../models/domaine/domaine.model";

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  private baseUrlDomaine = 'http://localhost:8080/domaine/';

  constructor(private http: HttpClient) {
  }

  getDomaineList(): Observable<Domaine[]> {
    return this.http.get<any>(`${this.baseUrlDomaine}` + 'list-domaine');

  }

  createDomaine(domaine: object): Observable<Domaine> {
    return this.http.post(`${this.baseUrlDomaine}` + 'save-domaine', domaine);
  }

  deleteDomaine(id: number): Observable<Domaine> {
    return this.http.delete(`${this.baseUrlDomaine}delete-domaine/${id}`);
  }

  getProjet(id: number): Observable<Domaine> {
    return this.http.get(`${this.baseUrlDomaine}domaine/${id}`);
  }

  updateDomaine(id: number, value: Domaine): Observable<Domaine> {
    return this.http.post(`${this.baseUrlDomaine}update-domaine/${id}`, value);
  }
}
