const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

//Iniciando APP
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi');

requireDir('./src/models');

const Product = mongoose.model('Product');

app.get('/', (req, res) => {
    Product.create({
        title: 'React',
        description: 'building',
        url: 'https://github.com'
    });
    
    return res.send('Hello MY OLD FRIE');
});

app.listen(3001);


