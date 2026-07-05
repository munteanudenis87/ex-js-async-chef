// Attualmente, se la prima richiesta non trova una ricetta, la seconda richiesta 
// potrebbe comunque essere eseguita causando errori a cascata.

//  Modifica getChefBirthday(id) per intercettare eventuali errori prima di 
// fare la seconda richiesta.

async function getChefBirthday(id) {
    let recipe;
    try{
        const recipeRes = await fetch(`https://dummyjson.com/recipes/${id}`);
        recipe = await recipeRes.json();
    }catch(error){
        console.error(error);
        throw new Error(`Ricetta con in ${id} non recuperata`);
    }
    if(recipe.message){
        throw new Error(recipe.message);
    }
    let chef;
    try{
        const chefRes = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
        chef = await chefRes.json();
    }catch(error){
        console.error(error);
        throw new Error(`Chef con in ${id} non recuperato`);
    }
    if(chef.message){
        throw new Error(chef.message);
    }
    
    return chef.birthDate;
}

(async () => {
    try{
        const birthday = await getChefBirthday(1);
        console.log("data di nascita dello chef", birthday);
    }catch(error){
        console.error(error);
    }
})();