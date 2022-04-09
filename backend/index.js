const express = require('express');
const cors =require('cors');

const app =express();

const products = require('./products');

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send('Welcome dadhichi dev hitaye..')
});
app.get('/products', (req,res)=>{
    res.send(products)
});


app.listen(5000,console.log('Server is running..'))
