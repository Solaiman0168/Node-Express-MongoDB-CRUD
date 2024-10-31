const express = require('express')
const app = express()
// Using Node.js `require()`
const mongoose = require('mongoose');

// Using ES6 imports
import mongoose from 'mongoose';

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => { 
    res.send('Hello from Node Api server');
});

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));