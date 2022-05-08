
class Starship {

  constructor(name, model) {
    this.name = name;
    this.model = model;

    this.corvette = document.querySelector('#cr90Corvette').addEventListener('click', corvetteImages)

    this.starDestroyer = document.querySelector('#starDestroyer').addEventListener('click', starDestroyerImages)

    this.SentinelClass = document.querySelector('#SentinelClass').addEventListener('click', SentinelClassImages)

    this.deathStar = document.querySelector('#deathStar').addEventListener('click', deathStarImages)

    this.millenniumFalcon = document.querySelector('#millenniumFalcon').addEventListener('click', millenniumFalconImages)

    this.yWing = document.querySelector('#yWing').addEventListener('click', yWingImages)

    this.xWing = document.querySelector('#xWing').addEventListener('click', xWingImages)

    this.tieAdvanced = document.querySelector('#tieAdvanced').addEventListener('click', tieAdvancedImages)

    this.executor = document.querySelector('#executor').addEventListener('click', executorImages)

    this.rebelTransport = document.querySelector('#rebelTransport').addEventListener('click', rebelTransportImages)
  }
}

let cr90 = new Starship("CR90 corvette", "model: CR90");
let destroyer = new Starship("Star Destroyer", "model: Imperial I-class");
let sentinel = new Starship("Sentinel-class landing craft", "model: Imperial I-class");

// let activate = new Starship()

function corvetteImages() {

  // document.querySelectorAll('.slideShow').style.display = 'none'
  document.querySelector('#cr90Slide').style.display = 'block'
  document.querySelector('#starDestroyerSlide').style.display = 'none'
  document.querySelector('#SentinelClassSlide').style.display = 'none'
  document.querySelector('#deathStarSlide').style.display = 'none'
  document.querySelector('#millenniumFalconSlide').style.display = 'none'
  document.querySelector('#yWingSlide').style.display = 'none'
  document.querySelector('#xWingSlide').style.display = 'none'
  document.querySelector('#tieAdvancedSlide').style.display = 'none'
  document.querySelector('#executorSlide').style.display = 'none'
  document.querySelector('#rebelTransportSlide').style.display = 'none'

//   cr90Slide
// starDestroyerSlide
// SentinelClassSlide
// deathStarSlide
// millenniumFalconSlide
// yWingSlide
// xWingSlide
// tieAdvancedSlide
// executorSlide
// rebelTransportSlide
  

  // console.log(cr90.name)
  document.querySelector('h2').innerText = cr90.name.toUpperCase()
  document.querySelector('h3').innerText = cr90.model

  fetch('https://swapi.dev/api/people/')
  .then(res => res.json()) 
  .then(data => {

    let colorSelection = data.results[5].eye_color

  fetch(`https://x-colors.herokuapp.com/api/random/${colorSelection}`)
    .then(res => res.json()) 
    .then(dataTwo => {

      // console.log(dataTwo)

      colorBox = document.querySelector('.colorBox')
      colorBox.style.background = dataTwo.hex;
    })
    .catch(err => {
        console.log(`error ${err}`)
      })
})
.catch(err => {
  console.log(`error ${err}`)
});
}

function starDestroyerImages() {

  document.querySelector('#cr90Slide').style.display = 'none'
  document.querySelector('#starDestroyerSlide').style.display = 'block'
  document.querySelector('#SentinelClassSlide').style.display = 'none'
  document.querySelector('#deathStarSlide').style.display = 'none'
  document.querySelector('#millenniumFalconSlide').style.display = 'none'
  document.querySelector('#yWingSlide').style.display = 'none'
  document.querySelector('#xWingSlide').style.display = 'none'
  document.querySelector('#tieAdvancedSlide').style.display = 'none'
  document.querySelector('#executorSlide').style.display = 'none'
  document.querySelector('#rebelTransportSlide').style.display = 'none'

  // console.log(destroyer.name)
  document.querySelector('h2').innerText = destroyer.name.toUpperCase()
  document.querySelector('h3').innerText = destroyer.model

  fetch('https://swapi.dev/api/people/')
  .then(res => res.json()) 
  .then(data => {

    let colorSelection = data.results[5].eye_color

  fetch(`https://x-colors.herokuapp.com/api/random/${colorSelection}`)
    .then(res => res.json()) 
    .then(dataTwo => {

      // console.log(dataTwo)

      colorBox = document.querySelector('.colorBox')
      colorBox.style.background = dataTwo.hex;
    })
    .catch(err => {
        console.log(`error ${err}`)
      })
})
.catch(err => {
  console.log(`error ${err}`)
});
}

