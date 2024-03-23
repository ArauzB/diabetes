import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  id_categoria!: number;
  products!: any[];

  carrito={
    id_producto: '',
    token: localStorage.getItem('token'),
    precio: 0,	
  }


  constructor(private route: ActivatedRoute, private categoriasService: CategoriasService,private router:Router, private carritoService:CarritoService ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id_categoria = +params['id']; // Obtiene la ID de la categoría de la URL

      // Llama al servicio con la ID de la categoría
      this.categoriasService.getCategoria(this.id_categoria).subscribe(
        (data) => {
          this.products = data;
          console.log(this.products);
        },
        (error) => {
          console.error('Error al obtener productos de la categoría', error);
        }
      );
    });
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
