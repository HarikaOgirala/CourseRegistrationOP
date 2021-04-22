import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { CoursesService } from "../courses.service";
import { Courses } from "../courses";
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses!: Observable<Courses[]>;
  
  isLoggedIn$!: Observable<boolean>;
  status='ALL';

  constructor(private coursesService: CoursesService,
    private router: Router) {}


  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    console.log(this.status);
    this.courses = this.coursesService.getCoursesList(this.status);
  }
  reloadDataWithStatus(status :string) {
    console.log(status);
    this.courses = this.coursesService.getCoursesList(status);
  }

  deleteCourses(id: number) {
    this.coursesService.deleteCourses(id)
      .subscribe(
        (        data: any) => {
          console.log(data);
          this.reloadData();
        },
        (        error: any) => console.log(error));
  }

  coursesDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateCourses(id:number){
    this.router.navigate(['update',id]);
  }

  confirmDelete(id: number) {
    if(confirm("Are you sure to de-register this course ?")) {
      this.deleteCourses(id);
    }
  }

}
