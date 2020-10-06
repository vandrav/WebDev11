const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    resultHeading = document.getElementById('result-heading'),
    cocktails = document.getElementById('cocktails'),
    singleCocktail = document.getElementById('single-cocktail')
URL_COCKTAILS_NAMES = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
URL_RANDOM_COCKTAILS = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

// let numere = [1, 2, 5, 8, 10];
// console.log(numere.join(' '));

// console.log(submit);

function searchCocktail(e) {
    e.preventDefault();

    const word = search.value;

    if (!word) {
        alert('Please add a cocktail');
    }
    else {
        fetch(URL_COCKTAILS_NAMES + word)
            .then(res => res.json())
            .then(data => {
                resultHeading.innerHTML = `
                        <h2>Search results for "${word}":</h2>
                    `;

                if (data.drinks === null) {
                    resultHeading.innerHTML = `
                        <h2>Please add a valid name</h2>
                    `;
                }
                else {
                    cocktails.innerHTML = data.drinks.map(drink =>
                        `
                            <div class="cocktail">
                                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}"/>
                                <div class="cocktail-info" id="${drink.idDrink}">
                                    <h3>${drink.strDrink}
                                </div>
                                    <p></p>
                            </div>
                        `).join("");
                }
            });
    }
}

function addCocktailToDOM(cocktail) {
    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
        // console.log(cocktail[`strIngredient${i}`]);
        if (cocktail[`strIngredient${i}`]) {
            ingredients.push(cocktail[`strIngredient${i}`]);
        }
        else {
            break;
        }
    }
    // console.log(ingredients);
    singleCocktail.innerHTML = `
        <div class="single-cocktail">
            <h1>${cocktail.strDrink}</h1>
            <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
            <div>
                <h5>Ingredients</h5>
                <ul>
                    ${ingredients.map(ing => `<li>${ing}</li>`).join("")}
                </ul>
            </div>
        </div>
    `;

}

function randomCocktail() {
    fetch(URL_RANDOM_COCKTAILS)
        .then(res => res.json())
        .then(data => {
            // console.log(data.drinks[0]);
            const cocktail = data.drinks[0];
            addCocktailToDOM(cocktail);
        });

}

submit.addEventListener('submit', searchCocktail);
random.addEventListener('click', randomCocktail);