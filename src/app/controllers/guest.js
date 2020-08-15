const receitas = require('../../data');

exports.index = (req, res)=>{
  return res.render("guest/home", {receitas});
};

exports.about = (req, res)=>{
  res.render('guest/about');
};

exports.list = (req, res)=>{
  res.render('recipes', {receitas});
};

exports.id = (req, res)=>{
  const recipeId = req.params.id;   
  const recipes = receitas[recipeId];
  res.render('guest/id', {recipes} )
};