import express, { json } from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

//Middlewares
app.use(cors());
app.use(json());

//Import Routes
import questionsRoute from "./routes/questions.js";
import quizzesRoute from "./routes/quizzes.js";

//Route Middlewares
app.use("/questions", questionsRoute);
app.use("/quizzes", quizzesRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Connect to MongoDB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB !")
);

//starts the server and listens for requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
