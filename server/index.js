import express from "express";
import morgan from "morgan";
import gamesRouter from "./routes/games.routes.js";
import path, { dirname } from "path";
import { mongoose } from "./database.js";
import { fileURLToPath } from "url";

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/games", gamesRouter);

// Static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const buildPath = path.join(__dirname, "../build");

app.use(express.static(buildPath));

// Starting server
app.listen(app.get("port"), () => {
  console.log(`server listening on port ${app.get("port")}`);
});
