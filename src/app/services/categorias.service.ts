import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private readonly BASE_URL = environment.API_URL; // URL de tu backend
  private readonly GETS_CATEGORIA = `${this.BASE_URL}/categoria/getsCategoria`;
  private readonly GET_CATEGORIA = `${this.BASE_URL}/categoria/getCategoria`;
  private readonly CREATE_CATEGORIA = `${this.BASE_URL}/categoria/createCategoria`;
  private readonly UPDATE_IMAGE = `${this.BASE_URL}/categoria/updateImage`;

  constructor(private http: HttpClient, private router:Router) {}

  // Obtiene todas las categorias
  public getCategorias(): Observable<any> {
    return this.http.get(this.GETS_CATEGORIA);
  }

  // Obtiene una categoria
  public getCategoria(id: any): Observable<any> {
    return this.http.get(this.GET_CATEGORIA + `/${id}`);
  }

  createCategoria(categoria: any): Observable<any> {
    return this.http.post(this.CREATE_CATEGORIA, categoria);
  }


  subirImagen(id: any, imagen: File): Observable<any> {
    const formData = new FormData();
    formData.append('imagen', imagen);
    formData.append('id', id);
    return this.http.post(this.UPDATE_IMAGE, formData);
  }


  
}
