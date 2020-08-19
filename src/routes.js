const express = require('express');
const routes = express.Router();
const recipes = require('./app/controllers/recipes');
const guest = require('./app/controllers/guest')
const chefs = require('./app/controllers/chefs')

//ROTAS GUEST
routes.get('/', guest.index);
routes.get('/about', guest.about);
routes.get('/recipes', guest.list);
routes.get('/recipes/:id', guest.id);


// ROTAS ADMIN RECIPES
routes.get('/admin/recipes', recipes.index);
routes.post("/admin/recipes", recipes.post);
// routes.get('/admin/recipes/create', recipes.create);
// routes.get('/admin/recipes/:id', recipes.show);
// routes.get('/admin/recipes/:id/edit', recipes.edit);

//ROTAS ADMIN CHEFS
routes.get('/admin/chefs', chefs.index);
routes.get('/admin/chefs/create', chefs.create);
routes.get('/admin/chefs/edit', chefs.edit);
routes.post('/admin/chefs', chefs.post);
routes.get('/admin/chefs/:id', chefs.show);


// routes.put('/admin/recipes', recipes.put);
// routes.delete('/admin/recipes', recipes.delete);

module.exports = routes;