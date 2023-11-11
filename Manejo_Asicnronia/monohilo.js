//ejecuta lee el archivo - convierte en lenguaje maquina y prepara todo
// asincrono
console.log('Hola Mundo');

let i = 0;
setInterval(()=>{
    console.log(i)
    i++;
    if(i === 5 ){
        console.log('Forzamos error')  // para por completo el proceso
        var a = 3 + z;
    }
    //console.log('Sigo Activo');
},1000)


console.log('segunda instruccion')

// Desarrollo Nodemon. Demons en linux, puedes tener procesos que ves ejecutandose nodemon + archivo al que quiero acceder detecta cambios, y ejecuta automaticamente el código.

// sudo npm install -g nodemon

// Nodemon
// Producción

// sudo npm install -g pm2

// PM2 Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicación 24/7.


// pm2 status
// pm2 log
// pm2 monitor


// Voy a poner monitorizar el código para saber si algo se rompe.
// Me permite ver dashboards de mi código, puedo ver que está corriendo.
// Puedo ver el rendimiento de mi cpu 
// Con: pm2 stop + id ---> me detiene el proceso que está en ejecución con ese ID.