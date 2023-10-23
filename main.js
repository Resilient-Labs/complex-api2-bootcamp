const catApiUrl = "https://api.thecatapi.com/v1/images/search";
const dogApiUrl = "https://dog.ceo/api/breeds/image/random";

const catButton = document.getElementById("generate-cat");
const dogButton = document.getElementById("generate-dog");
const imageContainer = document.getElementById("image-container");
const randomImage = document.getElementById("random-image");

catButton.addEventListener("click", generateCat);
dogButton.addEventListener("click", generateDog);

function generateCat() {
  fetch(catApiUrl)
    .then((response) => response.json())
    .then((data) => {
      const catImageUrl = data[0].url;
      displayImage(catImageUrl);
    })
    .catch((error) => console.error("Error fetching cat image:", error));
}

function generateDog() {
  fetch(dogApiUrl)
    .then((response) => response.json())
    .then((data) => {
      const dogImageUrl = data.message;
      displayImage(dogImageUrl);
    })
    .catch((error) => console.error("Error fetching dog image:", error));
}

function displayImage(imageUrl) {
  randomImage.src = imageUrl;
  imageContainer.style.display = "block";
}
