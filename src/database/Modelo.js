const DB = require("./db.json");
const { saveToDatabase } = require("./util");


const getAllModelo = () => {
    return DB.Modelo;
}; 
const getOneModelo = (Nombre) => {
    return DB.Modelo.findIndex(Modelo => {Modelo.Nombre = newModelo.Nombre});
};
const createNewModelo = (newModelo) => {
    const isAlreadyAdded = DB.Modelo.findIndex(Modelo => {Modelo.Nombre = newModelo.Nombre} //pregunta si ya existe
        );
    if (isAlreadyAdded){ //si existe en el json no hace nada
        return;
    }
    DB.Modelo.push(newModelo);//colocar el nuevo dato en el modelo json
    saveToDatabase(DB.Modelo);//grabar
};

module.exports = {getAllModelo,
                    createNewModelo,
                    getOneModelo};


