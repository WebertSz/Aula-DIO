let fruta = "banana"
switch (fruta){
    case "laranja":
        console.log("suco" + fruta)
    case "banana":
        console.log("vitamina" + fruta)
    default:
        console.log("Não é possível fazer suco nem vitamina.")
}
let pontosVida = 1
for (i = 0; i <= 10; i++){
    console.log(pontosVida += 1 )
}
console.log("Pontos de Vida = " + pontosVida)
let cont = 0
while(cont < 3){
    console.log("olá")
    cont++
}
let contador = 0
do {
    console.log("Oi")
    contador++
} while (contador < 3)