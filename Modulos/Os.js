const os = require('os')

// modulo del sistema operativo nos permite acceder a cosas de bajo nivel 

console.log(os.arch());  // arquitectura
console.log(os.platform());  // Platafroma    // windows win 32 , android
console.log(os.cpus().length);  // CPU nucleos  


console.log(os.constants)  // errores y señales del sistema


console.log(os.freemem())  // errores y señales del sistema
const size = 1024;
console.log(kb(os.freemem()))
console.log(mb(os.freemem()))
console.log(gb(os.freemem()))

console.log(gb(os.totalmem()))

console.log(os.homedir())  ///directorio raiz
console.log(os.tmpdir())

console.log(os.hostname())

console.log(os.networkInterfaces())  // interfaces de red


function kb(bytes){return bytes /size}
function mb(bytes) {return kb(bytes) / size  }
function gb(bytes) {return mb(bytes) / size  }