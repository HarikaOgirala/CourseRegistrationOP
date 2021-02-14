import { Component, OnInit } from '@angular/core';
import { Courses } from '../courses';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-update-courses',
  templateUrl: './update-courses.component.html',
  styleUrls: ['./update-courses.component.css']
})
export class UpdateCoursesComponent implements OnInit {
  id: number;
  courses: Courses;

  constructor(private route: ActivatedRoute,private router: Router,
    private coursesService: CoursesService) { }
    ngOnInit() {
      this.courses = new Courses();
  
      this.id = this.route.snapshot.params['id'];
      
      this.coursesService.getCourses(this.id)
        .subscribe(data => {
          console.log(data)
          this.courses = data;
        }, error => console.log(error));
    }
  
    updateCourses() {
      this.coursesService.updateCourses(this.id, this.courses)
        .subscribe(data => {
          console.log(data);
          this.courses = new Courses();
          this.gotoList();
        }, error => console.log(error));
    }
  
    onSubmit() {
      this.updateCourses();    
    }
  
    gotoList() {
      this.router.navigate(['/employees']);
    }

}
