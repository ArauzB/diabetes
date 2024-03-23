import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecomendacionService {
  getRecommendedProducts(userId: string): string[] {
    // Aquí podrías implementar algoritmos de recomendación basados en el historial de compras o preferencias del usuario
    // Por ahora, simplemente devuelve una lista de productos de ejemplo
    return ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];
  }
}
