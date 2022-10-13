import mongoose from "mongoose";

const QuizSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  isPublic: {
    type: Boolean,
    required: true,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Questions",
    },
  ],
});

const quizModel = mongoose.model("Quizzes", QuizSchema);
export default quizModel;
