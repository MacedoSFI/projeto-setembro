import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly APIFELIPE = 'http://localhost:8080/setembro21';

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string) {
     return this.http.post(this.APIFELIPE + '/login', { email, password });
  }
}
