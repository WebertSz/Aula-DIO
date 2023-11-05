let nome = "Mr Robot"
let vitoria = 0
let = derrota = 0
let calc = 0
nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

function classificador(v, d){
    return v - d
}

function ranking(rank){
    if(rank <= 10){
        console.log(`O herói de nome ${nome} tem saldo de ${rank} e está no nível de ${nivel[0]}`)
    }else if(rank > 10 & rank <= 20){
        console.log(`O herói de nome ${nome} tem saldo de ${rank} e está no nível de ${nivel[1]}`)        
    }else if(rank > 20 & rank <= 50){
        console.log(`O herói de nome ${nome} tem saldo de ${rank} e está no nível de ${nivel[2]}`)
    }else if(rank > 50 & rank <= 80){
        console.log(`O herói de nome ${nome} tem saldo de ${rank} e está no nível de ${nivel[3]}`)
    }else if(rank > 80 & rank <= 90){
        console.log(`O herói de nome ${nome} tem saldo de ${rank} e está no nível de ${nivel[4]}`)
    }else if(rank > 90 & rank <= 100){
        console.log(`O herói de nome ${nome} tem saldo de ${rank} e está no nível de ${nivel[5]}`)        
    }else{
        console.log(`O herói de nome ${nome} tem saldo de ${rank} e está no nível de ${nivel[6]}`)
    }
}

while(calc < 110){
    vitoria += 15
    derrota += 5
    calc = classificador(vitoria, derrota);
    ranking(calc);
}
