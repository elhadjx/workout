require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use(express.json());
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected To B");

    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Server Started | Listening on Port: ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
