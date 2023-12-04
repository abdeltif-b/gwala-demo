import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: mongoose.Schema.Types.ObjectId, ref: "Location", required: true },
  likedQuestions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
