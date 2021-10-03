const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".searchResult");
const container = document.querySelector(".container");
// console.log(container)
let searchQuery = "";
const API_ID = "269c5ab6";
const API_key = "9ab8be9437ff621b39fe8a7001c603ce";


searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${API_ID}&app_key=${API_key}&from=0&to=6`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);
  console.log(data);
}

function generateHTML(results) {
  container.classList.remove("initial");
  let generatedHTML = "";
  results.map((result) => {
    generatedHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="secondContainer">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="viewBtn" target="_blank" href="${result.recipe.url
      }">View Recipe</a>
        </div>
        <p class="itemData">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="itemData">Diet label: ${result.recipe.dietLabels.length > 0
        ? result.recipe.dietLabels
        : "No Data Found"
      }</p>
        <p class="itemData">Health labels: ${result.recipe.healthLabels}</p>
      </div>
    `;
    //credit to Tamara H (mentor) for helping me understand recipe api's and helping me bring my idea to life via js//
  });
  searchResultDiv.innerHTML = generatedHTML;
}

