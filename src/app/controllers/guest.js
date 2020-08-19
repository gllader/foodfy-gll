const Guest = require('../models/Guest')

exports.index = (req, res)=>{
  Guest.list((recipes)=>{
  return res.render("guest/home", {recipes});
  })
};

exports.about = (req, res)=>{
  res.render('guest/about');
};

exports.list = (req, res)=>{
  Guest.list((recipes)=>{
    res.render('guest/recipes', {recipes});
  })
};

exports.id = (req, res)=>{
  Guest.list((recipes)=>{
    const { id } = req.params;
    recipes = recipes[id];
    res.render('guest/id', {recipes})
  })
};