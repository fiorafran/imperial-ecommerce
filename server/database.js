import mongoose from "mongoose";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envFile = readFileSync(path.join(__dirname, "../.env.local"));
const envVars = Object.fromEntries(
  envFile
    .toString()
    .split("\n")
    .map((line) => line.split("="))
);

Object.assign(process.env, envVars);

const uri = `mongodb+srv://${process.env.DB_UMDB}:${process.env.DB_PW}${process.env.DB_PATH}/?retryWrites=true&w=majority`;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexión exitosa a la base de datos"))
  .catch((err) => console.error("Error al conectar a la base de datos", err));

export { mongoose };
