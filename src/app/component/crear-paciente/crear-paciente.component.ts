import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {

  cui: number =  0;
  nombres: string = '';
  apellidos: string = '';
  email: string = '';
  direccion: string = '';
  mensaje: string = '';

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  async crearCliente(): Promise<void> {
    if (!this.nombres.trim() || !this.email.trim() || !this.direccion.trim()) {
      this.mensaje = "Faltan datos";
      return;
    }

    const data = {
      cui: this.cui,
      nombres: this.nombres,
      apellidos: this.apellidos,
      email: this.email,
      direccion: this.direccion
    };

    try {
      const response = await this.http.post<any>('http://100.68.51.19:3000/paciente/crearCliente', data).toPromise();
      if (response && response.message) {
        this.mensaje = response.message;



        if (this.mensaje == "Cliente creado correctamente")
          {
            alert("paciente creado correctamente, este es su contraseña: " + response.password)
            //redirigir a pacientes con router
            this.router.navigate(['/pacientes']);
          }

      }
    } catch (error) {
      console.error(error);
      this.mensaje = "Error interno del servidor";
    }
  }

}
