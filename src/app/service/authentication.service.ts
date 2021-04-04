import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
export class User{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginUrl = 'http://localhost:8080/registrationop/api/v2/login';

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  
  constructor(private http: HttpClient,
    private router: Router,) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
    
  }

  authenticate(username: string, password: string) : Observable<User>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<User>(this.loginUrl,{headers}).pipe(
     map(
       userData => {
        this.loggedIn.next(true);
        sessionStorage.setItem('username',username);
        return userData;
       }
     )
    );
  }

  logOut() {
    sessionStorage.removeItem('username')
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
