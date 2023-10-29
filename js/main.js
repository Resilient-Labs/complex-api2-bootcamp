//https://www.themealdb.com/api.php
//https://spoonacular.com/food-api/docs#Get-Similar-Recipes

// Selecting HTML elements using their IDs and classes
const generateMealButton = document.getElementById('generateMeal') 
const similarButton = document.getElementById('similarButton') 
const mealNameElement = document.getElementById('mealName') 
const ingredientsListElement = document.getElementById('ingredientsList') 
const mealImageElement = document.getElementById('mealImage') 
const similarDiv = document.getElementById('similarDiv') 
let similarRecipesLoaded = false  // Track if similar recipes are loaded
let currentMeal = null  // Store the current meal data

// Hide the meal image element by default
mealImageElement.style.display = 'none' 

generateMealButton.addEventListener('click', generateRandomMeal) 
similarButton.addEventListener('click', findSimilarRecipes) 

// Function to generate a random meal
async function generateRandomMeal() {
    try {
        // Fetch a random meal from the meal database API
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php') 
        const data = await response.json() 
        currentMeal = data.meals[0]  // Store the current meal data
        displayMealDetails(currentMeal) 

        // Reset similar recipes status when a new meal is generated
        similarRecipesLoaded = false 
    } catch (error) {
        console.error('Error fetching random meal:', error) 
    }
}

// Function to display meal details on the webpage
function displayMealDetails(meal) {
    mealNameElement.textContent = meal.strMeal 

    // Display the meal image element after generating a random meal
    mealImageElement.style.display = 'block' 
    mealImageElement.src = meal.strMealThumb 

    // Clear previous ingredients
    ingredientsListElement.innerHTML = '' 

    // Display ingredients
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`] 
        const measure = meal[`strMeasure${i}`] 
        if (ingredient) {
            const listItem = document.createElement('li') 
            listItem.textContent = `${ingredient} - ${measure || 'N/A'}` 
            ingredientsListElement.appendChild(listItem) 
        } else {
            break 
        }
    }
}

// Function to find similar recipes based on the current meal's ingredients
function findSimilarRecipes() {
    // Show similar recipes only if they are not already loaded and a current meal exists
    if (!similarRecipesLoaded && currentMeal) {
        const ingredients = getIngredientsFromMeal(currentMeal) 
        const ingredientList = ingredients.join(',') 

        // Fetch similar recipes from the Spoonacular API using the meal's ingredients
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=3dcdc326370c47db9ec568f5eaf5137f&ingredients=${encodeURIComponent(ingredientList)}`)
            .then(response => response.json())
            .then(data => {
                displaySimilarRecipes(data) 
                similarRecipesLoaded = true 
            })
            .catch(error => {
                console.error('Error fetching similar recipes:', error) 
                similarDiv.textContent = 'Error fetching similar recipes. Please try again later.' 
            }) 
    }
}

// Function to extract ingredients from the current meal
function getIngredientsFromMeal(meal) {
    const ingredients = [] 
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`] 
        if (ingredient) {
            ingredients.push(ingredient) 
        } else {
            break 
        }
    }
    return ingredients 
}

// Function to display similar recipes on the webpage
function displaySimilarRecipes(similarRecipes) {
    similarDiv.innerHTML = '' 

    if (similarRecipes && similarRecipes.length > 0) {
        const ul = document.createElement('ul') 
        similarRecipes.forEach(recipe => {
            const li = document.createElement('li') 
            li.textContent = recipe.title 
            ul.appendChild(li) 
        }) 
        similarDiv.appendChild(ul) 
    } else {
        similarDiv.textContent = 'No similar recipes found.' 
    }
}
