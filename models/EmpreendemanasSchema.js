const mongoose = require("mongoose");
const { ProjetosSchema } = require("./ProjetosSchema");
const Schema = mongoose.Schema;
const EmpreendemanasSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  nickname:{type: String, required: false},
  email: { type: String, required: true },
  rg: { type: Number, required: true},
  telefone:{type:Number,required:true},
  foto: { type: String, required: true },
  projetos: [ProjetosSchema],
  senha: { type: String, required: true },
  areaAtuacao: { type: String, required: true },
  estadoCivil: { type: String, required: true },
  cpf: { type: Number, required: true },
  idade: { type: Number, required: true },
  tamanhoDaCamisa: { type: Number, required: true },
  cidade: {type: String, required:true}
});

const empreendemanasModel = mongoose.model(
  "empreendemanas",
  EmpreendemanasSchema
);

module.exports = empreendemanasModel;