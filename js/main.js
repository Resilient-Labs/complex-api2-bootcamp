document.querySelector('button').addEventListener('click', press)
let section = document.querySelector('.result')
function press(){


let result = document.querySelector('.userInput').value

const url = `https://pokeapi.co/api/v2/pokemon/${result}`

console.log(result)
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // console.log(data)
      let arr = data.moves

      
      arr.forEach((move) => {
        let url2 = `https://api.giphy.com/v1/gifs/search?api_key=80Mi8khejAPmcu0v7pSkKqvw6H8VvLGI&q=${move.move.name}&limit=1&offset=0&rating=g&lang=en`
        // console.log(move)
        fetch(url2)
          .then(res => res.json()) // parse response as JSON
          .then(gifData => {
            // console.log(gifData)
            let imgurl = gifData.data[0].images.original.url
            let img = document.createElement('img')
            let h2 = document.createElement('h2')
            let text = document.createTextNode(move.move.name)
            img.src = imgurl
            h2.appendChild(text)
            section.appendChild(h2)
            section.appendChild(img)
      

    })
    .catch(err => {
         console.log(`error ${err}`)
  });
      })

    })
    .catch(err => {
        console.log(`error ${err}`)
});
}
