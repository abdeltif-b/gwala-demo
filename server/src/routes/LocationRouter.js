import express from "express";
import LocationModel from "../models/location.js";

const router = express.Router();

router.get("/locations", async (request, response) => {
  try {
    const locations = await LocationModel.find().select("name");
    response.send(locations);
  } catch (error) {
    console.error("Error fetching locations:", error);
    response.status(500).send({ error });
  }
});

export default router;
