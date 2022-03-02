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
    callback("ok",5,"8seg.")
},8000)
}
console.log("inicio do envio")
enviarEmail("Oi, seja bem vindo", "bethe@gmail.com", (status, amount, time) =>{
    console.log(`
    Status: ${status}
    ------
    Qtd: ${amount} 
    ------
    Tempo: ${time}   
    `)
    console.log("email enviado com sucesso!")
})
