const express = require("express");
const routerL = express.Router();
// const workoutController = require("../../controllers/workoutController");
const lineaModeloController = require("../../controllers/lineaModeloController");
routerL
    
    // .get("/",(workoutController.getAllModelo))
    // .get("/:Nombre",(workoutController.getOneModelo))
    // .post("/",(workoutController.createNewModelo))
    .get("/",(lineaModeloController.getAllLinMod))
    .get("/:Descripcion",(lineaModeloController.getOneLinMod))
    .get("/",(lineaModeloController.createNewLinMod))
    // .patch("/:workoutId",(workoutController.updateOneWorkouts))
    // .delete("/:workout",(workoutController.deleteOneWorkouts))

module.exports = routerL;

