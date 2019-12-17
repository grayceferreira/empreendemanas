const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjetosSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: String, required: true },
  valor: { type: Number, required: true },
  categoria: { type: String, required: true }
})

const projetosModel = mongoose.model('projetos', ProjetosSchema);

module.exports = { projetosModel, ProjetosSchema };
