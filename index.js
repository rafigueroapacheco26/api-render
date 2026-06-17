import express from "express";
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ mensaje: "Bienvenidos a nuestra API" });
});

app.get("/api", (req, res) => {
 res.json({
   nombre: "Rodrigo",
   email: "rafigueroapacheco26@gmailcom",
 });
});


app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto http://localhost:${PORT}`);
});
