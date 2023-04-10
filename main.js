const bttn = document.querySelector('button')
const nameH2 = document.querySelector('.name')
const ageH2 = document.querySelector('.age')
const factH2 = document.querySelector('.fact')
// let nameAge = ''

function numberToFact() {
  let nameInput = document.querySelector('input').value
  console.log(nameInput)
  const url = `https://api.agify.io/?name=${nameInput}`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(`first fetch reslt = ${data}`)
      nameH2.innerText = data.name
      ageH2.innerText = data.age
      let nameAge = data.age

      const url2 = `http://numbersapi.com/${nameAge}`
      console.log(`url2 = ${url2}`)
      fetch(url2)
        .then(res => res.text())
        .then(factData => {
          console.log(`fetch 2 result = ${factData}`)
          factH2.innerText = factData// need
        })
     }
    )
}

bttn.addEventListener('click', numberToFact)