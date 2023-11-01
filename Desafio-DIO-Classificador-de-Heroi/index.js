let nome = "MrRobot"
let xp = 1
while(xp < 11000){
    if(xp <= 1000){
        console.log("O herói de nome " + nome + " está no nível de Ferro")
    }else if(xp > 1000 & xp <= 2000){
        console.log("O herói de nome " + nome + " está no nível de Bronze")        
    }else if(xp > 2000 & xp <= 5000){
        console.log("O herói de nome " + nome + " está no nível de Prata")
    }else if(xp > 5000 & xp <= 7000){
        console.log("O herói de nome " + nome + " está no nível de Ouro")
    }else if(xp > 7000 & xp <= 8000){
        console.log("O herói de nome " + nome + " está no nível de Platina")
    }else if(xp > 8000 & xp <= 9000){
        console.log("O herói de nome " + nome + " está no nível de Ascendente")
    }else if(xp > 9000 & xp <= 10000){
        console.log("O herói de nome " + nome + " está no nível de Imortal")
    }else{
        console.log("O herói de nome " + nome + " está no nível de Radiante")
    }
    xp += 1000
}
