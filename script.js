// document.querySelector("button").addEventListener("click", getLove);

// function getLove(){
// let names = document.getElementById("inputname").value
// let names2 = document.getElementById("inputname2").value
// console.log(names)
// let url = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${names}&sname=${names2}`;

//   const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
//         'X-RapidAPI-Key': '33b8442f0amsh8a1d74649b4471bp13e100jsne2ea3d6922c8'
//     }
// };

// fetch(url, options)
// .then(response => response.json())
// .then(love => {
//   console.log(love)
//   document.querySelector('h2').innerText = love.percentage
//   document.querySelector('h3').innerText = love.result
// })
// .catch(err => {
//     console.log(`error ${err}`)
// });
// }

document.querySelector("button").addEventListener("click", getLove);

function getLove(){
let names = document.getElementById("inputname").value
let names2 = document.getElementById("inputname2").value
console.log(names)
let url = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${names}&sname=${names2}`;

  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
        'X-RapidAPI-Key': '33b8442f0amsh8a1d74649b4471bp13e100jsne2ea3d6922c8'
    }
};

fetch(url, options)
.then(response => response.json())
.then(love => {
  console.log(love)
  document.querySelector('h2').innerText = love.percentage
  document.querySelector('h3').innerText = love.result

let lovePercent = love.percentage
fetch(`https://acnhapi.com/v1a/villagers/`)
.then(response => response.json())
.then(villager => {
  console.log(villager)
  document.querySelector('h4').innerText = villager[lovePercent].name["name-USen"]
  document.querySelector('img').src = villager[lovePercent].image_uri
})
.catch(err => {
    console.log(`error ${err}`)
});
})
}

