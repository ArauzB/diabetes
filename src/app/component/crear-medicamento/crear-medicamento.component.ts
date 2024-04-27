import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-medicamento',
  templateUrl: './crear-medicamento.component.html',
  styleUrls: ['./crear-medicamento.component.css']
})
export class CrearMedicamentoComponent implements OnInit {



  idExpediente!: number;
  nombreMedicamento!: string;
  noDias!: number;
  cadaHora!: number;
  recomendaciones!: string;
  fecha!: Date;
  inicio!: Date;
  estado!: number;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Obtener los parámetros de la URL (queryParams)
    this.route.queryParams.subscribe(params => {
      this.idExpediente = params['id_expediente'];
    });

    // Estado por defecto (puedes cambiarlo según tus necesidades)
    this.estado = 1;

  }

    crearMedicamento(): void {
    const body = {
      id_expediente: this.idExpediente,
      nombre_medicamento: this.nombreMedicamento,
      no_dias: this.noDias,
      cada_hora: this.cadaHora,
      recomendaciones: this.recomendaciones,
      fecha: this.fecha,
      inicio: this.inicio,
      estado: this.estado
    };

    this.http.post<any>('http://100.68.51.19:3000/cargoMedicamento/crearMedicamento', body)
      .subscribe(
        response => {
          console.log(response.message);
          alert(response.message);
          this.router.navigate(['/ver-medicamento'], { queryParams: { id_expediente: this.idExpediente } });
        },
        error => {
          console.error('Error al crear el medicamento:', error);
          // Aquí puedes manejar el error según tus necesidades
        }
      );
  }
}
