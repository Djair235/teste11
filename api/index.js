const express = require('express');
const app = express();

// Defina suas rotas aqui
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Exporte a aplicação para que a Vercel possa gerenciar as requisições
module.exports = app;
