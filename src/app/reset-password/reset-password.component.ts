import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/courses.service';
import { ForgotPassword } from 'src/app/forgotpassword';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  forgotPassword: ForgotPassword = new ForgotPassword();
  submitted = false;

  constructor(private coursesService: CoursesService,
    private router: Router) { }

  ngOnInit() {
  }

  newCourses(): void {
    this.submitted = false;
    this.forgotPassword = new ForgotPassword();
  }

  save() {
    this.coursesService
    .forgotPassword(this.forgotPassword).subscribe((data: any) => {
      console.log(data)
      this.forgotPassword = new ForgotPassword();
      this.gotoList();
    }, 
      (    error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/login']);
  }

}
