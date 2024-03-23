import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  
  private readonly BASE_URL = environment.API_URL; // URL de tu backend
  private readonly GET_TRACKING = `${this.BASE_URL}/tracking/getTracking`;
  private readonly GET_ORDENES = `${this.BASE_URL}/tracking/getPedidosFinalizados`;
  private readonly UPDATE_PEDIDOS = `${this.BASE_URL}/tracking/updatePedidos`;
  private readonly GETS_TRACKING = `${this.BASE_URL}/tracking/getAllTracking`;

  constructor(private http: HttpClient, private router:Router) {}

  // Obtiene el usuario
  public getTracking(token: any): Observable<any> {
    return this.http.post(this.GET_TRACKING, token );
  }
  
  public getOrdenes(token: any): Observable<any> {
    return this.http.post(this.GET_ORDENES, token );
  }

  public updatePedidos(datos: any): Observable<any> {
    return this.http.post(this.UPDATE_PEDIDOS, datos );
  }

  public getAllTracking(): Observable<any> {
    return this.http.get(this.GETS_TRACKING);
  }

}
