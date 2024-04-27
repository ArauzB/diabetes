import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.css']
})
export class VerCitasComponent implements OnInit {

  id!: number;
  citas!: any[];
  mensaje!: string;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtener el parámetro 'id_expediente' de la URL usando ActivatedRoute
    this.route.queryParams.subscribe(params => {
      this.id = params['id_expediente'];
    });
    this.mensaje = '';

    this.obtenerCitasPorId();
  }

  obtenerCitasPorId(): void {
    this.http.post<any>('http://100.68.51.19:3000/cargoCitas/getCita', { id: this.id }).subscribe(
      response => {
        if (response && response.citas) {
          this.citas = response.citas;
          console.log(this.citas);
          this.mensaje = response.message;
        } else {
          this.mensaje = response.message;
        }
      },
      error => {
        console.error(error);
        this.mensaje = "Error o no se encontraron datos";
      }
    );
  }


}
