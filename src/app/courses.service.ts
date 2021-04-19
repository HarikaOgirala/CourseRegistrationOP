import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { AuthenticationService, User } from './service/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private baseUrl = 'http://localhost:8080/registrationop/api/v1/courses';
  private forgotPasswordUrl = 'http://localhost:8080/registrationop/api/v3/login'

  username :String = '';
  password :String = '';
  save: any;
 
  constructor(private http: HttpClient, private authenticateService : AuthenticationService) { 
  
  }

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
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa( this.username + ':' +  this.password) });
    return this.http.delete(`${this.baseUrl}/${id}`, {headers});
  }

  forgotPassword(email: Object): Observable<Object> {
    return this.http.post(`${this.forgotPasswordUrl}`, email);
  }
  resetPassword(password: Object, confirmedPassword: Object): Observable<Object> {
    return this.http.post(`${this.forgotPasswordUrl}`, password, confirmedPassword);
  }
  

  getCoursesList(status :string): Observable<any> {
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

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa( this.username + ':' +  this.password) });
    return this.http.get(`${this.baseUrl}/status/${status}`,{headers}).pipe(
      map(
        userData => {
         return userData;
        }
      )
     );
  }

  getAllCoursesNames(): Observable<any> {
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
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa( this.username + ':' +  this.password) });
    return this.http.get(`${this.baseUrl}/all`,{headers}).pipe(
      map(
        userData => {
           return userData;
        }
      )
     );
  }

  registerCourse(courseNumber:string): Observable<any> {
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
    const params = new HttpParams()
    .set('id', courseNumber);
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa( this.username + ':' +  this.password) });
    const options = { params: params, headers: headers };
    return this.http.get(this.baseUrl.concat('/register'), options).pipe(
      map(
        userData => {
         return userData;
        }
      )
     );
  }
  

  
  sendEmail(courseNumber:string): Observable<any> {
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
    const params = new HttpParams()
    .set('id', courseNumber);
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa( this.username + ':' +  this.password) });
    const options = { params: params, headers: headers };
    return this.http.get(this.baseUrl.concat('/sendmail'), options).pipe(
      map(
        userData => {
         return userData;
        }
      )
     );
  }

}
