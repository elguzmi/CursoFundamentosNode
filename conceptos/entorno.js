
// variable de entorno variable que estan afuera en el sistema

let saludo =  process.env.NOMBRE|| 'Sin Nombre';

let web = process.env.WEB || 'No tengo web'

console.log('Hola' , saludo);
console.log('mi web es' , web);

console.log('segunda instruccion')

// powershell   $env:NOMBRE="Carlos"
// bach NOMBRE=Carlos node .\conceptos\entorno.js

//  NOMBRE=Carlos WEB=loquesea.com  node conceptos/entorno.js

// demon en linux es un proceso corriendo y observando cambios

// pm2 permite obtener un seguimento del aplication de node , vuelve y reincia la app si falla