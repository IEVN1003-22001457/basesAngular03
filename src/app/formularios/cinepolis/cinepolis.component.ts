import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html'
})
export class CinepolisComponent {
  nombre: string = '';
  compradores: string = '';
  boletas: string = '';
  resultado: string = '';
  cineco: string = "0";

  bposibles: string = "";

  Calcular(): void {
    let ncompradores = parseInt(this.compradores);
    let nboletas = parseInt(this.boletas);
    let descuentoCineco = 0.00;
    let bposibles = 0;

    bposibles = ncompradores * 7;
    this.bposibles = "Cantidad máximas de boletas a comprar: " + bposibles.toString();





    if (nboletas > 5) {
      descuentoCineco += 0.15;
    }else {
      if (nboletas > 2) {
        descuentoCineco += 0.10;
      }
    }


    if (nboletas > bposibles) {
      this.resultado = "No se pueden vender más boletas";
    }else{
      if (parseInt(this.cineco) === 1) {
        this.resultado = "El total a pagar es: $" + (nboletas * 12 * (1.00 - descuentoCineco) * .9).toString();
      }else{
        this.resultado = "El total a pagar es: $" + (nboletas * 12 * (1.00 - descuentoCineco)).toString();
      }

    }


  }
}
