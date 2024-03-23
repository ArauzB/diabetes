import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { UbicacionClienteService } from 'src/app/services/ubicacion-cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  token = {
    token: localStorage.getItem('token')
  }
  
  ubicacionCliente: any[] = [];
  carritoProductos: any[] = [];

  constructor(private carritoService: CarritoService, private router: Router, private ubicacionClienteService:UbicacionClienteService) { }

  ngOnInit(): void { 
    this.carritoService.getCarrito(this.token).subscribe(
      (data) => {
        this.carritoProductos = data;
      },
      (error) => {
        console.error('Error al obtener el carrito', error);
      }
    );


    
    this.ubicacionClienteService.getUbicacionCliente(this.token).subscribe(
      (data) => {
        console.log(data);
        this.ubicacionCliente = data;
      },
      (error) => {
        console.error('Error al obtener la ubicacion del cliente', error);
      }
    );

    
  }

  aumentarCantidad(index: number) {
    // Incrementa la cantidad del producto en el carrito
    this.carritoProductos[index].CANTIDAD++;
  }

  disminuirCantidad(index: number) {
    // Disminuye la cantidad del producto en el carrito
    if (this.carritoProductos[index].CANTIDAD > 1) {
      this.carritoProductos[index].CANTIDAD--;
    }
  }

  eliminarProducto(index: number, id: string) {
    // Elimina el producto del carrito
    this.carritoProductos.splice(index, 1);
    this.carritoService.eliminarDelCarrito(id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('Error al eliminar el producto del carrito', error);
      }
    );
  }

  calcularTotal(): number {
    // Calcular el total sumando el precio de cada producto multiplicado por su cantidad
    let subtotal = 0;
    let total = 0;
    for (const producto of this.carritoProductos) {
      subtotal += producto.PRECIO * producto.CANTIDAD;
      total = subtotal + 15;
    }
    return total;
    return total;
  }




  realizarCompra() {

    if(this.ubicacionCliente.length == 0){

      alert("Debe ingresar la ubicacion de entrega");
      
      this.router.navigate(['/perfil']);

    }
    else{

      const detallesPedido = this.carritoProductos.map((producto) => ({
      
        id_producto: producto.ID_PRODUCTO,
        cantidad: producto.CANTIDAD,
        precio: producto.PRECIO,
      }));
  
      console.log(detallesPedido);
  
      const pedido = {
        token: localStorage.getItem('token'),
        id_repartidor: 0,	
        total: this.calcularTotal(),
        detalles: detallesPedido,
      };
  
      this.carritoService.crearPedido(pedido).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/tracking']);
        },
        (error) => {
  
          console.error('Error al realizar la compra', error);
        }
      );
      
    }
  


  }
}
