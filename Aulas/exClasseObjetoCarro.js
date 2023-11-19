class Carro {
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, gastoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    calcularGastoDePercusso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoPorKm * precoCombustivel;
    }
}

const uno = new Carro("Fiat", "Prata", 1 / 12);
const palio = new Carro("Fiat", "Preto", 1/10);

console.log(uno.calcularGastoDePercusso(70, 5));
console.log(palio.calcularGastoDePercusso(70, 5));