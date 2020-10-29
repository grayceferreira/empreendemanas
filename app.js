const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const empreendemanas = require("./routes/empreendemanas");
const admin = require("./routes/admin");
const patrocinadores = require("./routes/patrocinadores");

const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use("/empreendemanas", empreendemanas);
app.use("/admin", admin);
app.use("/patrocinadores", patrocinadores);

app.get("/", (request, response) => {
  response.send("Seja benvinda à sua rede de compartilhamento de projetos!");
});

app.listen(PORT);
console.info(`Rodando na porta ${PORT}`);
