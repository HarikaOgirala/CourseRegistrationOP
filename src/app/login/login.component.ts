import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Login } from '../login';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login: Login = new Login();
  invalidLogin = false;
  username = '';
  password = '';
  errorMessage ='';
  isLoggedIn=false;

  constructor(private router: Router,
    private loginService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn = this.loginService.isUserLoggedIn();
  }

  newLogin(): void {
    this.invalidLogin = false;
    this.login = new Login();  
  }

  checkLogin() {
    (this.loginService.authenticate(this.username, this.password).subscribe(
      data => {
        console.log('success login');
        this.invalidLogin = false
        localStorage.setItem('currentUser', JSON.stringify(this.username));
                this.router.navigate(['courses']);
      },
      error => {
        console.log('error login');
        this.invalidLogin = true;        
        this.errorMessage="Invalid Credentials";
      }
    )
    );

  }

  onSubmit() {
    console.log('inside onsubmit');
    this.invalidLogin = true;
    this.checkLogin();    
  }

  gotoList() {
    this.router.navigate(['/loginList']);
  }

}