

document.querySelector("button").addEventListener('click', recipe);

function recipe() {
  let inputValue = document.querySelector("input");
  let theInstructions = document.querySelector('h2')
//   CORS error
  fetch(`www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
        theInstructions.innerText = `${data.meals.strInstructions}`


      
        let secondUrl = `https://api.spoonacular.com/recipes/random?apiKey=c2c8fa39ba3c4ec491ea56bb5c949fca`;
        let randomRecipes = document.querySelector('h3')
        fetch(secondUrl)
    
      
        .then((res) => res.json())
        .then((data2) => {
          console.log(data2);
          randomRecipes.innerText = `${data2}`

        });

    })
    

    .catch((err) => {
      console.log(`err ${err}`);
    });
}

recipe();

// //
