import mongoose from "mongoose";

export const LocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
});

const LocationModel = mongoose.model("Location", LocationSchema);
export default LocationModel;
