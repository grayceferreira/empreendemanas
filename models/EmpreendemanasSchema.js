const mongoose = require('mongoose');
const { ProjetosSchema } = require('./ProjetosSchema')
const Schema = mongoose.Schema;
const EmpreendemanasSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  nickname:{type: String, required: false},
  email: { type: String, required: true },
  telefone:{type:Number,required:true},
  foto: { type: String, required: true },
  projetos: [ProjetosSchema],
  senha: { type: String, required: true },
})

const empreendemanasModel = mongoose.model('empreendemanas', EmpreendemanasSchema);

module.exports = empreendemanasModel;