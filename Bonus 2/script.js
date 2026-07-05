// Utilizza la libreria dayjs per formattare la data di nascita nel formato giorno/mese/anno.
// Esempio di output atteso con formattazione
//  Data di nascita dello chef: 15/06/1990

async function getChefBirthday(id) {
    const recipeRes = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipe = await recipeRes.json();
    const chefRes = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
    const chef = await chefRes.json();
    const formataChefBirthDate = dayjs(chef.birthDate).format("DD/MM/YYYY");
    return formataChefBirthDate;
}

(async () => {
    try{
        const birthday = await getChefBirthday(1);
        console.log("data di nascita dello chef", birthday);
    }catch(error){
        console.error(error);
    }
})();