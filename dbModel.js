import mongoose from "mongoose";

// Definition of our database schema
const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  likes: String,
});

// Collection inside the database
export default mongoose.model("tiktokVideos", tiktokSchema);
