const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    areaDeAtuacao: { type: String, required: true}
  })

const AdminModel = mongoose.model("Admin", AdminSchema);

module.exports = { AdminModel };
