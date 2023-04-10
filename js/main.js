document.querySelector('button').addEventListener('click', getPairing)
let image = document.querySelector('img')

function getPairing(){
    let selection = document.querySelector('input').value
    const urlPairing = `https://api.spoonacular.com/food/wine/dishes?apiKey=b12512700e01402ea758ebb53ccb8b69&wine=${selection}`

fetch(urlPairing)
.then(res => res.json()) // parse response as JSON
.then(dataPairing => {
console.log(dataPairing)
let dishImage = dataPairing.pairings[1]

document.querySelector('h2').innerText = dataPairing.text


const apiKey ='9yiVZX8RhLUscqj6f4PgH27QtnHKemQgMInTOghkW4LyNcUx5lHuUm1N';

fetch(`https://api.pexels.com/v1/search?query=${dishImage}`, {
  headers: {
    'Authorization': apiKey
  }
})

.then(res => res.json()) // parse response as JSON
.then(dataDishImage => {
console.log(dataDishImage)

document.querySelector('img').src = dataDishImage.photos[0].src.medium




})

.catch(err => {
console.log(`error ${err}`)
});



})

.catch(err => {
console.log(`error ${err}`)
});

}