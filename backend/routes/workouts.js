const express = require("express");

const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts)

// GET single workout
router.get("/:id", getWorkout)

// POST a workout
router.post("/", createWorkout)

// DELETE a workout
router.delete("/:id", deleteWorkout)

// UPDATE all workouts
router.patch("/:id", updateWorkout)

module.exports = router;
