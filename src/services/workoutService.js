//const {v4:uuid} = require ('uuid'); //crea numeros aleatorios, por seguridad, para los id
const { uuid } = require('uuidv4');
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
        
    };
    const createWorkout = workout.createNewWorkouts(modeloToInsert);
    return createNewWorkouts;
    
};
const updateOneWorkouts = () => {
    return;
    
};
const deleteOneWorkouts = () => {
    return;
    //commit
};


    module.exports = {
        getAllWorkouts,
        getOneWorkouts,
        createNewWorkouts,
        updateOneWorkouts,
        deleteOneWorkouts,
    };
    
