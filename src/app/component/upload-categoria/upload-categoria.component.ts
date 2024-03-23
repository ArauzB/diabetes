import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-categoria',
  templateUrl: './upload-categoria.component.html',
  styleUrls: ['./upload-categoria.component.css']
})
export class UploadCategoriaComponent implements OnInit {

  category: any = {
    nombre: '',
    descripcion: ''
  };








  constructor(private categoriasService: CategoriasService, private router: Router) { }

  ngOnInit(): void {


  }

  createCategoria() {
    this.categoriasService.createCategoria(this.category).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => console.log(err)
    )
  }



}
