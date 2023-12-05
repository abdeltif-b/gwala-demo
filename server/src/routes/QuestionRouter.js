import express from "express";
import QuestionModel from "../models/question.js";
import UserModelModel from "../models/user.js";
import mongoose from "mongoose";
import UserModel from "../models/user.js";
import { computeDistance } from "../utils/computeDistance.js";

const router = express.Router();

router.post("/questions", async (request, response) => {
  const { title, content, location, user } = request.body;

  const data = new QuestionModel({
    title,
    content,
    location,
    user: new mongoose.Types.ObjectId(user),
  });

  try {
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/questions/:userId", async (request, response) => {
  try {
    const user = await UserModel.findById(request.params.userId).populate("location");
    const data = await QuestionModel.find()
      .populate({ path: "location", select: ["name", "coordinates"] })
      .select("title location");

    const sortedData = computeDistance(data, user.location.coordinates.latitude, user.location.coordinates.longitude);
    response.send(sortedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).send({ error });
  }
});

router.get("/question/:id", async (request, response) => {
  try {
    const data = await QuestionModel.findOne({ _id: request.params.id })
      .populate({
        path: "user",
        select: "username",
      })
      .populate({
        path: "location",
        select: "name",
      })
      .populate({
        path: "answers",
        model: "Answer",
        populate: {
          path: "user",
        },
      });
    response.send(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).send({ error });
  }
});

router.get("/questions-location", async (request, response) => {
  try {
    const data = await QuestionModel.find().populate({ path: "location", select: "coordinates" }).select("location");
    const locations = data.map((item) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [item.location.coordinates.longitude, item.location.coordinates.latitude],
      },
      properties: {
        _id: item._id,
      },
    }));

    response.send(locations);
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).send({ error });
  }
});

// favorite questions
router.get("/favorites/:userId", async (request, response) => {
  try {
    const user = await UserModel.findById(request.params.userId)
      .populate({
        path: "likedQuestions",
        model: "Question",
        populate: {
          path: "user",
          model: "User",
        },
      })
      .exec();

    if (!user) {
      return response.status(404).json({ error: "User not found" });
    }

    const likedQuestions = user.likedQuestions;
    response.status(200).json({ likedQuestions });
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).send({ error });
  }
});

router.post("/favorites", async (request, response) => {
  const { user, question } = request.body;
  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(user) },
      {
        $push: {
          likedQuestions: new mongoose.Types.ObjectId(question),
        },
      },
      { new: true }
    );

    // Check if the user exists
    if (!updatedUser) {
      return response.status(404).json({ error: "User not found" });
    }
    response.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/favorites", async (request, response) => {
  const { user, question } = request.body;

  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(user) },
      {
        $pull: {
          likedQuestions: new mongoose.Types.ObjectId(question),
        },
      },
      { new: true }
    );

    // check if the user exists
    if (!updatedUser) {
      return response.status(404).json({ error: "User not found" });
    }

    response.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
