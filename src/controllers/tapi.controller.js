const tapiService = require('../services/tapi.service');

const findTapiController = async (req, res) => {
  res.send(await tapiService.findTapiService());
};

const findTapiByIdController = async (req, res) => {
  const selectTapi = await tapiService.findTapiByIdService(req.params.id);

  if (!selectTapi) {
    return res.status(400).send({ message: 'Tapioca não encontrado' });
  }

  res.send(selectTapi);
};

const createTapiController = async (req, res) => {
  res.send(await tapiService.createTapiService(req.body));
};

const updateTapiController = async (req, res) => {
  res.send(await tapiService.updateTapiService(req.params.id, req.body));
};

const deleteTapiController = async (req, res) => {
 const tapioca = await tapiService.deleteTapiService(req.params.id);
 
  if (!tapioca) {
    return res.status(400).send({ message: 'Tapioca não encontrada' });
  }
  res.send({ message: `Tapioca ${tapioca.sabor} deletada com sucesso` });
};

module.exports = {
  findTapiController,
  findTapiByIdController,
  createTapiController,
  updateTapiController,
  deleteTapiController,
};
