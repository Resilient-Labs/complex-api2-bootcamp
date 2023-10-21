//created a calorie thershold for self documentation (idea from mentor)
const calorieThreshold =  .05

//event listener once button is clicked runs the function 
document.querySelector('button').addEventListener('click', getExercise)


async function getExercise() {

    //we store the user input into a variable
    let selection = document.querySelector('input').value

    //here we fetch the url with a temporal literal holding the user input
    const response = await fetch(`https://api.api-ninjas.com/v1/caloriesburned?activity=${selection}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'hAoGs3orwUEiCqn2bVYqMw==LM0p5IHd336vqe6g'
        }
    });

    const data = await response.json();
    console.log(data)

        //here we wrote an error cather so if the user type a sport not in the api database we alert asking for another
        if(data.length === 0){
        alert("Enter Another Activity") 
    }

    //here we access the data duration_minuted and display it in our h3
    document.querySelector('h3').innerText = `Duration: ${data[0].duration_minutes} Minutes`

    //here we access the data total_calories and display it in our h4
    document.querySelector('h4').innerText = `Calories Burned: ${data[0].total_calories}`

    //using the calorie threshold we find certain foods either 5% above or 5% below the amount burned
    let minCalories = data[0].total_calories * (1.0 - calorieThreshold) 
    let maxCalories = data[0].total_calories * (1.0 + calorieThreshold)

    //we put both variables into the get recipe function
    getRecipe(minCalories, maxCalories)
}



function getRecipe(minCalories, maxCalories) {

    //here we use our two variables as parameters for a recipe
    const urlTwo = `https://api.spoonacular.com/recipes/findByNutrients?apiKey=917e6bc2ffac45c0946f49cfbed3bf61&minCalories=${minCalories}&maxCalories=${maxCalories}`

    fetch(urlTwo)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)

            //we then display the recipe title in the h5
            document.querySelector('h5').innerText = `Recipe: ${data[0].title}`

            //we then display the recipe image in the img tag
            document.querySelector('img').src = `${data[0].image}`
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}
