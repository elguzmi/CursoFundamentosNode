
function hola(nombre) {
    return new Promise(function (resolve , rejected){
        setTimeout(() => {
            console.log('Hola '+ nombre)
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre) {
    return new Promise((resolve ,rejected)=>{
        setTimeout(()=>{
            console.log('Bla Bla Bla...');
            rejected(nombre)
        },1000)
    })
}

function adios(nombre) {
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            console.log('Adios '+nombre)      
            resolve()  
        },1000)
    })
}

//   --- Ejecucion

hola('carlos')
.then(hablar)
.then(adios)
.then((nombre)=>{
    console.log('Terminando el proceso')
}).catch(error=>{
    console.log('Ocurrio un error ' + error)
})

