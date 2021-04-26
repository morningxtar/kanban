import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TagModel} from '../models/tag.model';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  devHost = 'api';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<Array<UserModel>> {
    return this.httpClient.get<Array<UserModel>>(this.devHost + '/users');
  }
}
