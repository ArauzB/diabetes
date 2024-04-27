import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  id = {
    id: localStorage.getItem('id')
  };

  usuario: any; // Cambiamos a tipo 'any' para un solo usuario

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.getUser(this.id).subscribe(
      (data: any) => {
        console.log(data);
        if (data) {
          this.usuario = data;
        }
      },
      (error) => {
        console.error('Error al obtener el usuario', error);
      }
    );
  }

}
