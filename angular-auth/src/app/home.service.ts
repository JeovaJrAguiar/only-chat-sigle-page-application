import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private API_HOME_ME: string = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) { }

  login(mail: string, password: string) {
    const headers = new HttpHeaders(
      {
        authorization : mail + ':' + password
      }
    );

    return this.http.get<Object>(this.API_HOME_ME, {headers: headers});
  }


  getUsers() : Observable<User> {
    return this.http.get<User>(this.API_HOME_ME);
  }
  getUser(mail: string) : Observable<User> {
    return this.http.get<User>(this.API_HOME_ME + '/' + mail);
  }

  getUserExceptMail(mail: string) : Observable<User> {
    return this.http.get<User>(this.API_HOME_ME + '/users/' + mail);
  }

  getUsersByMail(mail: string) : Observable<User> {
    return this.http.get<User>(this.API_HOME_ME + '/byMail/' + mail);
  }
  getUsersByUsername(username: string) : Observable<User> {
    return this.http.get<User>(this.API_HOME_ME + '/byUsername/' + username);
  }
}
