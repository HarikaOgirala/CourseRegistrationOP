import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCoursesComponent } from './create-courses/create-courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateCoursesComponent } from './update-courses/update-courses.component';
import { LoginComponent } from './login/login.component';
import { HttpinterceptorService } from './httpinterceptor.service';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCoursesComponent,
    CoursesDetailsComponent,
    CoursesListComponent,
    UpdateCoursesComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
