const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    foto: { type: String, required: true },
    senha: { type: String, required: true },
    permissao: { type: String }
  })

  const AdminModel = mongoose.model('Admin', AdminSchema)

  module.exports = { AdminModel }