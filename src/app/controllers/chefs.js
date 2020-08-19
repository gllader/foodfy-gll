const Chef = require('../models/Chef');


exports.index = (req, res) => {
  Chef.all((chefs)=>{
    return res.render('chefs/index', {chefs})
  })
};

exports.create = (req, res) => {
  return res.render("chefs/create");
};

exports.edit = (req, res) => {
  return res.render("chefs/edit");
};

exports.show = (req, res) =>{
  const {id} = req.params;
  Chef.find(id, (chef)=>{
    return res.render(`chefs/show`, {chef})
  });

};



exports.post = (req, res)=> {
  Chef.create(req.body, (chef)=>{
    res.redirect(`admin/chefs/`)
  })
}