document.querySelector('.button').addEventListener('click', getDogBreed)

function getDogBreed(){
  fetch(`https://dog.ceo/api/breeds/image/random`)
  .then (res => res.json())
  .then (data => {
    let wordArray = data.message.split('/')
    document.querySelector('img').src = data.message
    let dog = wordArray[4].split('-')
  dogFacts(dog[0])
  }) 
}

function dogFacts(dog){
  console.log(dog)
  let url = `https://api.api-ninjas.com/v1/dogs?name=${dog}`
  fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": "5HGFWg+ODdRoCmJ+3pkEWQ==2qKsh93nbMsdCcIN"
    },
      contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
  }) 
  .then (res => res.json())
  .then (data => {
    console.log(data)
    if(!data){
      document.querySelector('h2').innerText = `sorry, no facts about this ${dog}`
      return
    }
    document.querySelector('h2').innerText = data[0].name
    document.querySelector('.play').innerText = 'Playfulness: ' + data[0].playfulness + '/5'
    document.querySelector('.shed').innerText = 'Shedding: ' + data[0].shedding + '/5'
    document.querySelector('.protect').innerText = 'Protectiveness ' + data[0].protectiveness + '/5'
  })
}