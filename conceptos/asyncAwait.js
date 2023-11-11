

//funciones asincronas
function hola(nombre) {
    return new Promise(function (resolve , rejected){
        setTimeout(() => {
            console.log('Hola '+ nombre)
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre) {
    return new Promise((resolve ,rejected)=>{
        setTimeout(()=>{
            console.log('Bla Bla Bla...');
            rejected(nombre)
        },1000)
    })
}

function adios(nombre) {
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            console.log('Adios '+nombre)      
            resolve()  
        },1000)
    })
}

async function main(){
    let nombre = await hola('santiago ')
    await hablar(nombre);
}
console.log('Hola')
main()
console.log('Chao proceso')
