const express = require('express');
const router = express.Router();
const controller = require('../controllers/kart.controller')

router.get('/:idUser', controller.getKartByUser);

router.post('/', controller.createKartItem);

router.delete('/:idUser', controller.deleteKartItem);

router.get('/:idUser/product', controller.getProductByUser);


module.exports = router;
