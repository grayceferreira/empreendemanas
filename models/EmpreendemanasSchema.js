const mongoose = require('mongoose');
const { ServicosSchema } = require('.ServicosSchema')
const Schema = mongoose.Schema;
const EmpreendemanasSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  foto: { type: String, required: true },
  servicos: [ServicosSchema],
  senha: { type: String, required: true },
})

const empreendemanasModel = mongoose.model('empreendemanas', EmpreendemanasSchema);

module.exports = empreendemanasModel;