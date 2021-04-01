import { Component, OnInit } from '@angular/core';
import { CoursesDetailsComponent } from '../courses-details/courses-details.component';
import { Observable } from "rxjs";
import { LoginService } from "../login.service";
import { Login } from "../login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css']
})
export class LoginListComponent implements OnInit {

  login!: Observable<Login[]>;

  constructor(private loginService: LoginService,
    private router: Router) {}


  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.login = this.loginService.getLoginList();
  }


}
