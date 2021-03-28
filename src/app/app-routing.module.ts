import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CreateCoursesComponent } from './create-courses/create-courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { UpdateCoursesComponent } from './update-courses/update-courses.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

const routes: Routes = [
  { path: '', component: CoursesListComponent, canActivate:[AuthGaurdService] }, 
  { path: 'add', component: CreateCoursesComponent ,canActivate:[AuthGaurdService] },
  { path: 'update/:id', component: UpdateCoursesComponent },
  { path: 'details/:id', component: CoursesDetailsComponent },
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
