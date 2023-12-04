import express from "express";
import QuestionModel from "../models/question.js";
import mongoose from "mongoose";

const router = express.Router();

router.post("/answers", async (request, response) => {
  const { content, user, question } = request.body;

  await QuestionModel.findOneAndUpdate(
    { _id: new mongoose.Types.ObjectId(question) },
    {
      $push: {
        answers: {
          content: content,
          user: new mongoose.Types.ObjectId(user),
        },
      },
    },
    { new: true }
  );
});

export default router;
