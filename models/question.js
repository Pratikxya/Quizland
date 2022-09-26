import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  media: {
    type: String,
    required: false,
  },
  options: [
    {
      type: String,
      required: false,
    },
  ],
});

const questionModel = mongoose.model("Questions", QuestionSchema);
export default questionModel;
