const mongoose = require('mongoose');

const TapiocaSchema = new mongoose.Schema({
  sabor: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
});

const Tapioca = mongoose.model('tapiocas', TapiocaSchema);

module.exports = Tapioca;
