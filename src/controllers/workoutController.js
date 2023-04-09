//importar los servicios del modelo
const workoutService = require("../../src/services/workoutService");
const mysql = require('mysql');
const conector = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'ROSEVI007',
    database : 'Modelo'
});

//chequeo la conexión a la base

conector.connect(error => {
    if (error) throw error;
    console.log('Conectado');
});
//son los que intervienen entre la app y el db, no tocan aun la bd, todo aqui se debe almacenar en los json o similares
//para traer todos los workouts
const getAllModelo=(req,res)=>{
    // const allModelo = workoutService.getAllModelo();
    // res.send({status:"ok - estamos en getAllModelo", data:allModelo}); 
    const query = "SELECT * FROM modelo.modelo";
    console.log(query);
    
    conector.query(query,(error,results)=>{
        if (error) throw error;
        console.log(results);
        if (results){
            res.json(results);
        }else{
            res.send('sin resultado');
        }

    });
   
};


//toma 1 modelo por nombre (en este ejemplo)
 const getOneModelo= (req,res)=>{
   const oneModelo = workoutService.getOneModelo(req.params.Nombre);
    res.send(`Get Modelo ${req.params.Nombre}`);
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
};


//dejamos los métodos que vamos a exportar listados en el modulo exports
module.exports = {
    getAllModelo,
    getOneModelo,
    createNewModelo

};
