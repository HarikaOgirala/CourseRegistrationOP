import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from '../service/authentication.service';
import { BehaviorSubject} from 'rxjs';
import { Subscription } from 'rxjs' ;
import { first } from 'rxjs/internal/operators/first';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  isLoggedIn$!: Observable<boolean>; 
  user$!: Observable<String>; 
  userName :String = '';


  constructor(private router: Router,public loginService:AuthenticationService) { 
    console.log('in header');
  }

  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn;     
    this.user$ = this.loginService.getUserName; 
    console.log('menu ->' + this.isLoggedIn$);
    console.log('username ->' + this.user$);
  }

  handleLogout() {
    this.loginService.logOut();
  }

  backToHome() {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
    this.router.navigate(['courses']);
    console.log('menu ->' + this.isLoggedIn$);
  }

}