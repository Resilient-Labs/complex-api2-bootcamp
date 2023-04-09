let btn = document.querySelector('#btn') 
let ageGuess = document.querySelector('h2')
let genderGuess = document.querySelector('h3')
let nameInput = document.querySelector('#name-input')

btn.addEventListener("click", () => {
  getAgeAndGender(nameInput.value);
}) 

function getAgeAndGender(name) { 
  let ageUrl = `https://api.agify.io?name=${name}` 
  let genderUrl = `https://api.genderize.io?name=${name}` 

  fetch(ageUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    ageGuess.innerText = `Age guess: ${data.age}`;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

  fetch(genderUrl) 
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    genderGuess.innerText = `Gender guess: ${data.gender}`;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
}
