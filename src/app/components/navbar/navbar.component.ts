import { Component,OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { BuscarComponent } from '../buscar/buscar.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  dataList: any[];
  busqueda: string;
  resultados: any[];
  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.dataList = this.dataService.getData();
}
  buscar() {
    this.resultados = this.dataList.filter(data => 
      data.cedula.includes(this.busqueda) ||
      data.nombre.includes(this.busqueda) ||
      data.direccion.includes(this.busqueda) ||
      data.telefono.includes(this.busqueda) ||
      data.fechaNacimiento.includes(this.busqueda)
      );
}
}
