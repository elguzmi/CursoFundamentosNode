const { app , BrowserWindow } = require('electron');
let mainWindow ;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            
        }
    })
    mainWindow.loadFile('index.html')
}

// app ya empieza un proceso con la aplicacion
// toca esperar a que app se pong a dispocion
// cuando ya este listo app
app.on('ready',createWindow);