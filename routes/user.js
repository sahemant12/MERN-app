const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

router
      .post('/', userController.createProduct)
      .get('/', userController.readAllProduct)
      .get('/:id', userController.readProduct)
      .put('/products/:id', userController.updateProduct)
      .patch('/:id', userController.replaceProduct)
      .delete('/:id', userController.deleteProduct) 

      exports.router = router;