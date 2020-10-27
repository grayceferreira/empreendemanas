const mongoose = require('mongoose');
const { ProjetosSchema } = require('./ProjetosSchema')
const Schema = mongoose.Schema;
const PatrocinadoresSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  foto: { type: String, required: true },
  projetoSelecionado: [ProjetosSchema],
  senha: { type: String, required: true },
  tipoDeEmpreendimento: { type: String, required: true },
  interesseEmInvestir: { type: Boolean, required: true }
})

const patrocinadoresModel = mongoose.model('patrocinadores', PatrocinadoresSchema);

module.exports = patrocinadoresModel;