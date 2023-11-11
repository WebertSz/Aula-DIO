class Heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = this.atacar(ataque)
    }    
    
    atacar(golpe){

        switch(this.tipo){
            case "Mago":
                console.log(`O ${this.tipo} atacou usando ${golpe}`)
                break
            case "Guerreiro":
                console.log(`O ${this.tipo} atacou usando ${golpe}`)
                break
        }
        
    }
}

let jogador = new Heroi("Trevor", 15, "Mago", "magia")
let rival = new Heroi("Conan", 16, "Guerreiro", "espada")
