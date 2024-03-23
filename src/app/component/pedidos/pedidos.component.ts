import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TrackingService } from 'src/app/services/tracking.service';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  completedOrders!: any[];

  token = {
    token: localStorage.getItem('token')
  }

  constructor(private authService: AuthService, private trackingService:TrackingService) {}

  ngOnInit(): void {

    this.trackingService.getOrdenes(this.token).subscribe(
      (data) => {
        this.completedOrders = data;
        console.log(this.completedOrders);
      },
      (error) => {
        console.error('Error al obtener las ordenes', error);
      }
    );
   
  }

}
