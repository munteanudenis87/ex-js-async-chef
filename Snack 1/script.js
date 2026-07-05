// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). 
// Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef
// 
// Note del docente
// Scrivi la funzione getChefBirthday(id), che deve:
// Essere asincrona (async).
// Utilizzare await per chiamare le API.
// Restituire una Promise con la data di nascita dello chef.
// Gestire gli errori con try/catch

async function getChefBirthday(id) {
    const recipeRes = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipe = await recipeRes.json();
    const chefRes = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
    const chef = await chefRes.json();
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