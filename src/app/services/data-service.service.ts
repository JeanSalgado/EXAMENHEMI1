import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private data: any[] = [
    {
      //1
      codigoregistro:"1",
      fecha:"04/05/2003",
      cliente:"Wilson Gonzalez",
      tipodeinteraccion:"FACEBOOL",
      descripcion:"PUBLICIDAD"
      },
      //2
      {
        codigoregistro:"2",
        fecha:"25/06/2003",
        cliente:"Jordy Gorotiza",
        tipodeinteraccion:"INSTAGRAM",
        descripcion:"PUBLICIDAD"
        },
        //3
        {
        codigoregistro:"3",
        fecha:"3/2/2000",
        cliente:"Jaime Salgado",
        tipodeinteraccion:"INSTAGRAM",
        descripcion:"PUBLICIDAD"
        },
         //4
         {
          codigoregistro:"4",
          fecha:"7/2/2000",
          cliente:"Guillermo Bravo",
          tipodeinteraccion:"Telefono Fijo",
          descripcion:"PUBLICIDAD"
         },
          //5
        {
          codigoregistro:"5",
          fecha:"10/5/2000",
          cliente:"Pilar Pacheco",
          tipodeinteraccion:"Instagram",
          descripcion:"PUBLICIDAD"
         },
         //6
         {
          codigoregistro:"6",
          fecha:"25/3/2000",
          cliente:"Martha Masache",
          tipodeinteraccion:"Instagram",
          descripcion:"PUBLICIDAD"
         },
         //7
         {
          codigoregistro:"7",
          fecha:"5/11/2000",
          cliente:"Elizabet Morocho",
          tipodeinteraccion:"Instagram",
          descripcion:"PUBLICIDAD"
         },
         //8
         {
          codigoregistro:"8",
          fecha:"17/12/2000",
          cliente:"Xiomara Montalvo",
          tipodeinteraccion:"Instagram",
          descripcion:"PUBLICIDAD"
         },
         //9
         {
          codigoregistro:"9",
          fecha:"23/11/2000",
          cliente:"Wendy Caceres",
          tipodeinteraccion:"Instagram",
          descripcion:"PUBLICIDAD"
         },
         //10
         {
          codigoregistro:"10",
          fecha:"23/11/2000",
          cliente:"Katalina Ruiz",
          tipodeinteraccion:"Instagram",
          descripcion:"PUBLICIDAD"
         }
  ];
  private resultados: any[] = [];

  addData(data) {
    this.data.push(data);
  }

  getData() {
    return this.data;
  }

  setResultados(resultados) {
    this.resultados = resultados;
  }

  getResultados() {
    return this.resultados;
  }


  constructor() { }
}
  export interface ListaDatos{
    codigoregistro:string;
    fecha: string;
    cliente:string;
    tipodeinteraccion:string;
    descripcion:string;
  }

