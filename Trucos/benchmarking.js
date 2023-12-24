console.time('todo')

let suma = 0 ;
console.time('bucle');

for (let i = 0; i < 1000000000; i++) {
    suma += 1;
}

console.log(suma)
console.timeEnd('bucle')



function asincrona(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('termina el proceso asincrono')
            res()
        })
    })
}


let suma2 = 0 ;
console.time('bucle2');

for (let j = 0; j < 100000000; j++) {
    suma2 += 1;
}

console.time('asincrono');
asincrona()
    .then(()=>{
        console.timeEnd('asincrono')
    })

console.log(suma)
console.timeEnd('bucle2')


console.timeEnd('todo')