//importar los servicios del modelo
const workoutService = require("../services/workoutService");
//son los que intervienen entre la app y el db, no tocan aun la bd, todo aqui se debe almacenar en los json o similares
//para traer todos los workouts
const getAllWorkouts =(req,res)=>{
    const allWorkout = workoutService.getAllWorkouts();
    res.send("Get alls workouts"); 
};
//toma 1 workouts por Id (en este ejemplo)
const getOneWorkouts = (req,res)=>{
    const oneWorkout = workoutService.getOneWorkouts(req.params.workoutId);
    res.send(`Get workout ${req.params.workoutId}`);
};
//crea un nuevo workouts por Id
const createNewWorkouts = (req,res) =>{
    const createWorkout = workoutService.createNewWorkouts(req.params.workoutId);
    res.send(`Create workout ${req.params.workoutId}`);
};

//actualiza un por Id, puede ser de a un campo la actualización y no de todo el registro
const updateOneWorkouts = (req,res) =>{
    const updateOneWorkout = workoutService.updateOneWorkouts(req.params.workoutId); 
    res.send(`Update workout ${req.params.workoutId}`);
};

//borra uno por Id
const deleteOneWorkouts = (req,res) =>{
   const deleteOneWorkout = workoutService.deleteOneWorkouts();
   res.send(`Delete workout ${req.params.workoutId}`);
};
//dejamos los métodos que vamos a exportar listados en el modulo exports
module.exports = {
    getAllWorkouts,
    getOneWorkouts,
    createNewWorkouts,
    updateOneWorkouts,
    deleteOneWorkouts,
};
