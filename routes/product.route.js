const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller')

router.get('/', controller.getProducts);

router.post('/', controller.createProduct);

router.put('/', controller.updateProduct);

router.delete('/', controller.deleteProduct);

router.get('/:id', controller.getProductById);

module.exports = router;
