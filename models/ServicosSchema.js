const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmpreendemanasSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: String, required: true },
  valor: { type: Number, required: true },
  pagamento: { type: String, required: true },
  categoria: { type: String, required: true }
})

const servicosModel = mongoose.model('servicos', ServicosSchema);

module.exports = { servicosModel, ServicosSchema };
