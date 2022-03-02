function enviarEmail (corpo, para){
    return new Promise((resolve,reject) =>{

        setTimeout(() => {
            
            var deuErro = true
            if(!deuErro){
                resolve({to: "marcelo",time: "5s"}) //promessa ok
                
            }else{
                reject("fila cheia") //promessa falhou
                
            }

        
        },4000)
    })
}
enviarEmail("ola Mundo","marcelo@teste.com").then((dados)=>{
    console.log(dados.to, dados.time)
}).catch((erro)=> {
    console.log(erro, "email falhou")
})