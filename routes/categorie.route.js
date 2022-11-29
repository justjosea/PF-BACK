const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorie.controller')

router.get('/', controller.getCategories);

router.post('/', controller.createCategorie);

router.put('/', controller.updateCategorie);

router.delete('/', controller.deleteCategorie);

module.exports = router;