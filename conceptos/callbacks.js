// funciones son elemtnos de primer nivel, pasar de parametro una funcion

function hola(nombre,callback) {
    //console.log('Hola soy una funcion asincrona')
    setTimeout(() => {
        console.log('Hola '+ nombre)
        callback();
    }, 1000);
}

console.log('inicia proceso')

function adios(nombre , callback) {
    setTimeout(()=>{
        console.log('Adios '+nombre)      
        callback()  
    },1000)
}

hola('Santiago',function(){
    adios('Santi',function() {
        console.log('Termina proceso')
    })
});

