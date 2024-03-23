import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  private readonly BASE_URL = environment.API_URL; // URL de tu backend
  private readonly GETS_RESTAURANTE = `${this.BASE_URL}/productos/getsRestaurante`;
  private readonly GET_RESTAURANTE = `${this.BASE_URL}/productos/getRestaurante`;

  constructor(private http: HttpClient, private router:Router) {}

  // Obtiene todos los restaurantes
  public getRestaurantes(): Observable<any> {
    return this.http.get(this.GETS_RESTAURANTE);
  }

  // Obtiene un restaurante
  public getRestaurante(id: string): Observable<any> {
    return this.http.get(this.GET_RESTAURANTE + `/${id}`);
  }
  


}
