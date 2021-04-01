import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:8080/registrationop/api/v2/login';

  constructor(private http: HttpClient) { }

  getLogin(id: number): Observable<any> {
    return this.http.get(`${this.loginUrl}/${id}`);
  }

  getLoginList(): Observable<any> {
    return this.http.get(`${this.loginUrl}`);
  }
  createLogin(login: Object): Observable<Object> {
    return this.http.post(`${this.loginUrl}`, login);
  }

}