import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly BASE_URL = environment.API_URL; // URL de tu backend
  private readonly REGISTER = `${this.BASE_URL}/cliente/createCliente`;



 constructor(private http: HttpClient, private router:Router) {}

  register(registerData: any): Observable<any> {
    return this.http.post<any>(this.REGISTER, registerData);
  }
 

}
