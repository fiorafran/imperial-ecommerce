import mongoose from "mongoose";

const uri =
  "mongodb+srv://Fiorita:Midrogasosvos1@cluster0.qpniy.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexión exitosa a la base de datos"))
  .catch((err) => console.error("Error al conectar a la base de datos", err));

export { mongoose };
