import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantesService } from 'src/app/services/restaurantes.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {
  
  restaurantes!: any[];

  constructor(private restaurantesService:RestaurantesService, private router:Router) { }

  ngOnInit(): void {
    this.restaurantesService.getRestaurantes().subscribe(
      (data) => {
        this.restaurantes = data;
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );
  }

}
