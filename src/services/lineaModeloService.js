//const {v4:uuid} = require ('uuid'); //crea numeros aleatorios, por seguridad, para los id
const { uuid } = require('uuidv4');
 const getAllLinMod = () => {
    
    return;
   
 };
 const getOneLinMod = () => {

    return;
   
};
const createNewLinMod = (newLinMod) => {
    const lineaToInsert = {
         ...newLinMod,
        
        
   };
  const createLinea = LineaModelo.createNewLinMod(lineaToInsert);
  return createLinea;
    
 };
// const updateOneWorkouts = () => {
//     return;
    
//  };
// const deleteOneWorkouts = () => {
//     return;
//     //commit
// };


    module.exports = {
        getAllLinMod,
        getOneLinMod,
        createNewLinMod
        // updateOneWorkouts,
        // deleteOneWorkouts,
    };
    
