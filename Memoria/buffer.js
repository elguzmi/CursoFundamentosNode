//Un buffer es un espacio de memoria (en la memoria ram), en el que se almacenan datos de manera temporal.
//Es la forma mas cruda en la que se pueden almacenar los datos. (Se guardan en bytes y no se especifica el tipo de dato)

//let buffer =  Buffer.alloc(4);  // Nos guarde un espacio o 4 espacios vacios

//let buffer =  Buffer.from([1,2,5]);  

// los buffer de la consola estan en formato hexadecimal
let buffer =  Buffer.from('Hola');  // info que voy guardando en cada espacio de nuestro buffer

console.log(buffer)
console.log(buffer.toJSON())


let abc = Buffer.alloc(26); // 26 espacios vacios
console.log(abc)

for (let i = 0 ; i <26 ; i++){
    abc[i] =  i + 97
}
console.log(abc.toString())