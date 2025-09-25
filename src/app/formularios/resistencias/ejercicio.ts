export class Ejercicio{
    banda1:string;
    banda2:string;
    banda3:string;
    tolerancia:string;

    datos={
      num1:0,num2:0,num3:0
    }



    constructor(banda1:string, banda2:string, banda3:string, tolerancia:string){
        this.banda1 = banda1;
        this.banda2 = banda2;
        this.banda3 = banda3;
        this.tolerancia = tolerancia;
    }
    imprimir(){
        console.log(`Banda1: ${this.banda1}, Banda2: ${this.banda2}, Banda3: ${this.banda3}, Tolerancia: ${this.tolerancia},`);
        this.datos.num1=(((parseFloat(this.banda1)*10+parseFloat(this.banda2)) * parseFloat(this.banda3)) * (1.00 - parseFloat(this.tolerancia)));
        return this.datos;
    }
}

