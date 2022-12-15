import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private API_USER_REGISTER: string = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) { }

  register(mail: string, name: string, fullname: string, gender: string, password: string, photo: string) {
    const body = {
      mail: mail,
      username: name,
      fullname: fullname,
      gender: gender,
      password: password,
      photo: photo
    };

    return this.http.post<Object>(this.API_USER_REGISTER, body);
  }
}
