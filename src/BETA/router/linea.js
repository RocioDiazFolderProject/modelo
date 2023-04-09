const express = require("express");
const routerL = express.Router();
// const workoutController = require("../../controllers/workoutController");
const lineaModeloController = require("../../controllers/lineaModeloController");
routerL
    
   
    .get("/",(lineaModeloController.getAllLinMod))
    .get("/:Descripcion",(lineaModeloController.getOneLinMod))
    .get("/",(lineaModeloController.createNewLinMod))


module.exports = routerL;

