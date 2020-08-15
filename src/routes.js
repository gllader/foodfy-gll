const express = require('express');
const routes = express.Router();
const recipes = require('./app/controllers/recipes');
const guest = require('./app/controllers/guest')
const receitas = require('./data');

//ROTAS GUEST
routes.get('/', guest.index);
routes.get('/about', guest.about);
routes.get('/recipes', guest.list);
routes.get('/recipes/:id', guest.id);


// ROTAS ADMIN
routes.get('/admin/recipes', recipes.index);
routes.get('/admin/recipes/create', recipes.create);
routes.get('/admin/recipes/:id', recipes.show);
routes.get('/admin/recipes/:id/edit', recipes.edit);

routes.post("/admin/recipes", recipes.post);
routes.put('/admin/recipes', recipes.put);
routes.delete('/admin/recipes', recipes.delete);

module.exports = routes;