function SentinelClassImages() {

  document.querySelector('#cr90Slide').style.display = 'none'
  document.querySelector('#starDestroyerSlide').style.display = 'none'
  document.querySelector('#SentinelClassSlide').style.display = 'block'
  document.querySelector('#deathStarSlide').style.display = 'none'
  document.querySelector('#millenniumFalconSlide').style.display = 'none'
  document.querySelector('#yWingSlide').style.display = 'none'
  document.querySelector('#xWingSlide').style.display = 'none'
  document.querySelector('#tieAdvancedSlide').style.display = 'none'
  document.querySelector('#executorSlide').style.display = 'none'
  document.querySelector('#rebelTransportSlide').style.display = 'none'
  document.querySelector('h2').innerText = sentinel.name.toUpperCase()
  document.querySelector('h3').innerText = sentinel.model

  fetch('https://swapi.dev/api/people/')
  .then(res => res.json()) 
  .then(data => {

    let colorSelection = data.results[5].eye_color

  fetch(`https://x-colors.herokuapp.com/api/random/${colorSelection}`)
    .then(res => res.json()) 
    .then(dataTwo => {

      // console.log(dataTwo)

      colorBox = document.querySelector('.colorBox')
      colorBox.style.background = dataTwo.hex;
    })
    .catch(err => {
        console.log(`error ${err}`)
      })
})
.catch(err => {
  console.log(`error ${err}`)
});
}

function deathStarImages() {

  document.querySelector('#cr90Slide').style.display = 'none'
  document.querySelector('#starDestroyerSlide').style.display = 'none'
  document.querySelector('#SentinelClassSlide').style.display = 'none'
  document.querySelector('#deathStarSlide').style.display = 'block'
  document.querySelector('#millenniumFalconSlide').style.display = 'none'
  document.querySelector('#yWingSlide').style.display = 'none'
  document.querySelector('#xWingSlide').style.display = 'none'
  document.querySelector('#tieAdvancedSlide').style.display = 'none'
  document.querySelector('#executorSlide').style.display = 'none'
  document.querySelector('#rebelTransportSlide').style.display = 'none'

  fetch(`https://swapi.dev/api/starships/`)
    .then(res => res.json())
    .then(data => {

      document.querySelector('h2').innerText = data.results[3].name.toUpperCase()
      document.querySelector('h3').innerText = data.results[3].model
    })

    .catch(err => {
      console.log(`errors ${err}`)
    })

    fetch('https://swapi.dev/api/people/')
  .then(res => res.json()) 
  .then(data => {

    let colorSelection = data.results[5].eye_color

  fetch(`https://x-colors.herokuapp.com/api/random/${colorSelection}`)
    .then(res => res.json()) 
    .then(dataTwo => {

      // console.log(dataTwo)

      colorBox = document.querySelector('.colorBox')
      colorBox.style.background = dataTwo.hex;
    })
    .catch(err => {
        console.log(`error ${err}`)
      })
})
.catch(err => {
  console.log(`error ${err}`)
});
}

function millenniumFalconImages() {

  document.querySelector('#cr90Slide').style.display = 'none'
  document.querySelector('#starDestroyerSlide').style.display = 'none'
  document.querySelector('#SentinelClassSlide').style.display = 'none'
  document.querySelector('#deathStarSlide').style.display = 'none'
  document.querySelector('#millenniumFalconSlide').style.display = 'block'
  document.querySelector('#yWingSlide').style.display = 'none'
  document.querySelector('#xWingSlide').style.display = 'none'
  document.querySelector('#tieAdvancedSlide').style.display = 'none'
  document.querySelector('#executorSlide').style.display = 'none'
  document.querySelector('#rebelTransportSlide').style.display = 'none'

  fetch(`https://swapi.dev/api/starships/`)
    .then(res => res.json())
    .then(data => {

      document.querySelector('h2').innerText = data.results[4].name.toUpperCase()
      document.querySelector('h3').innerText = data.results[4].model
    })

    .catch(err => {
      console.log(`errors ${err}`)
    })

    fetch('https://swapi.dev/api/people/')
  .then(res => res.json()) 
  .then(data => {

    let colorSelection = data.results[5].eye_color

  fetch(`https://x-colors.herokuapp.com/api/random/${colorSelection}`)
    .then(res => res.json()) 
    .then(dataTwo => {

      // console.log(dataTwo)

      colorBox = document.querySelector('.colorBox')
      colorBox.style.background = dataTwo.hex;
    })
    .catch(err => {
        console.log(`error ${err}`)
      })
})
.catch(err => {
  console.log(`error ${err}`)
});
}

