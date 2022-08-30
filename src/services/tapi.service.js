const Tapioca = require('../models/Tapioca');

const findTapiService = async () => {
  const tapiocas = await Tapioca.find();
  return tapiocas;
};

const findTapiByIdService = async (id) => {
  return await Tapioca.findById(id);
};

const createTapiService = async (newTapi) => {
  return await Tapioca.create(newTapi)
};

const updateTapiService = async (id, tapiocaEdited) => {
  return await Tapioca.findByIdAndUpdate(id, tapiocaEdited, { returnDocument: "after" });
};

const deleteTapiService = async (id) => {
  return await Tapioca.findByIdAndDelete(id);
};

module.exports = {
  findTapiService,
  findTapiByIdService,
  createTapiService,
  updateTapiService,
  deleteTapiService
};
