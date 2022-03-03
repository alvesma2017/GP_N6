class Filme{

constructor(){

    this.titulo = ""
    this.ano = 0
    this.genero = ""
    this.diretor = ""
    this.atores = []
    this.duracao = 0

    }

    Reproduzir(){
        console.log("REPRODUZINDO")
    }
    Pausar(){
        console.log("PAUSADO")
    }
}
var hulck = new Filme()
hulck.Reproduzir()
hulck.titulo = "Hulck a Vingança"
console.log(hulck.titulo)
