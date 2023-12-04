import * as dotenv from "dotenv";
import express from "express";

import cors from "cors";
import helmet from "helmet";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

//using the dependancies
app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log("App listening on port 5000!"));
