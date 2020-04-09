const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", () => {
    const cardId = card.getAttribute("id");
    window.location.href = `http://localhost:5000/recipes/${cardId}`;
  });
}

const buttons = document.querySelectorAll(".button");

for (let button of buttons) {
  button.addEventListener("click", () => {
    const option = button.nextElementSibling;
    if (button.innerHTML == "Esconder") {
      option.classList.add("hide");
      button.innerHTML = "Mostrar";
    } else {
      option.classList.remove("hide");
      button.innerHTML = "Esconder";
    }
  });
}

function addIngredient() {
  const ingredients = document.querySelector("#ingredients");
  const fieldContainer = document.querySelectorAll(".ingredient");

  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;

  // Deixa o valor do input vazio
  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

document
  .querySelector(".add-ingredient")
  .addEventListener("click", addIngredient);

function addPreparation() {
  const preparations = document.querySelector("#preparations");
  const fieldContainerPrep = document.querySelectorAll(".preparation");

  // Realiza um clone do último preparation adicionado
  const newField = fieldContainerPrep[fieldContainerPrep.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;

  // Deixa o valor do input vazio
  newField.children[0].value = "";
  preparations.appendChild(newField);
}

document
  .querySelector(".add-preparation")
  .addEventListener("click", addPreparation);

const formDelete = document.querySelector('.form-delete');
formDelete.addEventListener("submit", function(event){
  const confirmation = confirm("Deseja deletar?");
  if(!confirmation){
    event.preventDefault()
  }
})