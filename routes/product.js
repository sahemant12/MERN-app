const express = require('express');
const router = express.Router();
const productController = require('../controller/product');

router
      .post('/', productController.createProduct)
      .get('/', productController.readAllProduct)
      .get('/:id', productController.readProduct)
      .put('/:id', productController.updateProduct)
      .patch('/:id', productController.replaceProduct)
      .delete('/:id', productController.deleteProduct) 

      exports.router = router;