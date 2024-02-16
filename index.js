/* Express lib (library(biblioteca)) */
const express = require('express');
/* Função do express */
const app = express();
/* Caminho relativo */
const path = require('path');
/* Criando rotas */
const router = express.Router();



app.use(express.static(path.join(__dirname, 'public', )));
app.use(express.static(path.join(__dirname,'public', 'css')));



/* Criando função da rota */
router.get('/index2', function(req, res){
    res.sendFile(path.join(__dirname,  'public', 'index', 'index.html'));
    
    console.log(__dirname);
    console.log("index");
});

router.get('/sobreee', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'index', 'sobre.html'));
});



router.get('/contato', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'index', 'contato.html'));
});



app.use('/', router);
app.listen(process.env.port || 3000);

console.log("Server em funcionamento")