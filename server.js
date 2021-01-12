const express = require('express');
const app =express();

app.get('/', (req, res)=>{
    res.status(200).send({ message: 'Ola mundo estou funcionando!'});
})

app.get('/ola', (req, res)=>{
    res.status(200).send({ message: 'Ola eu sou o caminho ola!'});
})

app.listen(3001, () => {
    console.log('Api correndo na porta 3001');
})
