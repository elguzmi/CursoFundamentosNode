// requrir modulo dentro de Node
const fs = require('fs') // viene instalado en el core de Node

//console.log(fs);

// leer un archivo
//trabjar de forma ascincrona para que no se tranque el proceso

function leer(ruta , cb){
    fs.readFile(ruta, (err , data)=>{
        // leido
        //console.log(data); // devuelve un buffer
        //console.log(data.toString());
        cb(data.toString())
    })
}

function escribir(ruta , contenido , cb){
    fs.writeFile(ruta, contenido ,(err)=>{
        if(err){
            console.log('No he podido escribirll' , err);
            cb('No he podido escribirll' , err);
        }else {
            cb('Se ha escrito correctamente')
        }
    })
}

function borrar(ruta , cb) {
    fs.unlink(ruta,cb)
}

// leer(__dirname + '/archivo.txt',console.log)


//escribir(__dirname + '/archivo.txt', 'Hola esto es nuevo',console.log)


borrar(__dirname + '/archivo.txt', console.log);

//fs.closeSync()