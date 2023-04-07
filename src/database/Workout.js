const DB = require("./db.json");
const { saveToDatabase } = require("./util");


const getAllWorkouts = () => {
    return DB.Modelo;
}; 

const createNewWorkouts = (newModelo) => {
    const isAlreadyAdded = DB.Modelo.findIndex(Modelo => {Modelo.NombreModelo = newModelo.NombreModelo} //pregunta si ya existe
        );
    if (isAlreadyAdded){ //si existe en el json no hace nada
        return;
    }
    DB.Modelo.push(newModelo);//colocar el nuevo dato en el modelo json
    saveToDatabase(DB);//grabar
};

module.exports = {getAllWorkouts,
                    createNewWorkouts};


