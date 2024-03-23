import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  orders = [
    { id: 1, userId: 'user123', status: 'Finalizado', date: new Date('2023-08-15') },
    { id: 2, userId: 'user123', status: 'Finalizado', date: new Date('2023-08-10') },
    { id: 3, userId: 'user456', status: 'Finalizado', date: new Date('2023-08-12') }
    // ...otros pedidos...
  ];

  getCompletedOrders(userId: string) {
    return this.orders.filter(order => order.userId === userId && order.status === 'Finalizado');
  }
}
