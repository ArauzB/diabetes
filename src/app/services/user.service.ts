import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL = environment.API_URL; // URL de tu backend
  private readonly GET_USER = `${this.BASE_URL}/auth/users`;
  private readonly UPDATE_USER = `${this.BASE_URL}/cliente/editCliente`;
  private readonly UPDATE_IMAGE = `${this.BASE_URL}/cliente/updateImage`;


  constructor(private http: HttpClient, private router:Router) {}

  // Obtiene el usuario
  public getUser(id: any): Observable<any> {
    return this.http.post(this.GET_USER, id );
  }

  // Actualiza el usuario
  public updateUser(user: any): Observable<any> {
    return this.http.post(this.UPDATE_USER, user );
  }

  // Actualiza la imagen del usuario

  subirImagen(token: any, imagen: File): Observable<any> {
    const formData = new FormData();
    formData.append('imagen', imagen);

    formData.append('token', token);

    return this.http.post(this.UPDATE_IMAGE, formData);

  }


}
