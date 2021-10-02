//Pulling date from two API's and showcasing them together where the user would assume is one piece

function createFact(){
  let outside

  fetch('https://catfact.ninja/fact?max_length=100')
    .then(res => res.json())
    .then(data => {
      let fact = data.fact
      console.log(data)

      //Thankfully their basic random search bypasses the need to use the API key I was given from the site

      fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(data => {
          //putting this inside of the cat picture
          let catPic = data[0].url

          let catText = fact.split(' ').join('_')
          catText = fact.split('?').join('~q')
          catText += '.jpg'
          let apiLink = `https://api.memegen.link/images/custom/_/${catText}?background=${catPic}`

          fetch(apiLink)
            .then(res => res.blob())
            .then(img => {
              outside = URL.createObjectURL(img)
              document.querySelector('img').src = outside
            })
            .catch(err => {
              console.log(`error ${err}`)
            })
        })
        .catch(err => {
          console.log(`error ${err}`)
        })
    })
    .catch(err => {
      console.log(`error ${err}`)
    })

}

createFact()