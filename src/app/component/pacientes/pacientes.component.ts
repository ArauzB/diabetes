import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  pacientes!: any[];

  carrito={
    id_producto: '',
    token: localStorage.getItem('token'),
    precio: 0,
  }

  constructor(private pacientesService:PacientesService, private router:Router) { }

  ngOnInit(): void {
    this.pacientesService.getPacientes().subscribe(
      (data) => {
        this.pacientes = data;
        console.log(this.pacientes);
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );

  }


 // Función para manejar el evento de agregar expediente
 agregarExpediente(idPaciente: number): void {
  const idUsuario = localStorage.getItem('id');
  this.router.navigate(['/crear-expediente'], { queryParams: { id_paciente: idPaciente, id_usuario: idUsuario } });
}

verExpediente(idPaciente: number): void {
  const idUsuario = localStorage.getItem('id');
  this.router.navigate(['/ver-expediente'], { queryParams: { id_paciente: idPaciente, id_usuario: idUsuario } });
}


}
