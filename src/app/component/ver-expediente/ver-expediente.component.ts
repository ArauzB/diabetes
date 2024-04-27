import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ver-expediente',
  templateUrl: './ver-expediente.component.html',
  styleUrls: ['./ver-expediente.component.css']
})
export class VerExpedienteComponent implements OnInit {

  id!: number;
  expedientes!: any[];
  mensaje!: string;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // Obtener el parámetro 'id' de la URL
    this.route.queryParams.subscribe(params => {
      this.id = params['id_paciente'];
    });

    this.mensaje = '';

    this.obtenerExpediente();
  }

  obtenerExpediente(): void {
    this.http.post<any>('http://100.68.51.19:3000/expediente/obtenerExpedientePorId', { id: this.id }).subscribe(
      response => {
        if (response && response.expedientes) {
          this.expedientes = response.expedientes;
          console.log(this.expedientes);
          this.mensaje = "Expediente obtenido correctamente";
        } else {
          this.mensaje = "Expediente no encontrado";
        }
      },
      error => {
        console.error(error);
        this.mensaje = "Error al obtener el expediente";
      }
    );
  }


  agregarcitas(idExpediente: number): void {
    this.router.navigate(['/crear-citas'], { queryParams: { id_expediente: idExpediente } });
  }

  vercitas(idExpediente: number): void {
    this.router.navigate(['/ver-citas'], { queryParams: { id_expediente: idExpediente } });
  }

  agregarMedicamento(idExpediente: number): void {
    this.router.navigate(['/crear-medicamento'], { queryParams: { id_expediente: idExpediente } });
  }

  verMedicamento(idExpediente: number): void {
    this.router.navigate(['/ver-medicamento'], { queryParams: { id_expediente: idExpediente } });
  }

}
