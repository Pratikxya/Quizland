import express from "express";
const router = express.Router();
import QuestionModel from "../models/question.js";

router.get("/", async (req, res) => {
  try {
    const questions = await QuestionModel.find();
    res.json(questions);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const question = new QuestionModel({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    media: req.body.media,
    options: req.body.options,
  });
  try {
    const savedQuestion = await question.save();
    res.json(savedQuestion);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:questionId", async (req, res) => {
  try {
    const question = await QuestionModel.findById(req.params.questionId);
    res.json(question);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:questionId", async (req, res) => {
  try {
    const removedQuestion = await QuestionModel.remove({
      _id: req.params.questionId,
    });
    res.json(removedQuestion);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:questionId", async (req, res) => {
  try {
    const updatedQuestion = await QuestionModel.updateOne(
      { _id: req.params.questionId },
      { $set: { question: req.body.question } }
    );
    res.json(updatedQuestion);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
