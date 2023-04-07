//importar los servicios del modelo
const workoutService = require("../../src/services/workoutService");
//son los que intervienen entre la app y el db, no tocan aun la bd, todo aqui se debe almacenar en los json o similares
//para traer todos los workouts
const getAllModelo=(req,res)=>{
    const allWorkout = workoutService.getAllModelo();
    res.send({status:'ok', data:allWorkout}); 
};
//toma 1 workouts por Id (en este ejemplo)
const getOneModelo= (req,res)=>{
    const oneWorkout = workoutService.getOneWorkouts(req.params.workoutId);
    res.send(`Get workout ${req.params.workoutId}`);
};
//crea un nuevo workouts por Id
const createNewModelo = (req,res) =>{
    const {Modelo} = req;
    if (!Modelo.Nombre); //sino tiene nombre el modelo nuevo no lo crea
    {
        return;
    }
    
    const newModelo = {     
        Id : Modelo.ModeloId,                //constante del objeto Modelo
        Nombre : Modelo.Nombre        //variable Nombre donde recibe lo que va a dejar en Modelo.NombreModelo
    };

    const createModelo = workoutService.createNewModelo(newModelo);
    res.status(201).send({status:"ok",data:createModelo});
}
const createNewLinMod= (req,res) =>{
    const {LinMod} = req;
    if (!LinMod.Descripcion); //sino tiene descirpicion la linea el lineamodelo nuevo no lo crea
    {
        return;
    }
    
    const newLinMod = {     
        Id : LineaModelo.Id, 
        ModId : LineaModelo.ModeloId,               //constante del objeto Modelo
        Nombre : LineaModelo.Descripcion,        //variable Nombre donde recibe lo que va a dejar en Modelo.NombreModelo
        Valor: LineaModelo.Valor
    };

    const createModelo = workoutService.createNewModelo(newModelo);
    res.status(201).send({status:"ok",data:createModelo});
}

//actualiza un por Id, puede ser de a un campo la actualización y no de todo el registro
// const updateOneWorkouts = (req,res) =>{
//     const updateOneWorkout = workoutService.updateOneWorkouts(req.params.workoutId); 
//     res.send(`Update workout ${req.params.workoutId}`);
// };

//borra uno por Id
// const deleteOneWorkouts = (req,res) =>{
//    const deleteOneWorkout = workoutService.deleteOneWorkouts();
//    res.send(`Delete workout ${req.params.workoutId}`);
// };
//dejamos los métodos que vamos a exportar listados en el modulo exports
module.exports = {
    getAllModelo,
    getOneModelo,
    createNewModelo
    // updateOneWorkouts,
    // deleteOneWorkouts,
};
