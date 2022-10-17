document.querySelector("button").addEventListener("click", findTheRecipe);

function findTheRecipe() {
  const inputValue = document.querySelector("input").value;

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then((res) => res.json())
    .then((data) => {

      for (let i = 0; i < data.length; i++) {
        let theInstructions = document.getElementById('instructions')
        let theMealName = document.getElementById('mealName')

        theMealName.innerText = `${data.meals[i].strMeal}`
        theInstructions.innerText = `This is recipe: ${data.meals[i].strInstructions}`;
       

        let secondUrl = `https://api.spoonacular.com/recipes/random?apiKey=c2c8fa39ba3c4ec491ea56bb5c949fca`;
        let randomRecipes = document.querySelector("h3");
        
        console.log(data)

        fetch(secondUrl)
          .then((res) => res.json())
          .then((data2) => {
            console.log(data2);
            randomRecipes.innerText = `${data2}`;
            console.log(data);
          });
      }
    })

    // find similar recipes to the one from the input

    .catch((err) => {
      console.log(`err ${err}`);
    });
}

findTheRecipe();
