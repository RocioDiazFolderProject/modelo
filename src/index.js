const express = require('express'); //coloca express como constante
const betaworkoutRouter = require("./BETA/router/workoutRoutes"); // le damos a que version conectarse en este caso es la API de prueba
//const { getAllModelo } = require('./services/workoutService');
const app = express(); // para la app requiere express


const mysql = require('mysql');


const PORT = process.env.PORT || 3000; //configura el puerto de acceso a la app


app.use(express.json());

//conexión a mysql

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


app.listen(PORT, () =>{
    console.log(`server escuchando en el puerto ${PORT}`)});

app.use("/src/BETA/router", betaworkoutRouter); //aqui le indico que la api es la de beta y se comunique a traves de router





