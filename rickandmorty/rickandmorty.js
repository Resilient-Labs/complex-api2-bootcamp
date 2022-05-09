// will and i worked on this one togther

document.querySelector('button').addEventListener('click', getCharacter)




function getCharacter() {
  let character = document.querySelector('input').value.toLowerCase()
  let url = `https://rickandmortyapi.com/api/character/${character}`

  fetch(url)
    .then(res => res.json()) 
    .then(data => {
      console.log(data)
      document.querySelector('img').src = data.image
      document.querySelector('h2').innerText = data.name

      document.querySelector('h3').innerText = data.location.name
    })
    .catch(err => {
      console.log(`error ${err}`)
    })

  let name = document.querySelector('h2').innerText

  fetch(`https://g.tenor.com/v1/search?q=${name}&key=1DUQNPXDT528`)
    .then(res => res.json()) 
    .then(data => {
      console.log(data)
      let gif = data.results[0].media[0].gif.url
      document.querySelector('#picture').src = gif
    })
    .catch(err => {
      ;`error ${err}`
    })
}


