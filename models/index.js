const connection = require("../DB/Conexion");


class ConexionBaseDatos {
    probandoMudules() {
        console.log(connection);
    }
    
}



module.exports= new ConexionBaseDatos();