let button = document.querySelector('button').addEventListener('click', getWord)

function getWord() {
  let userInput = document.querySelector('input').value
  let url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=47faad71-9f89-429d-87ad-99e4fef487d0`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = 'Definition: ' + data[0].shortdef[0]

      let urlSecond = `https://random-data-api.com/api/v2/beers`
      fetch(urlSecond)
        .then(res => res.json())
        .then(beer => {
          if(data[0].fl != 'verb'){
          document.querySelector('h3').innerText = 'Beer Name: ' + beer.name
          document.querySelector('h4').innerText = 'Brand: ' + beer.brand
          document.querySelector('h5').innerText = 'Alcohol: ' + beer.alcohol
          document.querySelector('h6').innerText = beer.style + ' | ' + beer.ibu
          } else {
            document.querySelector('h3').innerText = '' 
            document.querySelector('h4').innerText = '' 
            document.querySelector('h5').innerText = '' 
            document.querySelector('h6').innerText = ''
            alert('This is a verb! No beer for you')
          }
        })

        .catch(err => {
          console.log(`error ${err}`)
        })
    })
    .catch(err => {
      console.log(`error ${err}`)
    })

}