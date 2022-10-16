document.querySelector('button').addEventListener('click', getCharacter)

function getCharacter() {
    let names = document.querySelector('input').value
    fetch(`https://rickandmortyapi.com/api/character/?name=${names}`)
    .then(res => res.json())
    .then(data => {
    console.log(data)
       
       for(let i = 0; i < 20 ; i++){
        document.querySelector('h2').innerText = data.results[i].name
        console.log(data.results[i].name)
        document.querySelector('#status').innerText = data.results[i].status
       document.querySelector('#species1').innerText = data.results[i].species
       document.querySelector('#pic').src = data.results[i].image
    
       fetch(`https://pokeapi.co/api/v2/pokemon/ditto`) 
         .then(res => res.json())
         .then(data => {
      console.log(data)
     
        let spec = data.species.name
        console.log(spec)

       document.querySelector('#spec').innerText = spec
    
 })
.catch(err => { 
    console.log(`error ${err}`)
})
        }
    
})
.catch(err => { 
    console.log(`error ${err}`)

})
}

//https://api.giphy.com/v1/gifs/search?api_key=I1JzTmVVeIoDc3dFunBjTUVdrGAuW8mL&q=${names}&limit=25&offset=0&rating=g
// or use cocktail api
// www.thecocktaildb.com/api/json/v1/1/random.php

