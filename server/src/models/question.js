import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

const QuestionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  location: { type: mongoose.Schema.Types.ObjectId, ref: "Location", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  answers: [AnswerSchema],
  likes: { type: Number, default: 0 },
});

const QuestionModel = mongoose.model("Question", QuestionSchema);
export default QuestionModel;
