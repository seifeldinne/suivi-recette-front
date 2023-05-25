import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Projet} from "../../models/projet/projet.model";


@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private baseUrl = 'http://localhost:8080/projet/';

  constructor(private http: HttpClient) {
  }

  getProjetList(): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${this.baseUrl}` + 'list-projet');

  }

  createProjet(projet: Projet): Observable<Projet> {
    return this.http.post<Projet>(`${this.baseUrl}` + 'save-projet', projet);
  }

  deleteProjet(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}delete-projet/${id}`);
  }

  getProjet(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}projet/${id}`);
  }

  updateProjet(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}update-projet/${id}`, value);
  }
}
