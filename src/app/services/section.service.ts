import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TagModel} from '../models/tag.model';
import {SectionModel} from '../models/section.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  devHost = 'api';

  constructor(private httpClient: HttpClient) {
  }

  // get all sections
  getSections(): Observable<Array<SectionModel>> {
    return this.httpClient.get<Array<SectionModel>>(this.devHost + '/sections');
  }

  saveSection(data): Observable<SectionModel> {
    return this.httpClient.post<SectionModel>(this.devHost + '/sections', data);
  }

  updateSection(data): Observable<SectionModel> {
    return this.httpClient.put<SectionModel>(this.devHost + '/sections', data);
  }

  deleteSection(id): Observable<SectionModel> {
    return this.httpClient.delete<SectionModel>(this.devHost + '/sections/' + id);
  }

}
