//importar los servicios del modelo
const workoutService = require("../services/lineaModeloService");
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


const getAllLinMod = (req,res) => {


    const query = "SELECT * FROM modelo.lineamodelo";
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


const getOneLinMod = (req,res) =>{
    const oneLinMod = lineaModeloRoutes.getOneLinMod(req.params.LinMod.Descripcion)
};

const createNewLinMod= (req,res) =>{
    const {LinMod} = req;
    if (!LinMod.Descripcion); //sino tiene descirpicion la linea el lineamodelo nuevo no lo crea
    {
        return;
    }
    
    const newLinMod = {     
        Id : LineaModelo.Id, 
        ModId : LineaModelo.ModeloId,               //constante del objeto Modelo
        Nombre : LineaModelo.Descripcion,        //variable Nombre donde recibe lo que va a dejar en LineaModelo.descripcion
        Valor: LineaModelo.Valor
    };

    const createLinMod = workoutService.createNewLinMod(newLinMod);
    res.status(201).send({status:"ok",data:createLinMod});


};


//dejamos los métodos que vamos a exportar listados en el modulo exports
module.exports = {
    getAllLinMod,
    getOneLinMod,
    createNewLinMod

};
