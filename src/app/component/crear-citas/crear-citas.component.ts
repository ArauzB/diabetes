import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent implements OnInit {

  idExpediente!: number;
  fechaString: string = ''; // Cadena de fecha del formulario
  estado!: number;
  mensaje!: string;

  constructor(private http: HttpClient, private router: Router,  private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.idExpediente = params['id_expediente'];
    });

this.fechaString = '';
    this.estado = 1;
    this.mensaje = '';
  }

  crearCita(): void {
    const fecha = new Date(this.fechaString);

    const payload = {
      id_expediente: this.idExpediente,
      fecha : fecha,
      estado: this.estado
    };

    console.log(payload);

    this.http.post<any>('http://100.68.51.19:3000/cargoCitas/crearCita', payload).subscribe(
      response => {
        this.mensaje = response.message;
        console.log(response)
        // Redirigir a la página de detalle de la cita u otra página relevante
        this.router.navigate(['/ver-citas'], { queryParams: { id_expediente: this.idExpediente } });
      },
      error => {
        console.error(error);
        this.mensaje = "Error al crear la cita";
      }
    );
  }

}
