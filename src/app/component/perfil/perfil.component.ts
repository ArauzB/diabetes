import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { UbicacionClienteService } from 'src/app/services/ubicacion-cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  token = {
    token: localStorage.getItem('token')
  }

  usuario!: any[];

  ubicacion = {
    token:localStorage.getItem('token'),
     departamento: '', 
     municipio: '', 
     zona: '', 
     direccion: '', 
     ubicacion: ''
  }


  user = { 
    token: localStorage.getItem('token'),
    nombre: '',
    apellido: '',
    telefono: '',
  }

  imagen!: File;

  ubicacionCliente!: any[];

  constructor(private authService: AuthService, private userService: UserService, private ubicacionClienteService:UbicacionClienteService, private router:Router) {}

  
  estado = false;

  ngOnInit() {
    this.userService.getUser(this.token).subscribe(
      (data) => {
        console.log(data);
        this.usuario = data;
        this.user.nombre = this.usuario[0].NOMBRE;
        this.user.apellido = this.usuario[0].APELLIDO;
        this.user.telefono = this.usuario[0].TELEFONO;

      },
      (error) => {
        console.error('Error al obtener el usuario', error);
      }
    );

      this.ubicacionClienteService.getUbicacionCliente(this.token).subscribe(
      (data) => {

       
        console.log(data);
        this.ubicacionCliente = data;
        this.ubicacion.departamento = this.ubicacionCliente[0].DEPARTAMENTO;
        this.ubicacion.direccion = this.ubicacionCliente[0].DIRECCION;
        this.ubicacion.municipio = this.ubicacionCliente[0].MUNICIPIO;
        this.ubicacion.zona = this.ubicacionCliente[0].ZONA;
        this.ubicacion.ubicacion = this.ubicacionCliente[0].UBICACION;

        if(data.length > 0){
          this.estado = true;
          console.log(this.estado);
        }


      
      },
      (error) => {
        console.error('Error al obtener el usuario', error);
      }
    );




  }



  

  createUbicacion() {
    this.ubicacionClienteService.createUbicacionCliente(this.ubicacion).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
      },
      (error) => {
        console.error('Error al obtener el usuario', error);
      }
    );
  }


  updateUbicacion() {
    this.ubicacionClienteService.updateUbicacionCliente(this.ubicacion).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
      },
      (error) => {
        console.error('Error al obtener el usuario', error);
      }
    );
  }

  updateUsuario() {
    this.userService.updateUser(this.user).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
      },
      (error) => {
        console.error('Error al obtener el usuario', error);
      }
    );

  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.userService.subirImagen(localStorage.getItem('token'), file).subscribe(
        (response) => {
          console.log('Imagen subida y ruta guardada en la base de datos:', response);

          this.ngOnInit();

        },
        (error) => {
          console.error('Error al subir la imagen:', error);
        }
      );
    }
  }



}
