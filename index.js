const express = require('express');
const mongoose = require('mongoose');
const app = express();

//All below are Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productRoutes = require('./routes/product.route.js');

//Routes
app.use('/api/products', productRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello from Node Api server Updated');
});

// app.post('/api/products', async(req, res) => {
//     try {
//         // const product = new Product(req.body);
//         // product.save();
//         // res.status(201).send(product);
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// app.get('/api/products', async(req, res) => {
//     try {
//         const products = await Product.find();
//         res.status(200).json({
//             status: 'success',
//             count: products.length,
//             data: products
//         });
//     } catch (error) {
//         res.status(500).json({
//           status: 'fail',
//           message: error.message
//         });
//     }
// });

// app.get('/api/products/:id', async(req, res) => {
//     try {
//         const { id } = req.params;
//         // const product = await Product.findById(req.params.id);
//         const product = await Product.findById(id);
//         res.status(200).json({
//             status: 'success',
//             data: product
//         });
//     } catch (error) {
//         res.status(500).json({
//           status: 'fail',
//           message: error.message
//         });
//     }
// });

// app.put('/api/products/:id', async(req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if (!product) {
//             return res.status(404).json({
//                 status: 'fail',
//                 message: 'Product not found'
//             });
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json({
//             status: 'success',
//             data: updatedProduct
//         });
//     } catch (error) {
//         res.status(500).json({
//           status: 'fail',
//           message: error.message
//         });
//     }
// });

// app.delete('/api/products/:id', async(req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if (!product) {
//             return res.status(404).json({
//                 status: 'fail',
//                 message: 'Product not found'
//             });
//         }
//         res.status(200).json({
//             status: 'success',
//             message: "Product deleted successfully"
//         });
//     } catch (error) {
//         res.status(500).json({
//           status: 'fail',
//           message: error.message
//         });
//     }
// });

mongoose
    .connect(
        'mongodb+srv://solaiman0168:xIattLckPtHwTCWq@backenddb.asvsw.mongodb.net/MongodbCRUD?retryWrites=true&w=majority&appName=BackendDB'
    )
    .then(() => {
        console.log('Connected to Database!');
    })
    .catch((err) => {
        console.log('Connection failed!', err);
    });
