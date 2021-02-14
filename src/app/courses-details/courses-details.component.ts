import { Component, OnInit } from '@angular/core';
import { Courses } from '../courses';
import { CoursesService } from '../courses.service';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent implements OnInit {
  id!: number;
  courses!: Courses;

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

  list(){
    this.router.navigate(['courses']);
  }
}