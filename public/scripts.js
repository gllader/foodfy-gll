const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener('click', ()=>{
        const cardId = card.getAttribute('id')
        window.location.href = `http://localhost:5000/recipes/${cardId}`        
    })
}


const buttons = document.querySelectorAll('.button')

for(let button of buttons){
    button.addEventListener('click', ()=>{
        const ingredients = document.querySelector('.recipe');
        ingredients.classList.add('hide'); 
    })
}

