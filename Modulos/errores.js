
function otraFuncion() {
    seRompe()
}

function seRompe() {
    return 3 + z
}

function seRompeAsincrona(cb){
    // funcion llama un time out que ejecuta una funcion asyncrona
    // lo esta ejecutando en otro Hilo porque pasa a otro hilo
    setTimeout(() => {
        try{
            return 3 + z
            cb('OK')
        }catch(err){
            console.error('Erro en la funcion asincrona')
            cb('Error -  en la funcion asincrona')
        }
    }, 2000);
}

// un error en node rompe la ejecucion del codigo
// bloque try catch para recoger errores
try{
    //otraFuncion();
    seRompeAsincrona((res)=>{
        console.log(res)
    })
}catch(err){
    console.error('aLGO SE ROMPIO' , err)
}


console.log('Esto esta al final')
