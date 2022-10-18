document.querySelector("button").addEventListener("click", findTheRecipe);

function findTheRecipe() {
  const inputValue = document.querySelector("input").value;

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then((res) => res.json())
    .then((data) => {

      for (let i = 0; i < data.meals.length; i++) {
        let theInstructions = document.getElementById('instructions')
        let theMealName = document.getElementById('mealName')
        
        theMealName.innerText = `${data.meals[i].strMeal}`
        theInstructions.innerText = `This is recipe: ${data.meals[i].strInstructions}`;
      
    
        let secondUrl = `https://api.unsplash.com/search/photos?query=${data.meals[i].strTags}&client_id=_baZTx44MDM2d9AUZAsaUqbp6_SlevRviuHi2GUWkzQ`;
       
        
      //  api to populate recipe photo

        fetch(secondUrl)
          .then((res) => res.json())
          .then((data2) => {
            // debugger
            // console.log(data2)
            document.querySelector("img").src = data2.results[i].urls.thumb
          });
      }
    })

    // find similar recipes to the one from the input

    .catch((err) => {
      console.log(`err ${err}`);
    });
}
