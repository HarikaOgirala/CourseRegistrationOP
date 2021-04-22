import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { CoursesService } from '../courses.service';
import { NgxSpinnerService } from "ngx-spinner";  
import { AuthenticationService } from '../service/authentication.service';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";


@Component({
  selector: 'app-coursop-iframe',
  templateUrl: './coursop-iframe.component.html',
  styleUrls: ['./coursop-iframe.component.css']
})
export class CoursopIframeComponent implements OnInit {
  courseOpLink!: SafeResourceUrl;
  courseNumber= '';
  registrationResponse = '';
  errorMessage ='';
  invalidRequest=false;
  isLoggedIn$!: Observable<boolean>; 
  courses: string[] = [];
  emailLink = '';
  emailResponse =false;
  
  
  constructor(private domSanitizer:DomSanitizer, private coursesService :CoursesService,
    private SpinnerService: NgxSpinnerService,public loginService:AuthenticationService,
    private router: Router) {
    
     }

  ngOnInit(): void {
    this.courseOpLink = this.domSanitizer.bypassSecurityTrustResourceUrl('http://localhost:8083/courseop/');
    this.coursesService.getAllCoursesNames().subscribe( data => this.courses = data as string[]);
  }

  registerCourse() {
    console.log(this.courseNumber);
    this.SpinnerService.show();
    this.coursesService.registerCourse(this.courseNumber).subscribe(data => {
      console.log(data)
      this.registrationResponse = data;
      this.isLoggedIn$ = this.loginService.isLoggedIn;
      this.router.navigate(['courses']);
      console.log('menu ->' + this.isLoggedIn$);
      this.SpinnerService.hide(); 
    }, error => { 
        this.SpinnerService.hide(); 
        console.log(error);
        this.errorMessage =error;
        this.invalidRequest=true;
        if(this.errorMessage.includes('PreRequisites')) {
            this.emailLink = 'true';
        }
        else {
          this.emailLink='';
        }
       }
    );

  }

  sendEmail() {  
    this.SpinnerService.show();
    this.coursesService.sendEmail(this.courseNumber).subscribe(data => {
      this.SpinnerService.hide(); 
      this.emailResponse = data;
      this.isLoggedIn$ = this.loginService.isLoggedIn;
      this.errorMessage = 'Email Sent Successfully';
      this.emailLink = '';
    }, error => { 
      this.SpinnerService.hide(); 
        console.log(error);
        this.errorMessage =error;
       }
    );

  }

  confirmEmail() {
    if(confirm("you are about to send an Email to your Advisor saying\ncheck your eligibility to register for this course : "+this.courseNumber +"\nDo you want to continue?")) {
      this.sendEmail();
    }
  }

}
