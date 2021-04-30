import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
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

  saveUser(data): Observable<UserModel> {
    return this.httpClient.post<UserModel>(this.devHost + '/users', data, {responseType: 'text' as 'json'});
  }

  updateUser(data): Observable<UserModel> {
    return this.httpClient.put<UserModel>(this.devHost + '/users', data, {responseType: 'text' as 'json'});
  }

  deleteUser(id): Observable<UserModel> {
    return this.httpClient.delete<UserModel>(this.devHost + '/users/' + id, {responseType: 'text' as 'json'});
  }
}
