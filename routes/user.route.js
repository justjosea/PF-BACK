const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller')

router.get('/', controller.getUsers);

router.post('/', controller.createUser);

router.put('/', controller.updateUser);

router.delete('/', controller.deleteUser);

router.put('/buyKart', controller.buyKart)

module.exports = router;
