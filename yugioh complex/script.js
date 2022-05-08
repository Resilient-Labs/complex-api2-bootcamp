document.querySelector('button').addEventListener('click', getCard)


function getCard() {

let cardName = document.querySelector('input').value
fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardName}`, {
    method: 'GET', 
    headers: {
        'Host': '<calculated when request is sent>', //info from Postman
        'User-Agent': 'PostmanRuntime/7.29.0',
        'Accept' : '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection' : 'keep-alive'
     }
  })
.then(res => res.json())
.then(response =>{
    console.log(response)
      console.log(response.data[0].card_images[0].image_url)  // this is how to find the image url of the first card
    // document.querySelector('h2').innerText = data.current.temp_f
    document.querySelector('.card').src = response.data[0].card_images[0].image_url
})
.catch(err => {
    console.log(`error &{err}`)
});
fetch(`https://api.giphy.com/v1/gifs/search?api_key=Gektd6pqhyYLu1TdZKAi42vKwkVVfG8T&q=${cardName}&limit=5&offset=0&rating=g&lang=en`)
.then(res => res.json())
.then(data =>{
  console.log(data)
  document.querySelector('.one').src = data.data[0].images.downsized.url
  document.querySelector('.two').src = data.data[1].images.downsized.url
  document.querySelector('.three').src = data.data[2].images.downsized.url
  document.querySelector('.four').src = data.data[3].images.downsized.url
  document.querySelector('.five').src = data.data[4].images.downsized.url
})
.catch(err => {
  console.log(`error &{err}`)
});
}