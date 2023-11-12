// puede manejar procesos y no solo unicos del porpio node

const { exec  , spawn }  = require('child_process')  // iomporta objetos

// ls -la en bash


/*
Usa spawn cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado simples.
Usa spawn cuando quieras recibir datos desde que el proceso arranca.
Usa exec cuando solo quieras recibir datos al final de la ejecución.
*/

// ejecutar un comando del sistema
// exec('node Modulos/consola.js ',(err , stdout , sterr)=>{
//     if(err){
//         console.log(err);
//         return false
//     }
//     console.log(stdout)
// })


let processo = spawn('explorer' , [])
// console.log(processo)
console.log(processo.pid) ;
console.log(processo.connected) ;

processo.stdout.on('data', (dato)=>{
    console.log(dato.toString())
    console.log( processo.killed)
})

processo.on('exit',()=>{
    
    console.log('Ha termina')
    console.log( processo.killed)
})