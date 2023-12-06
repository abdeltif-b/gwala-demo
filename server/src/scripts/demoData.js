import * as dotenv from "dotenv";
import mongoose from "mongoose";
import faker from "faker";
import LocationModel from "../models/location.js";
import QuestionModel from "../models/question.js";
import UserModel from "../models/user.js";

dotenv.config();

// connect to MongoDB
try {
  mongoose.connect(process.env.DB_URL, {
    dbName: process.env.DB_NAME,
    auth: { username: process.env.DB_USERNAME, password: process.env.DB_PASSWORD },
  });
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

const removeAllData = async () => {
  await UserModel.deleteMany({});
  await LocationModel.deleteMany({});
  await QuestionModel.deleteMany({});

  console.log("All data removed");
};

// generate questions
function generateQuestions(locations, userId) {
  const questions = [];
  for (let i = 0; i < 4; i++) {
    const question = {
      title: faker.lorem.sentence() + "?",
      content: faker.lorem.paragraph(),
      location: locations[Math.floor(Math.random() * locations.length)]._id,
      user: userId,
    };
    questions.push(question);
  }
  return questions;
}

// insert new data
export async function insertDemoData() {
  try {
    // delete existing data
    await removeAllData();

    // insert locations
    const locations = [
      {
        _id: new mongoose.Types.ObjectId(),
        name: "Casablanca",
        coordinates: { latitude: 33.589886, longitude: -7.603869 },
      },
      { _id: new mongoose.Types.ObjectId(), name: "Rabat", coordinates: { latitude: 34.020882, longitude: -6.84165 } },
      {
        _id: new mongoose.Types.ObjectId(),
        name: "Agadir",
        coordinates: { latitude: 30.427755, longitude: -9.598107 },
      },
      {
        _id: new mongoose.Types.ObjectId(),
        name: "Marrakesh",
        coordinates: { latitude: 31.628674, longitude: -7.992047 },
      },
      { _id: new mongoose.Types.ObjectId(), name: "Oujda", coordinates: { latitude: 34.689404, longitude: -1.912823 } },
    ];
    await LocationModel.insertMany(locations);

    // insert a user
    const users = [
      {
        _id: new mongoose.Types.ObjectId("000000017c849534f3a94556"),
        username: "user",
        email: "email@example.com",
        location: new mongoose.Types.ObjectId(locations[0]._id),
      },
    ];
    const insertedUser = await UserModel.insertMany(users);

    // insert questions
    const questions = generateQuestions(locations, users[0]._id);
    const insertedQuestions = await QuestionModel.insertMany(questions);

    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    mongoose.connection.close();
  }
}

insertDemoData();
