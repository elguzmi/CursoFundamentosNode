// funciones son elemtnos de primer nivel, pasar de parametro una funcion

function hola(nombre,callback) {
    //console.log('Hola soy una funcion asincrona')
    setTimeout(() => {
        console.log('Hola '+ nombre)
        callback(nombre);
    }, 1000);
}

function hablar(callbackhablar) {
    setTimeout(()=>{
        console.log('Bla Bla Bla...');
        callbackhablar()
    },1000)
}

function adios(nombre , callback) {
    setTimeout(()=>{
        console.log('Adios '+nombre)      
        callback()  
    },1000)
}


// funcion recursiva
function conversacion(nombre, veces, callback) {
    if(veces >= 0){
        hablar(function () {
            // veces -1
            conversacion('Santiago', --veces, callback );
        })
    }else{
        adios(nombre,callback);
    }
}

// INICIA EL PROCESO
// callback HELL
console.log('inicia proceso')
hola('SAANTI',function(nombre){
    conversacion(nombre,4, function () {
        console.log('termina proceso')
    })
})

// hola('Santiago',function(nombre){
//     hablar(function(){
//         hablar(function(){
//             adios(nombre,function() {
//                 console.log('Termina proceso')
//             })
//         })
//     })
// });