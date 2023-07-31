import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent {
  codigoregistro: string;
  fecha: string;
  cliente: string;
  tipointeraccion: string;
  descripcion: string;

  constructor(private dataService: DataServiceService) {}

  guardar() {
    const data = {
      codigoregistro: this.codigoregistro,
      fecha: this.fecha,
      cliente: this.cliente,
      tipointeraccion: this.tipointeraccion,
      descripcion: this.descripcion
    };
    this.dataService.addData(data);
  }

  cancelar() {
    this.codigoregistro = '';
    this.fecha = '';
    this.cliente = '';
    this.tipointeraccion = '';
    this.descripcion= '';
}
}
