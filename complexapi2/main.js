document.querySelector('button').addEventListener('click', getSuperHero)

function getSuperHero(){
   
     let name = Math.ceil(Math.random() * 826)

     fetch(`https://rickandmortyapi.com/api/character/${name}`)
     .then(res => res.json())
     .then(name => {
         console.log(name)
         document.querySelector('.showcharacters').innerText = name.name

         let characterName = name.name + "Rick and Morty"
         fetch(`https://api.giphy.com/v1/gifs/search?api_key=rV1flxicDnEmt2JO3UCGlw3w7Nsusnel&q=${characterName}`)
             .then(res => res.json())
             .then(jokes =>{

                let number = Math.ceil(Math.random() * 20)
                
                 console.log(jokes.data[number].images.original.url)
                document.querySelector('img').src = jokes.data[number].images.original.url
             }) 

     })
     .catch(err => {
         console.log(`error ${err}`)
     })
}