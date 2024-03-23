import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos!: any[];

  carrito={
    id_producto: '',
    token: localStorage.getItem('token'),
    precio: 0,	
  }

  constructor(private productosService:ProductosService, private router:Router, private carritoService:CarritoService) { }

  ngOnInit(): void {
    this.productosService.getProductos().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );

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
