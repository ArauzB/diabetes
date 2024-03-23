import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UbicacionClienteService {

  private readonly BASE_URL = environment.API_URL; // URL de tu backend
  private readonly GET_UBICACION = `${this.BASE_URL}/cliente/getUbicacionCliente`;
  private readonly CREATE_UBICACION = `${this.BASE_URL}/cliente/createUbicacionCliente`;
  private readonly UPDATE_UBICACION = `${this.BASE_URL}/cliente/editUbicacionCliente`;

  constructor(private http: HttpClient, private router:Router) {}

  // Obtiene la ubicacion del cliente
  public getUbicacionCliente(token: any): Observable<any> {
    return this.http.post(this.GET_UBICACION, token );
  }

  // Crea la ubicacion del cliente
  public createUbicacionCliente(ubicacion: any): Observable<any> {
    return this.http.post(this.CREATE_UBICACION, ubicacion );
  }

  // Actualiza la ubicacion del cliente
  public updateUbicacionCliente(ubicacion: any): Observable<any> {
    return this.http.post(this.UPDATE_UBICACION, ubicacion );
  }

  
}
