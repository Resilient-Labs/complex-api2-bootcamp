//Goal: Use data returned from one api to make a request to another api and display the data returned
//Note: basically, the user would set off the first fetch to get whatever info, and based on that info they'd get, I plug that into the second fetch.

//CONCEPT BRAINSTORM: 1st API: have a pokemon input for pokemon name, which'll provide 1) pokemon image 2) pokemon abilities 3) pokemon image
//2nd API: urban dictionary: 1) I would take data.type from the pokemon API and place it in this fetch, to 2) have it return a UD term to match with the pokemon!


document.querySelector('button').addEventListener('click', getPokemon)


function getPokemon(){
  let pokemonName = document.getElementById('name').value.toLowerCase()
  // let ability = document.querySelector('#ability').value
  // let urbanTerm = document.querySelector('#urbanTerm').value 

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    console.log(data.abilities[0].ability.name)
    console.log(data.sprites.other["official-artwork"].front_default)
    document.querySelector('h2').innerText = data.name
    document.querySelector('h4').innerText = 'Ability is: ' + data.abilities[0].ability.name
    document.querySelector('img').src = data.sprites.other["official-artwork"].front_default

    fetch(`https://api.urbandictionary.com/v0/define?term=${data.abilities[0].ability.name}`)
  .then(res => res.json())
  .then(urbanData => {
    console.log(urbanData)
    document.querySelector('h3').innerText = urbanData.list[0].definition
    
    
    })
    
    })
   
    
  }






