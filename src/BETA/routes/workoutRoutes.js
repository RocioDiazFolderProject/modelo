const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");
router
    
    .get("/",(workoutController.getAllWorkouts))
    .get("/:workoutId",(workoutController.getOneWorkouts))
    .post("/:workoutId",(workoutController.createNewWorkouts))
    .patch("/:workoutId",(workoutController.updateOneWorkouts))
    .delete("/:workout",(workoutController.deleteOneWorkouts))

module.exports = router;

