// son globables, modulos globales que vienesd predefinidos sin instalar y simepre los tenemos disponibles
// modulos del Core

// Los modulos globales son módulos del core.
// Una de las funciones muy usadas en Node es setInterval, clearInterval, para evaluar en n tiempo si el servidor está caído o no.

console.log(globalThis)  // objeto global
//console.log(process)  // objeto de entrono del proceso
console.log(__dirname)  
console.log(__filename)  

let  i = 0;
let intervalo = setInterval(()=>{
    if(i === 3){
        clearInterval(intervalo)
    }
    i++;
    console.log('Hola')
},2000)



setImmediate(()=>{
    console.log('buenas')
})