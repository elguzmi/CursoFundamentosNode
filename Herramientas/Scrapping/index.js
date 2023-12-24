const puppeter = require('puppeteer');

// funcion anonima autoejecutable
(async()=>{
    //nuestro codigo
    console.log('Lanzando navegador')
    const browser = await puppeter.launch({headless : false});

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');
    console.log('Antes de evaluar')
    // evalueate va ajecutar un scrip dentro de la pagina y nos va a devolver algo
    let titulo1 = await page.evaluate(()=>{
        const h1 = document.querySelector('h1');
        //console.log(h1.innerHTML);
        return h1.innerHTML

    })
    console.log(titulo1)
     
    console.log('Cerramos navegador')
    browser.close();
    console.log('Navegador cerrado')
})()