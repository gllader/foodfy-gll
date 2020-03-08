const express = require('express');
const nunjucks = require('nunjucks')
const server = express();
const PORT = 5000;
const receitas = require('./data')

server.set('view engine', 'njk');
server.use(express.static('public'))

nunjucks.configure('views', {
    express: server,
    noCache: true
})

server.get('/', (req, res)=>{
    res.render('home', {receitas});
})

server.get('/recipes', (req, res)=>{
    res.render('recipes', {receitas})
})

server.get('/recipes/:id', (req, res)=>{
    const recipeId = req.params.id;   
    const recipes = receitas[recipeId];
    res.render('id', {recipes} )
})

server.get('/about', (req, res)=>{
    res.render('about');
})

server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
