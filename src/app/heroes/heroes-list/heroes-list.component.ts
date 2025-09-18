import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html'
})
export class HeroesListComponent {

  imageWidth: number = 60;
  imageMargin: number = 2;
  muestraImage: boolean = true;
  listFilter: string = '';

  showImage(): void {
    this.muestraImage = !this.muestraImage;
  }


    heroes:any[]=[
      {
        imagen:"https://dragonball-api.com/characters/goku_normal.webp",
        nombre:"Goku",
        description:"Kame Hame Ha",
        race:"Saiyan",
        ki:60000000
      },
      {
        imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
        nombre:"Vegeta",
        description:"Final Flash",
        race:"Saiyan",
        ki:54000000
      },
      {
        imagen:"https://dragonball-api.com/characters/picolo_normal.webp",
        nombre:"Piccolo",
        description:"Makankosapo",
        race:"Namekian",
        ki:2000000
      },
      {
        imagen:"https://dragonball-api.com/characters/bulma.webp",
        nombre:"Bulma",
        description:"N/A",
        race:"Human",
        ki:0
      },

    ]
}


