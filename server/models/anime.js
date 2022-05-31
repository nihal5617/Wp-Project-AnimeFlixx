import mongoose from "mongoose";

const animeSchema = mongoose.Schema({
  name: { type: String, required:  true },
  thumbnail: { type: String, required: true },
  desc: { type: String, required: true },
  delay: { type: String },
  video: { type: String, required: true },
});

export default mongoose.model("Anime", animeSchema);