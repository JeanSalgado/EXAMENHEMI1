import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent {
 
  dataList: any[];

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.dataList = this.dataService.getData();
  }
}
