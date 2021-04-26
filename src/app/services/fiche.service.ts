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
}
