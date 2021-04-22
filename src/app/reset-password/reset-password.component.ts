import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
import { PasswordChecker } from './password-validator';
import { ForgotPassword } from 'src/app/forgotpassword';
import { CoursesService } from 'src/app/courses.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm!: FormGroup;
  submitted = false;
  forgotPassword: ForgotPassword = new ForgotPassword();
  token ='';

  constructor(private coursesService: CoursesService,
    private formbuilder: FormBuilder,
    private router: Router,
    private activatedRoute : ActivatedRoute){
      this.activatedRoute.queryParams.subscribe(params => {
        this.token = params['token'];
      });
    }

  ngOnInit(){

    this.resetForm = this.formbuilder.group({
      password: ['',[Validators.required]],
      confirmPassword: ['',Validators.required]
    }, {
      validators: PasswordChecker('password','confirmPassword')
    });
  }

  get h(){
    return this.resetForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.resetForm.invalid){
      return;
    }
    this.save();
  }

  save() {

    this.forgotPassword.token =this.token;
    console.log(this.forgotPassword.token);
    this.coursesService.resetPassword(this.forgotPassword).subscribe((data: any) => {
      console.log(data)
      this.forgotPassword = new ForgotPassword();
      this.gotoList();
    }, 
      (error: any) => console.log(error));
  }

  gotoList() {
    this.router.navigate(['/login']);
  }

  onReset(){
    this.submitted=false;
    this.resetForm.reset();
  }
}
