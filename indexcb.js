//exemplo de assincronicidade
function enviarEmail(corpo, para, callback){
    //para criar simulações de timeout
setTimeout(() => {
    console.log(`
    Para: ${para}
    -----------------------
    ${corpo}
    -----------------------
    De: Marcelo Alves
    `)
    callback()
},8000)
}
console.log("inicio do envio")
enviarEmail("Oi, seja bem vindo", "bethe@gmail.com", () =>{
    console.log("isso é um callback")
    console.log("email enviado com sucesso!")
})
