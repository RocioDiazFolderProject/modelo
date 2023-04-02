const express = require('express'); //coloca express como constante
const betaworkoutRouter = require("./BETA/routes/workoutRoutes"); // le damos a que version conectarse en este caso es la API de prueba
const app = express(); // para la app requiere express

const PORT = process.env.PORT || 3000; //configura el puerto de acceso a la app

/*app.get('/',(req,res)=>{ 
    res.send('probando escucha');
});*/

app.use("/api/BETA/workouts", betaworkoutRouter); //aqui le indico que la api es la de beta y se comunique a traves de router


app.listen(PORT, () =>{
    console.log(`server escuchando en el puerto ${PORT}`)});



