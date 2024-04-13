import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private readonly BASE_URL = environment.API_URL; // URL de tu backend
  private readonly GET_PRODUCTOS = `${this.BASE_URL}/paciente/getCliente`;
  private readonly GET_PRODUCTO = `${this.BASE_URL}/paciente/getProducto`;
  private readonly CREATE_PRODUCTO = `${this.BASE_URL}/paciente/crearCliente`;
  private readonly UPDATE_IMAGE = `${this.BASE_URL}/paciente/updateImage`;

  constructor(private http: HttpClient, private router:Router) {}

  getProductos(): Observable<any> {
    return this.http.get<any>(this.GET_PRODUCTOS);
  }

  getProducto(id: any): Observable<any> {
    return this.http.get<any>(this.GET_PRODUCTO, id);
  }

  createProducto(producto: any): Observable<any> {
    return this.http.post<any>(this.CREATE_PRODUCTO, producto);
  }

  subirImagen(id: any, imagen: File): Observable<any> {
    const formData = new FormData();
    formData.append('imagen', imagen);
    formData.append('id', id);
    return this.http.post(this.UPDATE_IMAGE, formData);
  }


}
