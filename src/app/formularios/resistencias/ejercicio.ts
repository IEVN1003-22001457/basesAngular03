export class Ejercicio{

    homsnormal:number = 0;
    maximo:number = 0;
    minimo:number = 0;


    calculo(banda1:string, banda2:string, banda3:string, tolerancia:string): void{

        this.minimo=(((parseFloat(banda1)*10+parseFloat(banda2)) * parseFloat(banda3)) * (1.00 - parseFloat(tolerancia)));
        this.homsnormal=(((parseFloat(banda1)*10+parseFloat(banda2)) * parseFloat(banda3)));
        this.maximo=(((parseFloat(banda1)*10+parseFloat(banda2)) * parseFloat(banda3)) * (1.00 + parseFloat(tolerancia)));
    }


}

