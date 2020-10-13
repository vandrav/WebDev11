$(document).ready(showMenu);


// folosim o functie care genereaza continutul paginii indexs.html

function showMenu() {
    fetch("https://restaurant-menu-v1.firebaseio.com/.json")
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            let menu = data.menu;
            // console.log(menu);
            let output = `
                        <tr >
                            <td id="preparat">Meal</td>
                            <td>Ingredients</td>
                            <td>Recipe</td>
                        </tr>
                        `;

            $.each(menu, (index, meal) => {
                output += `
                        <tr >
                            <td id="preparat">${meal.nume} <img src="${meal.imagine}"></td>
                            <td>${meal.ingrediente}</td>
                            <td><a onclick="showRecipe('${index}')" class="btn btn-primary" href="#">Details</a></td>
                        </tr>
                `;
            })

            $('.menu table').html(output)
        })
        .catch((err) => console.log(err));
}

//creem o functie care v-a fi folosita la click pe details care ne va duce la pagina cu reteta dorita

function showRecipe(id) {
    sessionStorage.setItem('recipeId', id);
    window.location = 'details.html';
    // return false;
}

//creem o functie care v-a fi folosita pentru a popula pagina details.html a retetei selectate

function getRecipe() {
    let recipeId = sessionStorage.getItem('recipeId');

    fetch("https://restaurant-menu-v1.firebaseio.com/.json")
        .then((response) => response.json())
        .then((data) => {
            let recipe = data.menu[recipeId];
            // console.log(recipe);
            let output = `
                        <div class="details">
                            <h1>${recipe.nume}</h1>
                            <img src="${recipe.imagine}">
                        </div>
                        <div class="details">
                            <ul class="recipe-details>
                                <li class="recipe-prop">
                                    
                                </li>
                                <li class="recipe-prop">
                                    <h2>Ingredients</h2>
                                    <p>${recipe.ingrediente}</p>
                                </li>
                                <li class="recipe-prop">
                                    <h2>Recipe</h2>
                                    <p>${recipe.reteta}</p>
                                </li>
                            </ul>
                        </div>
                        `;
            $('.container #recipe').html(output);
        })
        .catch((err) => console.log(err));
}