function yWingImages() {

  document.querySelector('#cr90Slide').style.display = 'none'
  document.querySelector('#starDestroyerSlide').style.display = 'none'
  document.querySelector('#SentinelClassSlide').style.display = 'none'
  document.querySelector('#deathStarSlide').style.display = 'none'
  document.querySelector('#millenniumFalconSlide').style.display = 'none'
  document.querySelector('#yWingSlide').style.display = 'block'
  document.querySelector('#xWingSlide').style.display = 'none'
  document.querySelector('#tieAdvancedSlide').style.display = 'none'
  document.querySelector('#executorSlide').style.display = 'none'
  document.querySelector('#rebelTransportSlide').style.display = 'none'

  fetch(`https://swapi.dev/api/starships/`)
    .then(res => res.json())
    .then(data => {

      document.querySelector('h2').innerText = data.results[5].name.toUpperCase()
      document.querySelector('h3').innerText = data.results[5].model
    })

    .catch(err => {
      console.log(`errors ${err}`)
    })

    fetch('https://swapi.dev/api/people/')
  .then(res => res.json()) 
  .then(data => {

    let colorSelection = data.results[5].eye_color

  fetch(`https://x-colors.herokuapp.com/api/random/${colorSelection}`)
    .then(res => res.json()) 
    .then(dataTwo => {

      // console.log(dataTwo)

      colorBox = document.querySelector('.colorBox')
      colorBox.style.background = dataTwo.hex;
    })
    .catch(err => {
        console.log(`error ${err}`)
      })
})
.catch(err => {
  console.log(`error ${err}`)
});
}

function xWingImages() {

  document.querySelector('#cr90Slide').style.display = 'none'
  document.querySelector('#starDestroyerSlide').style.display = 'none'
  document.querySelector('#SentinelClassSlide').style.display = 'none'
  document.querySelector('#deathStarSlide').style.display = 'none'
  document.querySelector('#millenniumFalconSlide').style.display = 'none'
  document.querySelector('#yWingSlide').style.display = 'none'
  document.querySelector('#xWingSlide').style.display = 'block'
  document.querySelector('#tieAdvancedSlide').style.display = 'none'
  document.querySelector('#executorSlide').style.display = 'none'
  document.querySelector('#rebelTransportSlide').style.display = 'none'

  fetch(`https://swapi.dev/api/starships/`)
    .then(res => res.json())
    .then(data => {

      document.querySelector('h2').innerText = data.results[6].name.toUpperCase()
      document.querySelector('h3').innerText = data.results[6].model
    })

    .catch(err => {
      console.log(`errors ${err}`)
    })

    fetch('https://swapi.dev/api/people/')
  .then(res => res.json()) 
  .then(data => {

    let colorSelection = data.results[5].eye_color

  fetch(`https://x-colors.herokuapp.com/api/random/${colorSelection}`)
    .then(res => res.json()) 
    .then(dataTwo => {

      // console.log(dataTwo)

      colorBox = document.querySelector('.colorBox')
      colorBox.style.background = dataTwo.hex;
    })
    .catch(err => {
        console.log(`error ${err}`)
      })
})
.catch(err => {
  console.log(`error ${err}`)
});
}

function tieAdvancedImages() {

  document.querySelector('#cr90Slide').style.display = 'none'
  document.querySelector('#starDestroyerSlide').style.display = 'none'
  document.querySelector('#SentinelClassSlide').style.display = 'none'
  document.querySelector('#deathStarSlide').style.display = 'none'
  document.querySelector('#millenniumFalconSlide').style.display = 'none'
  document.querySelector('#yWingSlide').style.display = 'none'
  document.querySelector('#xWingSlide').style.display = 'none'
  document.querySelector('#tieAdvancedSlide').style.display = 'block'
  document.querySelector('#executorSlide').style.display = 'none'
  document.querySelector('#rebelTransportSlide').style.display = 'none'

  fetch(`https://swapi.dev/api/starships/`)
    .then(res => res.json())
    .then(data => {

      document.querySelector('h2').innerText = data.results[7].name.toUpperCase()
      document.querySelector('h3').innerText = data.results[7].model
    })

    .catch(err => {
      console.log(`errors ${err}`)
    })

    fetch('https://swapi.dev/api/people/')
  .then(res => res.json()) 
  .then(data => {

    let colorSelection = data.results[5].eye_color

  fetch(`https://x-colors.herokuapp.com/api/random/${colorSelection}`)
    .then(res => res.json()) 
    .then(dataTwo => {

      // console.log(dataTwo)

      colorBox = document.querySelector('.colorBox')
      colorBox.style.background = dataTwo.hex;
    })
    .catch(err => {
        console.log(`error ${err}`)
      })
})
.catch(err => {
  console.log(`error ${err}`)
});
}

