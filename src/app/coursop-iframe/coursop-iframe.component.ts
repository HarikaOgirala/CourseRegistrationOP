import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { logging } from 'selenium-webdriver';
import { CoursesService } from '../courses.service';

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

  constructor(private domSanitizer:DomSanitizer, private coursesService :CoursesService) { }

  ngOnInit(): void {
    this.courseOpLink = this.domSanitizer.bypassSecurityTrustResourceUrl('http://localhost:8083/courseop/');
  }

  registerCourse() {
    console.log(this.courseNumber);
    this.coursesService.registerCourse(this.courseNumber).subscribe(data => {
      console.log(data)
      this.registrationResponse = data;
    }, error => {
        console.log(error);
        this.errorMessage =error;
        this.invalidRequest=true;
       }
    );

  }

}
