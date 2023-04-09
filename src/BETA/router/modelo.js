const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");
//const lineaModeloController = require("../../controllers/lineaModeloController");
router
    
    .get("/",(workoutController.getAllModelo))
    .get("/:Nombre",(workoutController.getOneModelo))
    .post("/",(workoutController.createNewModelo))
  

module.exports = router;

