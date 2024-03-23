import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdenTrackingService {
  // Simulamos una lista de pedidos con diferentes estados
  orders = [
    { id: 1, status: 'En proceso' },
    { id: 2, status: 'En ruta' },
    { id: 3, status: 'Entregado' }
    // ...otros pedidos...
  ];

  // Obtiene la lista de pedidos
  getOrders() {
    return this.orders;
  }
}
