import * as dotenv from "dotenv";
import express from "express";

import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/db.js";
import LocationRouter from "./routes/LocationRouter.js";
import QuestionRouter from "./routes/QuestionRouter.js";
import AnswerRouter from "./routes/AnswerRouter.js";

//App Varaibles
dotenv.config();

const PORT = process.env.PORT;

//intializing the express app
const app = express();

//using the dependancies
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api", LocationRouter);
app.use("/api", QuestionRouter);
app.use("/api", AnswerRouter);

connectDB();

app.listen(PORT, () => console.log("App listening on port 5000!"));
