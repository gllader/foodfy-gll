// const receitas = require('../data');
const data = require("../data.json");
const fs = require("fs");

// Mostrar a lista de receitas
exports.index = (req, res) => {
  res.render("admin/recipes", { recipe: data.recipes });
};

// Exibir detalhes de uma receita
exports.show = (req, res) => {
  const { id } = req.params;
  const foundRecipe = data.recipes.find((recipe) => {
    return recipe.id == id;
  });

  if (!foundRecipe) return res.send("recipe not found! show");

  const recipe = {
    ...foundRecipe,
  };

  return res.render("admin/id", { recipe });
};

// Mostrar formulário de nova receita
exports.create = (req, res) => {
  return res.render("admin/create");
};

// Cadastrar nova receita
exports.post = (req, res) => {
  const keys = Object.keys(req.body);

  for (let key of keys) {
    if (req.body[key] == "") {
      res.send("please fill all fields");
    }
  }

  let { image, ingredients, preparations, information } = req.body;

  const id = data.recipes.length + 1;

  data.recipes.push({
    image,
    ingredients,
    preparations,
    information,
    id: Number(id),
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("write file error");

    return res.redirect("/admin/recipes");
  });
};

//form edit
exports.edit = (req, res) => {
  const { id } = req.params;
  const foundRecipe = data.recipes.find((recipe) => {
    return recipe.id == id;
  });

  if (!foundRecipe) return res.send("Recipe not found! edit");

  const recipe = {
    ...foundRecipe,
  };

  return res.render("admin/edit", { recipe });
};

//editar
exports.put = (req, res) => {
  const { id } = req.body;
  // let index = 0;
  const foundRecipe = data.recipes.find((recipe, foundIndex) => {
    if (id == recipe.id) {
      index = foundIndex;
      return true;
    }
  });

  if (!foundRecipe) return res.send("recipe not found! put");

  // console.log(id)

  const recipe = {
    ...foundRecipe,
    ...req.body,
    id: Number(req.body.id),
  };

  data.recipes[index] = recipe;

  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) res.send("Write File error");

    res.redirect(`/admin/recipes/${id}`);
  });
};

exports.delete = (req, res) => {
  const { id } = req.body;

  const filteredRecipes = data.recipes.filter((recipe) => {
    return recipe.id != id;
  });

  data.recipes = filteredRecipes;
  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send("write file error");
  });

  return res.redirect("/recipes");
};
//edit
// const {id} = req.params;
//     const foundRecipe = data.recipes[id];

//     let recipe = {
//         ...foundRecipe
//     }

// exports.put = (req, res) =>{
//     const {id} = req.body;
//     let index = 0;
//     const foundRecipe = data.recipes.find((recipe) =>{
//        return recipe.id = id;
//     });

//     if(!foundRecipe) return res.send('recipe not found');

//     console.log(id)

//     const recipe = {
//         ...foundRecipe,
//         ...req.body
//     }

//     console.log(recipe)

//     data.recipes[id] = recipe;

//     fs.writeFile('data.json', JSON.stringify(data, null, 2),(err)=>{
//         if(err) res.send('Write File error')

//         res.redirect('/admin/recipes');
//     })

// };
