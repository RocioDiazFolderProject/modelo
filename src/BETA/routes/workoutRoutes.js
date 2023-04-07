const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");
router
    
    .get("/",(workoutController.getAllModelo))
    .get("/:workoutId",(workoutController.getOneModelo))
    .post("/",(workoutController.createNewWorkouts))
    // .patch("/:workoutId",(workoutController.updateOneWorkouts))
    // .delete("/:workout",(workoutController.deleteOneWorkouts))

module.exports = router;

