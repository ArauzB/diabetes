import { Component, OnInit } from '@angular/core';
import { TrackingService } from 'src/app/services/tracking.service';

@Component({
  selector: 'app-upload-tracking',
  templateUrl: './upload-tracking.component.html',
  styleUrls: ['./upload-tracking.component.css']
})
export class UploadTrackingComponent implements OnInit {

  ordenes: any[] = [];

  estadoPedido = {
    id_pedido: 0,
    estado: ''
  }

  constructor(private trackingService: TrackingService) { }

  ngOnInit(): void {

    this.trackingService.getAllTracking().subscribe(
      (data) => {
        this.ordenes = data;
        console.log(this.ordenes);
      },
      (error) => {
        console.error('Error al obtener las ordenes', error);
      }
    );

  }

  public actualizarEstadoPedido(idPedido: number, estadoPedido: string) {
    // Llamar al servicio para enviar el estado del pedido y el ID a la API
    this.trackingService.updatePedidos({id_pedido: idPedido, estado_pedido: estadoPedido}).subscribe(
      (data) => {
        console.log(data);
        // Actualizar la vista
        this.ngOnInit();
        
      },
      (error) => {
        console.error('Error al actualizar el estado del pedido', error);
      }
    );
  }

}