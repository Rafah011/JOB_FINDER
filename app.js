const express = require('express');
const app = express();
const db = require('./db/connection');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Esta funcionando na porta ${PORT}`);
});

// DB Connection

db
    .authenticate()
    .then(() => {
        console.log('Conectou com o banco com sucesso');
    })
    .catch(err => {
        console.log('Ocorreu um erro ao tentar se conectar', err);
    });

// Routes

app.get('/', (req, res) => {
    res.send('Funcinando')
});