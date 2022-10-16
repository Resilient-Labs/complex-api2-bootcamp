//flew solo for this one.

document.querySelector('button').addEventListener('click', filmLookup)

function filmLookup() {
    let i = 0
let searchedTitle = document.querySelector('input').value

fetch(`https://ghibliapi.herokuapp.com/films`)
    .then(res => res.json())
    .then(data => {
       console.log(data)
       while (searchedTitle.toLowerCase() != data[i].title.toLowerCase()) {
        i++
       }
       let title = data[i].title
       document.querySelector('h2').innerText = data[i].title
       document.querySelector('#description').innerText = data[i].description

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=2b47706f4dff4d297999562ec2047999&language=en-US&query=${title}&page=1&include_adult=false`) 
      .then(res => res.json())
      .then(data => {
        
        console.log(data.results[0])
        let sanityCheck = 0
         while (data.results[sanityCheck].title != title) {
        sanityCheck++ //somehow, searching 'spirited away' got "The Art of Spirited Away", hence needing this loop
      }

        let poster = data.results[sanityCheck].poster_path
        document.querySelector('#JPN').innerText = data.results[sanityCheck].original_title
        document.querySelector('img').src= `https://image.tmdb.org/t/p/original/${poster}`
      })
})



.catch(err=> {
    console.log(`error${err}`)
})
}
