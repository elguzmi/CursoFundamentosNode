// Error First Callbacks
// Un patrón que se sigue siempre en cualquier lenguaje y programa de devs es Error First Callbacks, 
// esto quiere decir que siempre que tengamos un callback el primer parámetro debería ser el error.

function asincrona(callback) {
    setTimeout(function(){
        try{
            let a = 3 + z
            callback(null,a);
        }catch(e){
            callback(e);
        }
    },1000)
}



asincrona((err , data)=>{
    try {
        // si hay un error debemos parar totalmente laejecucion de la funcion
        if(err){
            // gestionar el error !!
            //console.error('Tenemos un error')
            //console.error(err);
            throw err
            //return false
        }
        console.log('Todo ok mi dato es', data);
    }catch(error){
        console.error('Tenemos un error')
            console.error(err);
    }
   
})
       
