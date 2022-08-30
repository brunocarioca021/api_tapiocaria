const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');

const tapiController = require('../controllers/tapi.controller');
const controllerCarinho = require('../controllers/carrinho.controller');
const { validId, validObjectBody, validObjectBodyCarrinho } = require('../middlewares/tapioca.middleware');

router.get('/tapi', tapiController.findTapiController);

router.get('/tapi/:id', validId, tapiController.findTapiByIdController);

router.post('/create', validObjectBody, tapiController.createTapiController);

router.put('/update/:id', validId, validObjectBody, tapiController.updateTapiController);

router.delete('/delete/:id', validId, tapiController.deleteTapiController);

router.get('/all-carrinho', controllerCarinho.findAllCarrinhoController);
router.post(
  '/create-carrinho',
  validObjectBodyCarrinho,
  controllerCarinho.createManyItemsCarrinhoController,
);
router.delete(
  '/finish-carrinho',
  controllerCarinho.deleteAllItemsCarrinhoController,
);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;
