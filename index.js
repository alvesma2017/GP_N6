//exemplo de assincronicidade
function enviarEmail(corpo, para){
    //para criar simulações de timeout
setTimeout(() => {
    console.log(`
    Para: ${para}
    -----------------------
    ${corpo}
    -----------------------
    De: Marcelo Alves
    `)

},8000)
}
console.log("inicio do envio")
enviarEmail("Oi, seja bem vindo", "bethe@gmail.com")
console.log("email enviado com sucesso!")