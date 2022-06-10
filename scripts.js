function toggleSelection(el){
    el.classList.toggle('selected');
    
    //classList[1] = food OU drink OU dessert
    // PERCORRER TODOS. SE CLASSES[1] = CLASSES[1] DO ELEMENTO CLICADO -> REMOVER SELECTED
    
    let food_items = document.querySelectorAll('.food-item');
    for(let i=0; i< food_items.length; i++){
        if (food_items[i] !== el){
            if (food_items[i].classList[1] === el.classList[1]){
                food_items[i].classList.remove('selected');
            }
        }
    }

}
