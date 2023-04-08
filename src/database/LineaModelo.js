const DB = require("./db.json");
const { saveToDatabase } = require("./util");


const getAllLinMod = () => {
    return DB.LineaModelo;
}; 

const createNewLinMod = (newLinMod) => {
    const isAlreadyAdded = DB.LineaModelo.findIndex(LineaModelo => {LineaModelo.Descripcion = newModelo.Nombre} //pregunta si ya existe
        );
    if (isAlreadyAdded){ //si existe en el json no hace nada
        return;
    }
    DB.Modelo.push(newModelo);//colocar el nuevo dato en el modelo json
    saveToDatabase(DB.LineaModelo);//grabar
};

module.exports = {getAllWorkouts,
                    createNewWorkouts};


