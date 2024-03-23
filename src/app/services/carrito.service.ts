import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private readonly BASE_URL = environment.API_URL; // URL de tu backend
  private readonly GET_CARRITO = `${this.BASE_URL}/carrito/getCarrito`;
  private readonly CREATE_CARRITO = `${this.BASE_URL}/carrito/createCarrito`;
  private readonly DELETE_CARRITO = `${this.BASE_URL}/carrito/deleteCarrito`;
  private readonly CREATE_DETALLE= `${this.BASE_URL}/pedidos/create`;


  constructor(private http: HttpClient, private router:Router) {}

  // Obtiene el carrito
  public getCarrito(token: any): Observable<any> {
    return this.http.post(this.GET_CARRITO, token );
  }
  
  // Agrega un producto al carrito
  public agregarAlCarrito(producto: any): Observable<any> {
    return this.http.post(this.CREATE_CARRITO, producto);
  }

  // Elimina un producto del carrito con el id del carrito por medio de params
  public eliminarDelCarrito(id: string): Observable<any> {
    return this.http.delete(`${this.DELETE_CARRITO}/${id}`);
  }
  

  // Crea un pedido con los productos del carrito
  public crearPedido(pedido: any): Observable<any> {
    return this.http.post(this.CREATE_DETALLE, pedido);
  }

  
}
