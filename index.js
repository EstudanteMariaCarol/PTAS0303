const express = require('express');
const { UPSERT } = require('sequelize/types/query-types');
//const { usuario } = require('./models');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'))

app.get('/', async function(req, res){
//  var resultado = await usuario.findAll();
//  res.json(resultado);
});

app.get('/autenticar', async function(req, res){
  res.render("autenticar")
  });

app.get('/inscricao', async function(req, res){
  res.render("inscricao")
  });

app.post('/logar',function(req, res){
  const usuario = req.body.usuario;
  const senha = req.body.senha;


  if(usuario == "carol" && senha == "1234"){
    req.send("Autenticado")
  }else{
    req.send("Não Autenticado")
  }

  });

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta http://localhost:3000 !')
});