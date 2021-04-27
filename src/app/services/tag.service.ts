import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TagModel} from '../models/tag.model';
import {SectionModel} from '../models/section.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  devHost = 'api';

  constructor(private httpClient: HttpClient) { }

  getTags(): Observable<Array<TagModel>> {
    return this.httpClient.get<Array<TagModel>>(this.devHost + '/tags');
  }

  saveTag(data): Observable<TagModel> {
    return this.httpClient.post<TagModel>(this.devHost + '/tags', data);
  }

  updateTag(data): Observable<TagModel> {
    return this.httpClient.put<TagModel>(this.devHost + '/tags', data);
  }

  deleteTag(id): Observable<TagModel> {
    return this.httpClient.delete<TagModel>(this.devHost + '/tags/' + id);
  }
}
