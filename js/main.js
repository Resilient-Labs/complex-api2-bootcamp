document.querySelector('button').addEventListener('click', getChar)

function getChar(){
    const character = document.querySelector('input').value
   // const url = `https://api.giphy.com/v1/gifs/random?api_key=sYazRak2RTvfj7VxB4EJV82KqtXY62uo&tag=Marvel&rating=g`
   const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${character}&ts=3&apikey=36e8036d471c1941953f77d43d4d8e96&hash=98a210e0cc9536de0a1742801535b7dd`

    fetch(url)
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data)
      console.log(data.data.results[Math.floor(Math.random(data.length))].name)
      const tag = `https://api.giphy.com/v1/gifs/search?api_key=sYazRak2RTvfj7VxB4EJV82KqtXY62uo&q=${data.data.results[Math.floor(Math.random(data.length))].name}&limit=1&offset=0&rating=pg-13&lang=en`
      fetch(tag)
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data)
      console.log(data.data[0].embed_url)
      document.querySelector('img').src = data.data[0].embed_url 
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });
      
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });
}
