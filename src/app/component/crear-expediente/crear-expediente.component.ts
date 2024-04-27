import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-crear-expediente',
  templateUrl: './crear-expediente.component.html',
  styleUrls: ['./crear-expediente.component.css']
})
export class CrearExpedienteComponent implements OnInit {


  id_paciente!: number;
  id_usuario!: number;
  estado!: number;
  mensaje!: string;
  id_diabetes!: number; // Ejemplo: Valor por defecto para ID de diabetes (ajustar según tus necesidades)
  fecha!: Date;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Obtener los parámetros de la URL (queryParams)
    this.route.queryParams.subscribe(params => {
      this.id_paciente = params['id_paciente'];
      this.id_usuario = params['id_usuario'];
    });

    // Estado por defecto (puedes cambiarlo según tus necesidades)
    this.estado = 1;

    console.log(this.id_paciente + " y : " + this.id_usuario)

    // Mensaje inicial
    this.mensaje = '';
  }

  async crearExpediente(): Promise<void> {
    const data = {
      id_paciente: this.id_paciente,
      id_usuario: this.id_usuario,
      id_diabetes: this.id_diabetes, // Ejemplo: Valor por defecto para ID de diabetes (ajustar según tus necesidades)
      fecha: this.fecha, // Ejemplo: Utilizar la fecha actual (ajustar según tus necesidades)
      estado: this.estado
    };

    try {
      const response = await this.http.post<any>('http://100.68.51.19:3000/expediente/crearExpediente', data).toPromise();
      if (response && response.message) {
        this.mensaje = response.message;
        alert(response.message);
        this.router.navigate(['/ver-expediente'], { queryParams: { id_paciente: this.id_paciente } });
      }
    } catch (error) {
      console.error(error);
      this.mensaje = "Error al crear el expediente";
    }
  }

}
