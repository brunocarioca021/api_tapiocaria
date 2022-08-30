const mongoose = require('mongoose');

const validId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  if (
    !req.body ||
    !req.body.sabor ||
    !req.body.descricao ||
    !req.body.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos da paleta!' });
  }
  next();
};

const validObjectBodyCarrinho = (req, res, next) => {
  const carrinho = req.body;

  carrinho.forEach((item) => {
    if (!item || !item.tapiocaId || !item.quantidade) {
      return res
        .status(400)
        .send({ message: 'Envie o todos campos das tapiocas' });
    }
  });

  next();
};

module.exports = {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
};
