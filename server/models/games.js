import mongoose from "mongoose";

const { Schema } = mongoose;

const gamesSchema = new Schema({
  appId: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: String, required: true },
  released: { type: String, required: true },
  imgUrl: { type: String, required: true },
  steamUrl: { type: String, required: true },
  description: { type: String, required: true },
  genre: { type: String, required: true },
  review: { type: String, required: true },
  reviewSummary: { type: String, required: true },
});

const Games = mongoose.model("Games", gamesSchema);

export { Games };
