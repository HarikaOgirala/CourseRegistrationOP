import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
import { PasswordChecker } from './password-validator';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetForm!: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder){}

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
  }

  onReset(){
    this.submitted=false;
    this.resetForm.reset();
  }
}
