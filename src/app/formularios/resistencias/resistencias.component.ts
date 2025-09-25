import { Component } from '@angular/core';
import { Ejercicio } from './ejercicio';

@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent {
  banda1: string = '0';
  banda2: string = '0';
  banda3: string = '1';

  tolerancia: string = '0.05';

  minimo:number=0;
  homsnormal:number=0;
  maximo:number=0;

  valores=[
    {
      num:'0',num2:'1',color:"negro"
    },
    {
      num:'1',num2:'10',color:"cafe"
    },
    {
      num:'2',num2:'100',color:"rojo"
    },
    {
      num:'3',num2:'1000',color:"naranja"
    },
    {
      num:'4',num2:'10000',color:"amarillo"
    },
    {
      num:'5',num2:'100000',color:"verde"
    },
    {
      num:'6',num2:'1000000',color:"azul"
    },
    {
      num:'7',num2:'10000000',color:"morado"
    },
    {
      num:'8',num2:'100000000',color:"gris"
    },
    {
      num:'9',num2:'1000000000',color:"blanco"
    },
  ]

  Calcular(): void {
    let ejercicio:Ejercicio;
    ejercicio = new Ejercicio(this.banda1, this.banda2, this.banda3, this.tolerancia);
    this.minimo=ejercicio.imprimir().num1;
    this.homsnormal=ejercicio.imprimir().num2;
    this.maximo=ejercicio.imprimir().num3;

    /* this.minimo=(((parseFloat(this.banda1)*10+parseFloat(this.banda2)) * parseFloat(this.banda3)) * (1.00 - parseFloat(this.tolerancia)));
    this.homsnormal=(((parseFloat(this.banda1)*10+parseFloat(this.banda2)) * parseFloat(this.banda3)));
    this.maximo=(((parseFloat(this.banda1)*10+parseFloat(this.banda2)) * parseFloat(this.banda3)) * (1.00 + parseFloat(this.tolerancia))); */
  }
}
