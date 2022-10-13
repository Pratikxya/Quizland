import express from "express";
const router = express.Router();
import QuizModel from "../models/quiz.js";
import QuestionModel from "../models/question.js";

router.get("/", async (req, res) => {
  try {
    const quizzes = await QuizModel.find().populate({
      path: "questions",
    });
    res.json(quizzes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const quiz = new QuizModel({
    title: req.body.title,
    category: req.body.category,
    createdOn: req.body.createdOn,
    createdBy: req.body.createdBy,
    isPublic: req.body.isPublic,
  });
  try {
    const savedQuiz = await quiz.save();
    res.json(savedQuiz);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

router.get("/:quizId", async (req, res) => {
  try {
    const quiz = await QuizModel.findById(req.params.quizId).populate({
      path: "questions",
    });
    res.json(quiz);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:quizId", async (req, res) => {
  try {
    const removedQuiz = await QuizModel.remove({
      _id: req.params.quizId,
    });
    res.json({ message: "Deleted Succesfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

router.patch("/:quizId", async (req, res) => {
  try {
    const updatedQuiz = await QuizModel.findById(req.params.quizId);
    updatedQuiz.title = req.body.title;
    updatedQuiz.category = req.body.category;
    updatedQuiz.createdOn = req.body.createdOn;
    updatedQuiz.createdBy = req.body.createdBy;
    updatedQuiz.isPublic = req.body.isPublic;
    const savedQuiz = await updatedQuiz.save();
    res.json(savedQuiz);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