function executorImages() {

  document.querySelector('#cr90Slide').style.display = 'none'
  document.querySelector('#starDestroyerSlide').style.display = 'none'
  document.querySelector('#SentinelClassSlide').style.display = 'none'
  document.querySelector('#deathStarSlide').style.display = 'none'
  document.querySelector('#millenniumFalconSlide').style.display = 'none'
  document.querySelector('#yWingSlide').style.display = 'none'
  document.querySelector('#xWingSlide').style.display = 'none'
  document.querySelector('#tieAdvancedSlide').style.display = 'none'
  document.querySelector('#executorSlide').style.display = 'block'
  document.querySelector('#rebelTransportSlide').style.display = 'none'

  fetch(`https://swapi.dev/api/starships/`)
    .then(res => res.json())
    .then(data => {

      document.querySelector('h2').innerText = data.results[8].name.toUpperCase()
      document.querySelector('h3').innerText = data.results[8].model
    })

    .catch(err => {
      console.log(`errors ${err}`)
    })

    fetch('https://swapi.dev/api/people/')
  .then(res => res.json()) 
  .then(data => {

    let colorSelection = data.results[5].eye_color

  fetch(`https://x-colors.herokuapp.com/api/random/${colorSelection}`)
    .then(res => res.json()) 
    .then(dataTwo => {

      // console.log(dataTwo)

      colorBox = document.querySelector('.colorBox')
      colorBox.style.background = dataTwo.hex;
    })
    .catch(err => {
        console.log(`error ${err}`)
      })
})
.catch(err => {
  console.log(`error ${err}`)
});
}

function rebelTransportImages() {

  document.querySelector('#cr90Slide').style.display = 'none'
  document.querySelector('#starDestroyerSlide').style.display = 'none'
  document.querySelector('#SentinelClassSlide').style.display = 'none'
  document.querySelector('#deathStarSlide').style.display = 'none'
  document.querySelector('#millenniumFalconSlide').style.display = 'none'
  document.querySelector('#yWingSlide').style.display = 'none'
  document.querySelector('#xWingSlide').style.display = 'none'
  document.querySelector('#tieAdvancedSlide').style.display = 'none'
  document.querySelector('#executorSlide').style.display = 'none'
  document.querySelector('#rebelTransportSlide').style.display = 'block'

  fetch(`https://swapi.dev/api/starships/`)
    .then(res => res.json())
    .then(data => {

      document.querySelector('h2').innerText = data.results[9].name.toUpperCase()
      document.querySelector('h3').innerText = data.results[9].model
    })

    .catch(err => {
      console.log(`errors ${err}`)
    })

    fetch('https://swapi.dev/api/people/')
  .then(res => res.json()) 
  .then(data => {

    let colorSelection = data.results[5].eye_color

  fetch(`https://x-colors.herokuapp.com/api/random/${colorSelection}`)
    .then(res => res.json()) 
    .then(dataTwo => {

      // console.log(dataTwo)

      colorBox = document.querySelector('.colorBox')
      colorBox.style.background = dataTwo.hex;
    })
    .catch(err => {
        console.log(`error ${err}`)
      })
})
.catch(err => {
  console.log(`error ${err}`)
});
}






// let activate = document.querySelector('.starShip').addEventListener('click', colorOverlay)

// function colorOverlay(){

// fetch('https://swapi.dev/api/people/')
//   .then(res => res.json()) 
//   .then(data => {

//     let colorSelection = data.results[5].eye_color

//   fetch(`https://x-colors.herokuapp.com/api/random/${colorSelection}`)
//     .then(res => res.json()) 
//     .then(dataTwo => {

//       // console.log(dataTwo)

//       colorBox = document.querySelector('.colorBox')
//       colorBox.style.background = dataTwo.hex;
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//       })
// })
// .catch(err => {
//   console.log(`error ${err}`)
// });
// }
    



    // for ( let i = 0; i < data.results.length; i++ ){

    // console.log(data.results[i].eye_color)

    // }

    // let colorRandomizer = Math.floor(Math.random() * data.results[i].eye_color.length)
    // console.log(colorRandomizer[0])

    // let randomCharacter = data.results[colorRandomizer].eye_color

    // let randomIndex = Math.floor(Math.random() * data.length )

    // let randomCharacter = data[randomIndex].firstName.toLowerCase()
    // }




/*

fetch(`https://swapi.dev/api/starships/`)
.then(res => res.json())
.then(data => {

  document.querySelector('h2').innerText = data.results[2].name
  document.querySelector('h3').innerText = data.results[2].model
})

.catch(err => {
  console.log(`errors ${err}`)
})

*/






















