const {v4:uuid} = require ('uuid'); //crea numeros aleatorios, por seguridad, para los id

const getAllWorkouts = () => {
    return;
    
    
};
const getOneWorkouts = () => {
    return;
   
};
const createNewWorkouts = (newModelo) => {
    const modeloToInsert = {
        ...newModelo,
        id:uuid()
        
    }
    return;
    
};
const updateOneWorkouts = () => {
    return;
    
};
const deleteOneWorkouts = () => {
    return;
    
};


    module.exports = {
        getAllWorkouts,
        getOneWorkouts,
        createNewWorkouts,
        updateOneWorkouts,
        deleteOneWorkouts,
    };
    
