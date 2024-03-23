import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-upload-producto',
  templateUrl: './upload-producto.component.html',
  styleUrls: ['./upload-producto.component.css']
})
export class UploadProductoComponent implements OnInit {

  producto: any = {
    nombre: '',
    descripcion: '',
    cantidad: '',
    precio: '',
    id_categoria: ''
  };


  constructor(private productosService: ProductosService, private router: Router) { }

  ngOnInit(): void {
  }

  createProducto() {
    this.productosService.createProducto(this.producto).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => console.log(err)
    )
  }

  



}
