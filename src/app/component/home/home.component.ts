import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos!: any[];
  categorias!: any[];
  restaurantes!: any[];

  carrito={
    id_producto: '',
    token: localStorage.getItem('token'),
    precio: 0,
  }


  constructor(private productosService:PacientesService, private router:Router) { }

  ngOnInit(): void {






  }


  navigateToCategoria(id: any) {
    this.router.navigate(['/categoria', id]);
  }



}
