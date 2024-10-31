const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
// const productController = require('../controllers/product.controller.js');
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/product.controller.js');

// router.get('/', productController.getAllProducts);
// router.get('/:id', productController.getProductById);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
