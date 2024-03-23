import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { RestaurantesService } from 'src/app/services/restaurantes.service';
import { CarritoService } from 'src/app/services/carrito.service';
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


  constructor(private productosService:ProductosService, private router:Router, private categoriasService:CategoriasService,private restaurantesService:RestaurantesService, private carritoService:CarritoService) { }

  ngOnInit(): void {

   

    this.productosService.getProductos().subscribe(
      (data) => {
     
        this.productos = data.slice(0, 4);
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );

    this.categoriasService.getCategorias().subscribe(
      (data) => {
        this.categorias = data.slice(0, 4);
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );

    this.restaurantesService.getRestaurantes().subscribe(
      (data) => {
        this.restaurantes = data.slice(0, 4);
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );

  }


  navigateToCategoria(id: any) {
    this.router.navigate(['/categoria', id]);
  }


  createCarrito(idProducto: string, precio: number) {
    this.carrito.id_producto = idProducto; // Asigna el ID del producto al carrito
    this.carrito.precio = precio; // Asigna el precio del producto al carrito
    this.carritoService.agregarAlCarrito(this.carrito).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/carrito']);
      },
      (error) => {
        console.error('Error al crear el carrito', error);
      }
    );
  }

}
