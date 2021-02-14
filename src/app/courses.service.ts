import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/courses';

  constructor(private http: HttpClient) { }

  getCourses(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCourses(courses: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, courses);
  }

  updateCourses(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCourses(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCoursesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}