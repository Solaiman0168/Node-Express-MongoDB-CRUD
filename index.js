const express = require('express');
// const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect.js');

dbConnect();

const app = express();

//All below are Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productRoutes = require('./routes/product.route.js');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

//Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 7002
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello from Node Api server Updated');
});

