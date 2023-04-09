//const {v4:uuid} = require ('uuid'); //crea numeros aleatorios, por seguridad, para los id
const { uuid } = require('uuidv4');
const getAllModelo = () => {
    return;
   
};
const getOneModelo = () => {
    return;
   
};
const createNewModelo = (newModelo) => {
    const modeloToInsert = {
        ...newModelo,
        
        
    };
    const createModelo = Modelo.createNewModelo(modeloToInsert);
    return createModelo;
    
 };
// const updateOneWorkouts = () => {
//     return;
    
// };
// const deleteOneWorkouts = () => {
//     return;
//     //commit
// };


    module.exports = {
        getAllModelo,
        getOneModelo,
        createNewModelo
        // updateOneWorkouts,
        // deleteOneWorkouts,
    };
    
