const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");
//const lineaModeloController = require("../../controllers/lineaModeloController");
router
    
    .get("/",(workoutController.getAllModelo))
    .get("/:Nombre",(workoutController.getOneModelo))
    .post("/",(workoutController.createNewModelo))
    // .get("/lineaModeloController.js",(lineaModeloController.getAllLinMod))
    // .get("/:Descripcion",(workoutController.getOneLinMod))
    // .get("/",(workoutController.createNewLinMod))
    // .patch("/:workoutId",(workoutController.updateOneWorkouts))
    // .delete("/:workout",(workoutController.deleteOneWorkouts))

module.exports = router;

