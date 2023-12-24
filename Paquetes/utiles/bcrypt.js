const bcrypt  = require('bcrypt');

const password = '12345Segura!';

// cirfra contraseña

bcrypt.hash(password, 5 ,  async (err, hash)=>{
    console.log(hash);

    let data = await bcrypt.compare(password, hash);  // compara las contrasenas y devuelve true si si genera un hash cone sa lcave
    console.log(data)
})
