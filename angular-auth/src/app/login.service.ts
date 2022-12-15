import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API_USER_LOGIN: string = 'http://localhost:8080/api/user/login';

  constructor(private http: HttpClient) { }

  /*login(username: string, password: string) {
    const headers = new HttpHeaders(
      {
        authorization : 'Basic' + username + ':' + password
      }
    );

    return this.http.get<Object>(this.API_USER_ME, {headers: headers});
  }*/

  login(mail: string, password: string) {

    const httpOptions = {
      headers: { authorization: 'Basic' + mail + ':' + password}
    };

    return this.http.get<User>(this.API_USER_LOGIN + `/${mail}`).pipe(
      tap((response: User) => {
        return response
      })
    );
  }
}
