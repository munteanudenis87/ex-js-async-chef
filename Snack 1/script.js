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

async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
}
async function getChefBirthday(id) {
    const recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`);
    const user = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`);
    return {...recipe, user};
}

getChefBirthday(1)
.then(recipe => console.log("data di nascita dello chef", recipe.user.birthDate))
.catch(error => console.error(error));