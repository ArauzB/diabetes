import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias!: any[];

  constructor(private categoriasService:CategoriasService, private router:Router) { }

  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe(
      (data) => {
        this.categorias = data;
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );

  }

  navigateToCategoria(id: any) {
    this.router.navigate(['/categoria', id]);
  }

}
