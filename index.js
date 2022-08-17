const express = require('express');
const { usuario } = require('./models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', async function(req, res){
//  var resultado = await usuario.findAll();
//  res.json(resultado);
});

app.get('/autenticar', async function(req, res){
  res.render("autenticar")
  });

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta http://localhost:3000 !')
});