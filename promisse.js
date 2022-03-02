function enviarEmail (corpo, para){
    return new Promise((resolve,reject) =>{

        setTimeout(() => {
            
            var deuErro = true
            if(!deuErro){
                resolve() //promessa ok
                
            }else{
                reject() //promessa falhou
                
            }

        
        },4000)
    })
}
enviarEmail("ola Mundo","marcelo@teste.com").then(()=>{
    console.log("email enviado")
}).catch(()=> {
    console.log("email falhou")
})