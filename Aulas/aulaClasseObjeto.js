class formaBolo{
    constructor(saborMassa, saborRecheio){
        this.saborMassa = saborMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborMassa} com recheio de ${this.saborRecheio}`)
    }
}

let boloFesta = new formaBolo("chocolate", "nutella")
let boloPremium = new formaBolo("baunilha", "coco")

boloFesta.escrever()
boloPremium.escrever()