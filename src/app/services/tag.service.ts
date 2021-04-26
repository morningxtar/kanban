import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TagModel} from '../models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  devHost = 'api';

  constructor(private httpClient: HttpClient) { }

  getTags(): Observable<Array<TagModel>> {
    return this.httpClient.get<Array<TagModel>>(this.devHost + '/tags');
  }
}
