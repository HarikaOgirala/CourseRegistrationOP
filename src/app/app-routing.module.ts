import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CreateCoursesComponent } from './create-courses/create-courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RedirectComponentComponent } from './redirect-component/redirect-component.component';
import { CoursopIframeComponent } from './coursop-iframe/coursop-iframe.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'CourseDetailsService', component:RedirectComponentComponent, pathMatch: 'full' },
  { path: 'courses', component: CoursesListComponent }, 
  { path: 'add', component: CreateCoursesComponent },
  { path: 'details/:id', component: CoursesDetailsComponent },
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'courseop', component:CoursopIframeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
