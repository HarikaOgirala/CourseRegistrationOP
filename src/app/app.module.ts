import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCoursesComponent } from './create-courses/create-courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { RedirectComponentComponent } from './redirect-component/redirect-component.component';
import { CoursesService } from './courses.service';
import { ErrorInterceptor } from './service/errorInterceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoursopIframeComponent } from './coursop-iframe/coursop-iframe.component';
import { NgxSpinnerModule } from "ngx-spinner"; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2CompleterModule } from 'ng2-completer';

@NgModule({
  declarations: [
    AppComponent,
    CreateCoursesComponent,
    CoursesDetailsComponent,
    CoursesListComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    RedirectComponentComponent,
    CoursopIframeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    Ng2CompleterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
