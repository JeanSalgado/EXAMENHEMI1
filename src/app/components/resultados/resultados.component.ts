import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  resultados: any[];

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.resultados = this.dataService.getResultados();
  }
}
