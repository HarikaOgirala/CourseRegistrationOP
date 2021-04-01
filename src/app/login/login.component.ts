import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Login } from '../login';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login: Login = new Login();
  submitted = false;

  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
  }

  newLogin(): void {
    this.submitted = false;
    this.login = new Login();  
  }

  save() {
    this.loginService
    .createLogin(this.login).subscribe((data: any) => {
      console.log(data)
      this.login = new Login();
      this.gotoList();
    }, 
      (    error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/loginList']);
  }

}



