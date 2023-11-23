const {gets, print} = require('./funcoes-auxiliares');

let maiorValor = 0;

for (let i = 0; i < 5; i++) {
    const sorteioNumero = gets();
    if (sorteioNumero > maiorValor) {
        maiorValor = sorteioNumero;
    }      
}

print(maiorValor)