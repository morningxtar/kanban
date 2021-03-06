import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FicheModel} from '../models/fiche.model';

@Injectable({
  providedIn: 'root'
})
export class FicheService {

  devHost = 'api';

  constructor(private httpClient: HttpClient) {
  }

  getFiches(): Observable<Array<FicheModel>> {
    return this.httpClient.get<Array<FicheModel>>(this.devHost + '/fiches');
  }

  saveFiche(data): Observable<FicheModel> {
    return this.httpClient.post<FicheModel>(this.devHost + '/fiches', data, {responseType: 'text' as 'json'});
  }

  updateFiche(data): Observable<FicheModel> {
    return this.httpClient.put<FicheModel>(this.devHost + '/fiches', data, {responseType: 'text' as 'json'});
  }

  deleteFiche(id): Observable<FicheModel> {
    return this.httpClient.delete<FicheModel>(this.devHost + '/fiches/' + id, {responseType: 'text' as 'json'});
  }
}
