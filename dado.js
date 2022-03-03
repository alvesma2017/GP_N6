class Dado {
constructor(faces){
    this.faces = faces
}
Rolar(){
    console.log("Resultado do Dados: " + this.GetRandomIntInclusive(1,this.faces))

}

GetRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min +1)) +min
    }

}
var d6 = new Dado(6)
var d20 = new Dado(20)

d6.Rolar()
d20.Rolar()