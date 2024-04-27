import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-medicamento',
  templateUrl: './ver-medicamento.component.html',
  styleUrls: ['./ver-medicamento.component.css']
})
export class VerMedicamentoComponent implements OnInit {

  id!: number;
  medicamento!: any[];
  mensaje!: string;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtener el parámetro 'id_expediente' de la URL usando ActivatedRoute
    this.route.queryParams.subscribe(params => {
      this.id = params['id_expediente'];
    });
    this.mensaje = '';

    this.obtenerMedicamentoPorId();
  }

  obtenerMedicamentoPorId(): void {
    this.http.post<any>('http://100.68.51.19:3000/cargoMedicamento/obtenerMedicamentoPorId', { id: this.id }).subscribe(
      response => {
        if (response && response.medicamento) {
          this.medicamento = response.medicamento;
          console.log(this.medicamento);
          this.mensaje = response.message;
        } else {
          this.mensaje = response.message;
        }
      },
      error => {
        console.error(error);
        this.mensaje = "Error o no se encontraron datos";
      }
    );
  }


}
