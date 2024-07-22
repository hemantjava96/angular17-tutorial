import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  private apiUrl = 'http://localhost:8080/public/auth/logIn'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }
  login(){
    const body = {
      email: 'admin@gmail.com',
      password: 'admin@123'
    };
    return this.http.post(this.apiUrl, body);
  }

}
