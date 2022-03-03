class FilmeConst{

constructor(titulo,ano,genero){

    this.titulo = titulo
    this.ano = ano
    this.genero = genero
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
var hulck = new FilmeConst("Hulk 2", 2010, "Ação")
hulck.Reproduzir()
console.log(hulck.titulo)
console.log(hulck.ano)
console.log(hulck.genero)

var batman = new FilmeConst("Batman 2", 2015, "Drama")
hulck.Reproduzir()
console.log(batman.titulo)
console.log(batman.ano)
console.log(batman.genero)
