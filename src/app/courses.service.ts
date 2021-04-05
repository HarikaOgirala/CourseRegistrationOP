import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './service/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private baseUrl = 'http://localhost:8080/registrationop/api/v1/courses';

  username :String = '';
  password :String = '';
  
 
  constructor(private http: HttpClient, private authenticateService : AuthenticationService) { }

  getCourses(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCourses(courses: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, courses);
  }

  updateCourses(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCourses(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCoursesList(): Observable<any> {
    this.authenticateService.getUserName
            .pipe( first()) 
            .subscribe((uname) => {
                this.username = uname;
            });
    this.authenticateService.getPassword
            .pipe( first()) 
            .subscribe((pw) => {
                this.password = pw;
            });
    console.log(this.username);
    console.log(this.password);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa( this.username + ':' +  this.password) });
    return this.http.get(this.baseUrl,{headers}).pipe(
      map(
        userData => {
         return userData;
        }
      )
     );
  }

}
