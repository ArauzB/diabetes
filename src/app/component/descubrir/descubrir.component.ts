import { Component, OnInit } from '@angular/core';
import { RecomendacionService } from 'src/app/services/recomendacion.service';

@Component({
  selector: 'app-descubrir',
  templateUrl: './descubrir.component.html',
  styleUrls: ['./descubrir.component.css']
})
export class DescubrirComponent implements OnInit {

  recomendaciones: string[] = [];
  constructor(private recomendacionService: RecomendacionService) { }

  ngOnInit(): void {

    const userId = 'user123';
    this.recomendaciones = this.recomendacionService.getRecommendedProducts(userId);
  }

}
