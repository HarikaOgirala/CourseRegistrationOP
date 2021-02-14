import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Courses } from '../courses';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})
export class CreateCoursesComponent implements OnInit {

  courses: Courses = new Courses();
  submitted = false;

  constructor(private coursesService: CoursesService,
    private router: Router) { }

  ngOnInit() {
  }

  newCourses(): void {
    this.submitted = false;
    this.courses = new Courses();
  }

  save() {
    this.coursesService
    .createCourses(this.courses).subscribe((data: any) => {
      console.log(data)
      this.courses = new Courses();
      this.gotoList();
    }, 
      (    error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/courses']);
  }
}