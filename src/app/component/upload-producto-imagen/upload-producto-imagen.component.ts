import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-producto-imagen',
  templateUrl: './upload-producto-imagen.component.html',
  styleUrls: ['./upload-producto-imagen.component.css']
})
export class UploadProductoImagenComponent implements OnInit {

  id: any ;

  imagen!: File;

  constructor(private productosService: ProductosService, private router: Router) { }

  ngOnInit(): void {
  }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.productosService.subirImagen(this.id, file).subscribe(
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
