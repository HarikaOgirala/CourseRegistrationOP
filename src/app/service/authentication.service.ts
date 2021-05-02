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

  private loginUrl = 'http://registrationop-env.eba-8zkgfhg2.us-east-2.elasticbeanstalk.com/registrationop/api/v2/login';

  private loggedIn = new BehaviorSubject<boolean>(false);

  private userName = new BehaviorSubject<String>('');

  private password = new BehaviorSubject<String>('');

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get getUserName() {
    return this.userName.asObservable();
  }

  get getPassword() {
    return this.password.asObservable();
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
        this.userName.next(username);
        this.password.next(password);
        sessionStorage.setItem('username',username);
        return userData;
       }
     )
    );
  }

  logOut() {
    sessionStorage.removeItem('username')
    this.loggedIn.next(false);
    this.userName.next('');
    this.userName.next('');
    console.log('logout usrnam'+sessionStorage.getItem('username'));
    this.router.navigate(['/login']);
  }
}
