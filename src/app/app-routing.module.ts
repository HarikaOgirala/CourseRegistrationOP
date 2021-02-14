import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CreateCoursesComponent } from './create-courses/create-courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { UpdateCoursesComponent } from './update-courses/update-courses.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesListComponent },
  { path: 'add', component: CreateCoursesComponent },
  { path: 'update/:id', component: UpdateCoursesComponent },
  { path: 'details/:id', component: CoursesDetailsComponent },
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
