document.querySelector('.button').addEventListener('click', getLanguage)


function getLanguage () {
  let input = document.querySelector('.input').value
  let noun = document.querySelector('select').value.toLowerCase()
  console.log(noun)

  fetch (`https://www.dictionaryapi.com/api/v3/references/spanish/json/${input}?key=704187c1-20d8-4bc5-ba9f-f962f7410935`)
  .then(res => res.json())

  .then(data => {
    console.log(data)
    let word = data.find(w => w.fl.includes(noun))
    console.log(word)
    document.querySelector('.results').innerText = word.shortdef[0]
    getPic(word.shortdef[0])
  })

}

function getPic (word) {
fetch(`https://api.unsplash.com/search/photos/?query=${word}&client_id=kR04lnDXjJiMC590ufRTw1Nesijy1c4mcfC2BVWlEBw`)

.then(res => res.json())

.then(data => {
  console.log(data)
  document.querySelector('img').src = data.results[0].urls.regular
})
}


