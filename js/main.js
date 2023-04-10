// GLOBALS

let pokemonName = document.querySelector('#pokemon-name')
let locate = document.querySelector('button')
let foodImage = document.querySelector('img')

// CLICK
locate.addEventListener('click', () => {

  let pokemonInput = document.querySelector('input').value
  // FETCH 1
  const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`
  fetch(pokeUrl)
    .then(res => res.json())
    .then(res => {
      const pokeData = res
      console.log(pokeData)

      //VARIABLES
      let pokeType = pokeData.types[0].type.name
      let pokeFood = pokeType == 'grass food' || pokeType == 'bug' ? 'grass'
      : pokeType == 'ground' || pokeType == 'rock' ? 'dirt food'
      : pokeType == 'flying' ? 'clouds food'
      : pokeType == 'ice' ? 'snow food'
      : pokeType == 'normal' ? 'dog treats'
      : pokeType == 'psychic' || pokeType == 'ghost' || pokeType == 'dark' ? 'aura food'
      : pokeType == 'fairy' ? 'desserts'
      : pokeType == 'fighting' ? 'protein bars'
      : pokeType == 'dragon' ? 'mana food'
      : pokeType == 'fire' ? 'peppers'
      : pokeType == 'electric' || pokeType == 'steel' ? 'wires'
      : pokeType == 'poison' ? 'chemicals'
      : pokeType == 'water' ? 'fish'
      : undefined;

      // FETCH 2
      const unsplashUrl = `https://api.unsplash.com/photos/random?query=${pokeFood}&client_id=tXmIOs6vkIHlpJq7Aj1MCnOfPbykwEvnbIA5by7M7UQ`
      fetch(unsplashUrl)
        .then(res => res.json())
        .then(res => {
          const photoData = res
          console.log(photoData)
          foodImage.src = photoData.urls.small
        })
    })
})

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

