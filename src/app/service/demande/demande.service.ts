import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Demande} from "../../models/demande/demande.model";

@Injectable({
  providedIn: 'root'
})
export class DemandeService {


  private baseUrl = 'http://localhost:8080/demande/';

  constructor(private http: HttpClient) {
  }

  getDemandetList(): Observable<Demande[]> {
    return this.http.get<Demande[]>(`${this.baseUrl}` + 'list-demande');

  }

  createDemande(demande: Demande): Observable<Demande> {
    return this.http.post<Demande>(`${this.baseUrl}` + 'save-demande', demande);
  }

  deleteDemande(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}delete-demande/${id}`);
  }

  getDemande(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}demande/${id}`);
  }

  updateDemande(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}update-demande/${id}`, value);
  }
}
