import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //ver se centralizo essa informação das url da api em 1 só lugar appconstans.ts do projeto do alex
  private readonly API = './assets/courses.json';
  private readonly APIFELIPE = 'http://localhost:8080/setembro21/course/courses';
  private readonly APIHEROKU = 'https://setembro21.herokuapp.com/setembro21/course/courses';

  constructor(private httpClient: HttpClient) {}


  list() {
    return this.httpClient.get<Course[]>(this.APIFELIPE).pipe(
      first(),
      delay(1000),
      tap(courses => console.log(courses))
    );
  }
}
