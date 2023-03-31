import express from "express";
import { Games } from "../models/games.js";

const gamesRouter = express.Router();

gamesRouter.get("/", async (req, res) => {
  const games = await Games.find({});
  res.json(games);
});

gamesRouter.post("/", async (req, res) => {
  const {
    title,
    price,
    appId,
    released,
    imgUrl,
    steamUrl,
    description,
    genre,
    review,
    reviewSummary,
  } = req.body;

  const game = new Games({
    title,
    price,
    appId,
    released,
    imgUrl,
    steamUrl,
    description,
    genre,
    review,
    reviewSummary,
  });

  await game.save();
  res.json({ status: "Game saved" });
});

gamesRouter.put("/:id", async (req, res) => {
  const {
    title,
    price,
    appId,
    released,
    imgUrl,
    steamUrl,
    description,
    genre,
    review,
    reviewSummary,
  } = req.body;

  await Games.findByIdAndUpdate(req.params.id, {
    title,
    price,
    appId,
    released,
    imgUrl,
    steamUrl,
    description,
    genre,
    review,
    reviewSummary
  });

  res.json({ status: "Game Updated" });
});

gamesRouter.delete("/:id", async (req, res) => {
  await Games.findByIdAndRemove(req.params.id);
  res.json({ status: "Game deleted" });
});

export default gamesRouter;
