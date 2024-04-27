import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PacientesService {


  private readonly BASE_URL = environment.API_URL; // URL de tu backend
  private readonly GET_PACIENTES = `${this.BASE_URL}/paciente/getCliente`;
  private readonly CREATE_PACIENTE = `${this.BASE_URL}/paciente/crearCliente`;
  private readonly UPDATE_PACIENTE = `${this.BASE_URL}/paciente/updateImage`;

  constructor(private http: HttpClient, private router:Router) {}

  getPacientes(): Observable<any> {
    return this.http.get<any>(this.GET_PACIENTES);
  }

  createPaciente(paciente: any): Observable<any> {
    return this.http.post<any>(this.CREATE_PACIENTE, paciente);
  }

  updatePaciente(paciente:any): Observable<any>{
    return this.http.put<any>(this.UPDATE_PACIENTE, paciente);
  }




}
