const http = require('http');


// crear uns eservidor basico u escuchar en el puerto 3000
http.createServer(router).listen(3000);

function router (req, res){
    console.log('Nueva peticion')
    console.log(req.url);
    
    switch(req.url){
        case '/hola':
            res.write('Endpoint Hola');
            res.end();
            break;

        default:
            res.writeHead(404 , {'Content-type' : 'text/plain'}  )
            res.write('Error 404 : No se lo que quieres')
            res.end();  
    }

    // res.writeHead(201 , {'Content-type' : 'text/plain'} ) // pide codigo status 
    //         // Respuesta al usuario
    //         res.write('Hola Mundo desde Http Node js')
    //         res.end(); // cerrar la peticion 
}

console.log('Escuchando en le puerto 3000')
