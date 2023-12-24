// Para maneja imagenes
const sharp = require('sharp');

sharp('Factura_Prodatem.jpg')
    .resize(80)
    .blur(1)
    .rotate(90)
    .toFile('rezise.jpg')