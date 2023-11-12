console.log('Hola esot es algo')  // ver algo en consol

console.info('Buenas Tardes');

console.error('Error')

console.warn('Prevencion');


console.log('Conversacion --------------');

console.group('conver')

console.log('Holi')  // entra con un nivel de indentacion
console.table('Buenas3dd2qdw  ')

console.groupEnd('conver')

console.count('veces')  // peude  contar cuantas veces por ejemplo apsa un bucle o una funcion 
function function1(){
    
    console.group('funcion1')
    console.log('Estamos en la funcion 1')
    console.count('veces')
    console.count('veces')
    function2();
    console.groupEnd('funcion1');
}

function function2(){
    console.log('Estamos en la funcion 2')
}

console.log('Empazamos')
function1()