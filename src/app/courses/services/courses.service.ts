import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = './assets/courses.json';
  private readonly APIFELIPE = 'http://localhost:8080/setembro21/course/courses';
  private readonly APIHEROKU = 'https://setembro21.herokuapp.com/setembro21/course/courses';

  constructor(private httpClient: HttpClient) {}


  list() {
    return this.httpClient.get<Course[]>(this.APIHEROKU).pipe(
      tap(courses => console.log(courses))
    );
  }
}
