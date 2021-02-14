import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CreateCoursesComponent } from './create-courses/create-courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { UpdateCoursesComponent } from './update-courses/update-courses.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesListComponent },
  { path: 'add', component: CreateCoursesComponent },
  { path: 'update', component: UpdateCoursesComponent },
  { path: 'details', component: CoursesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
