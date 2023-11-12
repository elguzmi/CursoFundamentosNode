


// Este evento se dispara cuando una excepción se propaga hasta la parte superior del ciclo de eventos y no se ha manejado en ningún lugar.
process.on('uncaughtException',(err ,origen)=>{
    // captura fallas a nivel del hilo general que no tienen catch
    console.log('El proceso fallo sew no sha olvidado capturar un errr'  , err.message)
})

process.on('uncaughtExceptionMonitor',(err ,origen)=>{
    
    console.log( err.message ,origen)
})

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  
    // Puedes realizar acciones adicionales aquí, como cerrar conexiones o liberar recursos.
  });

process.on('beforeExit',()=>{
    console.log('El proceso va a terminar')
  
})

process.on('exit',()=>{
    // todo lo que pase aqui en adelante tiene que ser sincrono y se va a ejecutar en el hilo principal
    console.log('El proceso acabo')
    setTimeout(()=>{
        console.log('No se va a ejecutar porque se ejecuta en otro hilo ')
    },0)
})

const promise = new Promise((resolve, reject) => {
    reject(new Error('Esta es una promesa rechazada'));
  });


// setTimeout(()=>{
//     let a = z + 100 
// },2000)
// console.log(process.env)