import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-categoria-imagen',
  templateUrl: './upload-categoria-imagen.component.html',
  styleUrls: ['./upload-categoria-imagen.component.css']
})
export class UploadCategoriaImagenComponent implements OnInit {

  id: any ;

  imagen!: File;
  
  constructor(private userService: CategoriasService, private router: Router) { }

  ngOnInit(): void {
  }


 
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.userService.subirImagen(this.id, file).subscribe(
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
