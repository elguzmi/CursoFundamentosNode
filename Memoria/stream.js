const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');  //entrada de datos
readableStream.setEncoding('UTF8')
readableStream.on('data', (chunk)=>{
    //console.log(chunk.toString())
    data+= chunk;
})// va leyendo la data , si es un archivo muy grande lo va leyendo poco a poco


// este envento significa que ya termino de leerlo
readableStream.on('end',()=>{
    console.log(data);
})

// process.stdout.write('Hola')
// process.stdout.write('que')
// process.stdout.write('tal')
// process.stdout.write('como')
// process.stdout.write('vas')

const tranform = stream.Transform;

function Mayus() {
    tranform.call(this)
}
util.inherits(Mayus, tranform);

Mayus.prototype._transform = function (chunk, codif, cb) {
    chunkMayus = chunk.toString().tuUpperCase();
    this.push(chunkMayus)
    cb()
}

let mayus = new Mayus();
readableStream
    .pipe(mayus)
    .pipe(process.stdout)
// fs.readFile(__dirname+'/input.txt',(err,data)=>{
//     console.log(data);
// });