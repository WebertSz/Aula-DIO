class Pessoa {
    nome;
    idade;
    altura;
    peso;

    constructor (nome, idade, altura, peso){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }

    escrever() {

        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e minha altua é ${this.altura}`);
    }

    calcularIMC(){
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC(){
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return "Abaixo do peso";
        }else if (imc >= 18.5 && imc < 25) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            return "Acima do peso";
        }else if (imc >= 30 && imc < 40) {
            return "Obeso";
        }else {
            return "Obesidade morbida";
        }
        
    }
};

function compararPessoa(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    }else
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
}

const mrRobot = new Pessoa("Mr. Robot", 20, 1.75, 70);
const goku = new Pessoa("Goku", 45, 1.85, 80);

mrRobot.escrever();
goku.escrever();
compararPessoa(mrRobot, goku);
console.log(`O IMC de ${mrRobot.nome} é ${mrRobot.calcularIMC()}, ${mrRobot.classificarIMC()}`);
console.log(`O IMC de ${goku.nome} é ${goku.calcularIMC()}, ${goku.classificarIMC()}`);