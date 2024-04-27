import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  citas: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerCitasConDetalles();
  }

  obtenerCitasConDetalles(): void {
    this.http.get<any[]>('http://100.68.51.19:3000/cargoCitas/getCitas').subscribe(
      (data) => {
        this.citas = data;
      },
      (error) => {
        console.error('Error al obtener las citas:', error);
      }
    );
  }
}
