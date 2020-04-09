const express = require('express');
const routes = express.Router();
const recipes = require('./controllers/recipes');
const receitas = require('./data');


routes.get('/', (req, res)=>{
    res.render('home', {receitas});
});

routes.get('/about', (req, res)=>{
    res.render('about');
});

routes.get('/recipes', (req, res)=>{
    res.render('recipes', {receitas});
});

routes.get('/recipes/:id', (req, res)=>{
    const recipeId = req.params.id;   
    const recipes = receitas[recipeId];
    res.render('id', {recipes} )
});
// ROTAS ADMIN
routes.get('/admin/recipes', recipes.index);
routes.get('/admin/recipes/create', recipes.create);
routes.get('/admin/recipes/:id', recipes.show);
routes.get('/admin/recipes/:id/edit', recipes.edit);

routes.post("/admin/recipes", recipes.post);
routes.put('/admin/recipes', recipes.put);
routes.delete('/admin/recipes', recipes.delete);

module.exports = routes;